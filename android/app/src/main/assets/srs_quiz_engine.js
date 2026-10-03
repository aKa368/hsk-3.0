/**
 * SRS Quiz Engine for HSK Flashcards
 * Implements SM-2 algorithm and quiz generation from HSK_DICTIONARY
 * Export as window.SRSQuizEngine (browser) or module.exports (Node)
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.SRSQuizEngine = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // Lấy HSK_DICTIONARY động để luôn cập nhật khi dict nạp xong
    function getDict() {
        if (typeof window !== 'undefined' && window.HSK_DICTIONARY && window.HSK_DICTIONARY.length > 0) {
            return window.HSK_DICTIONARY;
        }
        if (typeof global !== 'undefined' && global.HSK_DICTIONARY && global.HSK_DICTIONARY.length > 0) {
            return global.HSK_DICTIONARY;
        }
        return [];
    }

    // LocalStorage mock for Node.js environment
    var localStorage = (function() {
        if (typeof window !== 'undefined' && window.localStorage) {
            return window.localStorage;
        }
        var store = {};
        return {
            getItem: function(key) {
                return store[key] || null;
            },
            setItem: function(key, value) {
                store[key] = String(value);
            },
            removeItem: function(key) {
                delete store[key];
            },
            clear: function() {
                store = {};
            }
        };
    })();

    // LocalStorage key
    var STORAGE_KEY = 'hsk_srs_deck';

    // SM-2 constants
    var MIN_EFACTOR = 1.3;
    var INITIAL_EFACTOR = 2.5;

    // Helper: now in ms
    function now() {
        return Date.now();
    }

    // Helper: clone object
    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // Helper: get random distinct elements from array
    function sample(array, count) {
        var shuffled = array.slice(0);
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = tmp;
        }
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    // Helper: find card by id in deck
    function findCard(deck, id) {
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].id === id) return deck[i];
        }
        return null;
    }

    // Initialize SRS deck from HSK_DICTIONARY or load from storage
    function initSRS() {
        var stored = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
        var deck;
        if (stored) {
            try {
                deck = JSON.parse(stored);
            } catch (e) {
                console.error('Failed to parse SRS deck from storage', e);
                deck = createInitialDeck();
            }
        } else {
            deck = createInitialDeck();
        }
        saveDeck(deck);
        return deck;
    }

    function createInitialDeck() {
        var deck = [];
        for (var i = 0; i < getDict().length; i++) {
            var item = HSK_DICTIONARY[i];
            // Ensure we have required fields
            if (!item.zh) continue;
            deck.push({
                id: item.zh, // use Chinese word as id (could also use index)
                zh: item.zh,
                py: item.py || '',
                en: item.en || '',
                vi: item.vi || '',
                lvl: item.lvl || '',
                lvl_num: item.lvl_num || 0,
                interval: 0, // days
                repeat: 0,
                efactor: INITIAL_EFACTOR,
                nextReview: now() // due immediately
            });
        }
        return deck;
    }

    function saveDeck(deck) {
        try {
            if (typeof localStorage !== 'undefined') { localStorage.setItem(STORAGE_KEY, JSON.stringify(deck)); }
        } catch (e) {
            console.warn('Failed to save SRS deck to localStorage', e);
        }
    }

    // Get cards due for review (nextReview <= now)
    function getDueCards() {
        var deck = loadDeck();
        var due = [];
        var t = now();
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].nextReview <= t) {
                due.push(deck[i]);
            }
        }
        return due;
    }

    // Load deck from storage (always returns array)
    function loadDeck() {
        var stored = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error('Corrupt SRS deck in storage', e);
                return [];
            }
        }
        return [];
    }

    // Review a card with rating (0-5, where >=3 is correct)
    function reviewCard(cardId, rating) {
        var deck = loadDeck();
        var card = findCard(deck, cardId);
        if (!card) {
            console.warn('Card not found:', cardId);
            return false;
        }
        // Ensure rating is integer 0-5
        rating = Math.max(0, Math.min(5, Math.round(rating)));
        var correct = rating >= 3;
        if (correct) {
            if (card.repeat === 0) {
                card.interval = 1;
            } else if (card.repeat === 1) {
                card.interval = 6;
            } else {
                card.interval = Math.round(card.interval * card.efactor);
            }
            card.repeat += 1;
            // Update EFactor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
            // where q is quality (0-5). We'll map rating to quality: rating 0-5 => quality same.
            var q = rating;
            card.efactor += (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
            if (card.efactor < MIN_EFACTOR) {
                card.efactor = MIN_EFACTOR;
            }
        } else {
            // Failed review
            card.repeat = 0;
            card.interval = 1;
            // Slight penalty to EFactor (optional)
            card.efactor = Math.max(MIN_EFACTOR, card.efactor - 0.2);
        }
        card.nextReview = now() + card.interval * 24 * 60 * 60 * 1000;
        saveDeck(deck);
        return true;
    }

    // Generate a quiz of given HSK level and count
    function generateQuiz(hskLevel, count) {
        // Filter by level
        var normTarget = String(hskLevel || 'all').replace(/\s+/g, '').toUpperCase();
        var filtered = getDict().filter(function(item) {
            if (normTarget === 'ALL') return true;
            var itemLvlNorm = String(item.lvl || '').replace(/\s+/g, '').toUpperCase();
            return itemLvlNorm === normTarget || ('HSK' + item.lvl_num) === normTarget || String(item.lvl_num) === normTarget;
        });
        if (filtered.length === 0) {
            console.warn('No words found for level:', hskLevel);
            return [];
        }
        var selected = sample(filtered, count);
        var quizItems = [];
        for (var i = 0; i < selected.length; i++) {
            var word = selected[i];
            // Randomly choose quiz type: 0=pinyin, 1=meaning, 2=audio (fallback to pinyin)
            var type = Math.floor(Math.random() * 3);
            var question, options, correctIdx;
            if (type === 0) {
                // Pinyin quiz: show zh, choose correct py
                question = word.zh;
                correctIdx = 0; // we will place correct at random later
                options = [word.py_clean || word.py]; // use py_clean if available else py
                // Add 3 distractors from other words' py_clean/py
                var distractors = [];
                for (var j = 0; j < getDict().length && distractors.length < 3; j++) {
                    if (HSK_DICTIONARY[j].zh === word.zh) continue;
                    var py = HSK_DICTIONARY[j].py_clean || HSK_DICTIONARY[j].py;
                    if (py && options.indexOf(py) === -1 && distractors.indexOf(py) === -1) {
                        distractors.push(py);
                    }
                }
                options = options.concat(distractors);
                // Shuffle options and find new correctIdx
                for (var k = options.length - 1; k > 0; k--) {
                    var r = Math.floor(Math.random() * (k + 1));
                    var tmp = options[k];
                    options[k] = options[r];
                    options[r] = tmp;
                    if (options[k] === word.py_clean || options[k] === word.py) correctIdx = k;
                    if (options[r] === word.py_clean || options[r] === word.py) correctIdx = r;
                }
            } else if (type === 1) {
                // Meaning quiz: show zh, choose correct English meaning
                question = word.zh;
                correctIdx = 0;
                options = [word.en];
                // Add 3 distractors from other words' en
                var distractors = [];
                for (var j = 0; j < getDict().length && distractors.length < 3; j++) {
                    if (HSK_DICTIONARY[j].zh === word.zh) continue;
                    var en = HSK_DICTIONARY[j].en;
                    if (en && options.indexOf(en) === -1 && distractors.indexOf(en) === -1) {
                        distractors.push(en);
                    }
                }
                options = options.concat(distractors);
                // Shuffle
                for (var k = options.length - 1; k > 0; k--) {
                    var r = Math.floor(Math.random() * (k + 1));
                    var tmp = options[k];
                    options[k] = options[r];
                    options[r] = tmp;
                    if (options[k] === word.en) correctIdx = k;
                    if (options[r] === word.en) correctIdx = r;
                }
            } else {
                // Audio quiz: simulate by using pinyin as "audio" (play sound not implemented)
                // We'll treat as pinyin quiz but with a different label
                question = '[Audio] ' + word.zh; // placeholder
                correctIdx = 0;
                options = [word.py_clean || word.py];
                var distractors = [];
                for (var j = 0; j < getDict().length && distractors.length < 3; j++) {
                    if (HSK_DICTIONARY[j].zh === word.zh) continue;
                    var py = HSK_DICTIONARY[j].py_clean || HSK_DICTIONARY[j].py;
                    if (py && options.indexOf(py) === -1 && distractors.indexOf(py) === -1) {
                        distractors.push(py);
                    }
                }
                options = options.concat(distractors);
                // Shuffle
                for (var k = options.length - 1; k > 0; k--) {
                    var r = Math.floor(Math.random() * (k + 1));
                    var tmp = options[k];
                    options[k] = options[r];
                    options[r] = tmp;
                    if (options[k] === word.py_clean || options[k] === word.py) correctIdx = k;
                    if (options[r] === word.py_clean || options[r] === word.py) correctIdx = r;
                }
            }
            quizItems.push({
                question: question,
                options: options,
                correctIdx: correctIdx,
                type: type === 0 ? 'pinyin' : type === 1 ? 'meaning' : 'audio',
                word: word
            });
        }
        return quizItems;
    }

    // Check answer for a quiz item
    function checkAnswer(quizItem, selectedIdx) {
        return quizItem.correctIdx === selectedIdx;
    }


    // Render SRS UI into containerId
    function renderSRSUI(containerId) {
        var container = typeof document !== 'undefined' ? document.getElementById(containerId) : null;
        if (!container) return;

        var due = getDueCards();
        var dueEl = document.getElementById('srs-due-count');
        if (dueEl) dueEl.textContent = due.length.toLocaleString();

        if (due.length === 0) {
            container.innerHTML = '<div class="paper-card quiz-card" style="text-align:center; padding: 40px 20px;">' +
                '<div style="font-size:3rem; margin-bottom:12px;">🎉</div>' +
                '<h3>Tuyệt vời! Bạn đã hoàn thành tất cả thẻ cần ôn hôm nay.</h3>' +
                '<p style="color:var(--paper-text-muted); margin-top:8px;">Hãy quay lại vào ngày mai hoặc bấm [Làm mới phiên ôn] để luyện lại.</p>' +
                '</div>';
            return;
        }

        var card = due[0];
        container.innerHTML = 
            '<div class="srs-card-box" id="srs-active-card">' +
                '<div class="srs-char-front">' + card.zh + '</div>' +
                '<div style="font-size:0.9rem; color:var(--paper-accent); margin-top:8px;">[Chạm vào thẻ để lật xem đáp án & phát âm]</div>' +
                '<div class="srs-details-back" id="srs-card-back">' +
                    '<div style="font-size:1.4rem; color:var(--paper-accent); font-weight:700;">' + (card.py || '') + ' (' + (card.hv || '') + ')</div>' +
                    '<div style="font-size:1rem; margin-top:8px; color:var(--paper-text);">' + (card.vi || card.en || '') + '</div>' +
                    '<div style="margin-top:10px;"><button class="paper-btn sm-btn" id="btn-srs-audio">🔊 Nghe phát âm</button></div>' +
                '</div>' +
                '<div class="srs-rating-bar" id="srs-rating-actions" style="display:none;">' +
                    '<button class="srs-rate-btn again" data-rate="1">❌ Quên (1đ)</button>' +
                    '<button class="srs-rate-btn hard" data-rate="2">⚠️ Khó (2đ)</button>' +
                    '<button class="srs-rate-btn good" data-rate="3">✅ Nhớ (3đ)</button>' +
                    '<button class="srs-rate-btn easy" data-rate="4">⭐ Dễ (4đ)</button>' +
                '</div>' +
            '</div>';

        var cardBox = document.getElementById('srs-active-card');
        var backBox = document.getElementById('srs-card-back');
        var ratingBar = document.getElementById('srs-rating-actions');
        var audioBtn = document.getElementById('btn-srs-audio');

        if (audioBtn) {
            audioBtn.onclick = function(e) {
                e.stopPropagation();
                if (typeof window.speakTTS === 'function') window.speakTTS(card.zh);
            };
        }

        cardBox.onclick = function() {
            backBox.classList.add('visible');
            ratingBar.style.display = 'flex';
            if (typeof window.speakTTS === 'function') window.speakTTS(card.zh);
        };

        ratingBar.querySelectorAll('.srs-rate-btn').forEach(function(btn) {
            btn.onclick = function(e) {
                e.stopPropagation();
                var rate = parseInt(btn.getAttribute('data-rate'));
                reviewCard(card.id, rate);
                renderSRSUI(containerId);
            };
        });
    }

    // State for interactive quiz session
    var currentQuizSession = null;

    function renderQuizUI(containerId, level, count) {
        var container = typeof document !== 'undefined' ? document.getElementById(containerId) : null;
        if (!container) return;

        level = level || 'all';
        count = count || 10;

        var questions = generateQuiz(level, count);
        if (questions.length === 0) {
            container.innerHTML = '<div class="paper-card quiz-card" style="text-align:center;">Không tìm thấy câu hỏi phù hợp cho cấp độ này.</div>';
            return;
        }

        currentQuizSession = {
            questions: questions,
            currentIdx: 0,
            score: 0,
            total: questions.length
        };

        showQuizQuestion(containerId);
    }

    function showQuizQuestion(containerId) {
        var container = document.getElementById(containerId);
        if (!container || !currentQuizSession) return;

        var sess = currentQuizSession;
        if (sess.currentIdx >= sess.total) {
            // Hiển thị kết quả tổng kết
            var percent = Math.round((sess.score / sess.total) * 100);
            container.innerHTML = 
                '<div class="paper-card quiz-card" style="text-align:center; padding:30px;">' +
                    '<div style="font-size:3rem; margin-bottom:10px;">🏆</div>' +
                    '<h2>Hoàn thành bài thi thử!</h2>' +
                    '<p style="font-size:1.3rem; margin:15px 0;">Kết quả: <strong style="color:var(--paper-accent);">' + sess.score + '/' + sess.total + ' câu</strong> (' + percent + '%)</p>' +
                    '<button class="paper-btn primary-btn" id="btn-quiz-retry" style="margin-top:15px;">🔄 Làm bài thi khác</button>' +
                '</div>';
            var retryBtn = document.getElementById('btn-quiz-retry');
            if (retryBtn) {
                retryBtn.onclick = function() {
                    var lvl = document.getElementById('quiz-level-select')?.value || 'all';
                    var cnt = parseInt(document.getElementById('quiz-count-select')?.value || '10');
                    renderQuizUI(containerId, lvl, cnt);
                };
            }
            return;
        }

        var q = sess.questions[sess.currentIdx];
        var promptText = q.question;
        var promptHint = 'Chọn đáp án đúng:';
        if (q.type === 'pinyin') promptHint = 'Chọn Pinyin chuẩn xác cho chữ:';
        else if (q.type === 'meaning') promptHint = 'Chọn giải nghĩa chính xác cho từ:';
        else if (q.type === 'audio') promptHint = 'Nghe phát âm và chọn chữ đúng:';

        var optionsHtml = q.options.map(function(opt, idx) {
            return '<button class="quiz-opt-btn" data-opt-idx="' + idx + '">' + (idx + 1) + '. ' + opt + '</button>';
        }).join('');

        container.innerHTML = 
            '<div class="paper-card quiz-card">' +
                '<div class="quiz-header">' +
                    '<span>Câu ' + (sess.currentIdx + 1) + '/' + sess.total + '</span>' +
                    '<span>Điểm: ' + sess.score + '</span>' +
                '</div>' +
                '<div style="font-size:0.95rem; color:var(--paper-text-muted); text-align:center;">' + promptHint + '</div>' +
                '<div class="quiz-prompt">' + promptText + '</div>' +
                (q.type === 'audio' ? '<div style="text-align:center; margin-bottom:15px;"><button class="paper-btn sm-btn" id="btn-quiz-replay">🔊 Nghe lại âm thanh</button></div>' : '') +
                '<div class="quiz-opt-grid" id="quiz-options-box">' + optionsHtml + '</div>' +
                '<div id="quiz-feedback-box" style="margin-top:15px; font-weight:700; text-align:center; min-height:24px;"></div>' +
            '</div>';

        if (q.type === 'audio') {
            if (typeof window.speakTTS === 'function') window.speakTTS(q.word.zh);
            var replayBtn = document.getElementById('btn-quiz-replay');
            if (replayBtn) replayBtn.onclick = function() {
                if (typeof window.speakTTS === 'function') window.speakTTS(q.word.zh);
            };
        }

        var optButtons = container.querySelectorAll('.quiz-opt-btn');
        var feedback = document.getElementById('quiz-feedback-box');

        optButtons.forEach(function(btn) {
            btn.onclick = function() {
                var chosenIdx = parseInt(btn.getAttribute('data-opt-idx'));
                var isCorrect = checkAnswer(q, chosenIdx);

                optButtons.forEach(function(b) { b.disabled = true; });

                if (isCorrect) {
                    btn.classList.add('correct');
                    feedback.innerHTML = '<span style="color:#2e7d32;">✅ Chính xác! (' + (q.word.py || '') + ' · ' + (q.word.hv || '') + ')</span>';
                    sess.score++;
                } else {
                    btn.classList.add('wrong');
                    var correctBtn = container.querySelector('[data-opt-idx="' + q.correctIdx + '"]');
                    if (correctBtn) correctBtn.classList.add('correct');
                    feedback.innerHTML = '<span style="color:#c62828;">❌ Chưa đúng! Đáp án là: ' + q.options[q.correctIdx] + '</span>';
                }

                if (typeof window.speakTTS === 'function') window.speakTTS(q.word.zh);

                setTimeout(function() {
                    sess.currentIdx++;
                    showQuizQuestion(containerId);
                }, 1400);
            };
        });
    }

    // Public API
    return {
        initSRS: initSRS,
        getDueCards: getDueCards,
        reviewCard: reviewCard,
        generateQuiz: generateQuiz,
        checkAnswer: checkAnswer,
        renderSRSUI: renderSRSUI,
        renderQuizUI: renderQuizUI
    };

}));
