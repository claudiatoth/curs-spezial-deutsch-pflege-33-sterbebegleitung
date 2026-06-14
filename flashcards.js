// ============================================
// FLASHCARDS — Pflege 33: Sterbebegleitung
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const flashcardsData = [
    // === 1. STERBEN & PALLIATIVPFLEGE (8) ===
    { de: "die Sterbebegleitung", ro: "🕊️ însoțirea la final de viață", audio: "audio/letters/sterbebegleitung.wav" },
    { de: "sterben", ro: "🕯️ a muri", audio: "audio/letters/sterben.wav" },
    { de: "der Tod", ro: "⚰️ moartea", audio: "audio/letters/tod.wav" },
    { de: "die Palliativpflege", ro: "💚 îngrijirea paliativă (confort, nu vindecare)", audio: "audio/letters/palliativpflege.wav" },
    { de: "das Hospiz", ro: "🏠 hospiciul", audio: "audio/letters/hospiz.wav" },
    { de: "begleiten", ro: "🤝 a însoți", audio: "audio/letters/begleiten.wav" },
    { de: "der Abschied", ro: "👋 rămas-bunul / despărțirea", audio: "audio/letters/abschied.wav" },
    { de: "unheilbar krank", ro: "💔 bolnav incurabil", audio: "audio/letters/unheilbar.wav" },

    // === 2. ANZEICHEN & BEDÜRFNISSE (8) ===
    { de: "schwach", ro: "🍂 slab", audio: "audio/letters/schwach.wav" },
    { de: "nicht mehr essen", ro: "🍽️ a nu mai mânca", audio: "audio/letters/nicht-essen.wav" },
    { de: "wenig trinken", ro: "💧 a bea puțin", audio: "audio/letters/wenig-trinken.wav" },
    { de: "viel schlafen", ro: "😴 a dormi mult", audio: "audio/letters/viel-schlafen.wav" },
    { de: "die Atmung", ro: "🫁 respirația", audio: "audio/letters/atmung.wav" },
    { de: "kalte Hände", ro: "🤲 mâini reci", audio: "audio/letters/kalte-haende.wav" },
    { de: "die Schmerzen", ro: "🤕 durerile", audio: "audio/letters/schmerzen.wav" },
    { de: "die Ruhe", ro: "🕯️ liniștea", audio: "audio/letters/ruhe.wav" },

    // === 3. TROST & NÄHE (8) ===
    { de: "trösten", ro: "🤗 a alina / a mângâia", audio: "audio/letters/troesten.wav" },
    { de: "der Trost", ro: "💗 alinarea", audio: "audio/letters/trost.wav" },
    { de: "die Hand halten", ro: "🤝 a ține de mână", audio: "audio/letters/hand-halten.wav" },
    { de: "da sein", ro: "🫂 a fi prezent / acolo", audio: "audio/letters/da-sein.wav" },
    { de: "die Stille", ro: "🤫 tăcerea / liniștea", audio: "audio/letters/stille.wav" },
    { de: "vorlesen", ro: "📖 a citi cu voce tare", audio: "audio/letters/vorlesen.wav" },
    { de: "streicheln", ro: "✋ a mângâia (cu mâna)", audio: "audio/letters/streicheln.wav" },
    { de: "das Gehör", ro: "👂 auzul (ultimul simț)", audio: "audio/letters/gehoer.wav" },

    // === 4. FAMILIE & ABSCHIED (8) ===
    { de: "die Angehörigen", ro: "👪 aparținătorii / rudele", audio: "audio/letters/angehoerige.wav" },
    { de: "die Familie", ro: "👨‍👩‍👧 familia", audio: "audio/letters/familie.wav" },
    { de: "die Trauer", ro: "😢 doliul / durerea sufletească", audio: "audio/letters/trauer.wav" },
    { de: "der Seelsorger", ro: "🙏 duhovnicul / preotul", audio: "audio/letters/seelsorger.wav" },
    { de: "Abschied nehmen", ro: "👋 a-și lua rămas-bun", audio: "audio/letters/abschied-nehmen.wav" },
    { de: "der Arzt", ro: "👨‍⚕️ medicul (chemat la deces)", audio: "audio/letters/arzt.wav" },
    { de: "weinen", ro: "😭 a plânge", audio: "audio/letters/weinen.wav" },
    { de: "der Wunsch", ro: "⭐ dorința (ultima dorință)", audio: "audio/letters/wunsch.wav" },

    // === 5. KONJUNKTIV II (8) ===
    { de: "ich würde …", ro: "💬 aș … (würde + Infinitiv)", audio: "audio/letters/wuerde.wav" },
    { de: "ich könnte …", ro: "💬 aș putea …", audio: "audio/letters/koennte.wav" },
    { de: "ich hätte …", ro: "💬 aș avea …", audio: "audio/letters/haette.wav" },
    { de: "es wäre …", ro: "💬 ar fi …", audio: "audio/letters/waere.wav" },
    { de: "Möchten Sie …?", ro: "🍵 Doriți …?", audio: "audio/letters/moechten-sie.wav" },
    { de: "Könnte ich …?", ro: "🙏 Aș putea …?", audio: "audio/letters/koennte-ich.wav" },
    { de: "Es wäre gut, wenn …", ro: "✅ Ar fi bine dacă …", audio: "audio/letters/waere-gut.wav" },
    { de: "Ich würde gern bleiben.", ro: "🫂 Aș rămâne cu plăcere.", audio: "audio/letters/wuerde-bleiben.wav" },

    // === 6. SÄTZE (8) ===
    { de: "Ich bin bei Ihnen.", ro: "🫂 Sunt lângă dvs.", audio: "audio/letters/bin-bei-ihnen.wav" },
    { de: "Sie sind nicht allein.", ro: "💚 Nu sunteți singur.", audio: "audio/letters/nicht-allein.wav" },
    { de: "Möchten Sie etwas trinken?", ro: "💧 Doriți să beți ceva?", audio: "audio/letters/etwas-trinken.wav" },
    { de: "Ich halte Ihre Hand.", ro: "🤝 Vă țin mâna.", audio: "audio/letters/hand-halte.wav" },
    { de: "Soll ich die Familie rufen?", ro: "👪 Să chem familia?", audio: "audio/letters/familie-rufen.wav" },
    { de: "Möchten Sie einen Seelsorger?", ro: "🙏 Doriți un preot/duhovnic?", audio: "audio/letters/seelsorger-frage.wav" },
    { de: "Es wäre gut, wenn jemand bei ihm bleibt.", ro: "🫂 Ar fi bine să stea cineva cu el.", audio: "audio/letters/jemand-bleibt.wav" },
    { de: "Ich rufe den Arzt.", ro: "📞 Sun medicul.", audio: "audio/letters/rufe-arzt.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Sterben & Palliativpflege · Anzeichen & Bedürfnisse · Trost & Nähe · Familie & Abschied · Konjunktiv II · Sätze.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
