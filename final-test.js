// ============================================
// FINAL TEST — Pflege 33: Sterbebegleitung
// 25 întrebări × 5 categorii
// normalizeAnswerFT elimină . ! ? ; : + .trim() → la propoziții punctul final NU contează
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. WAS IST STERBEBEGLEITUNG? (5) ===
    { id: 1, category: 'Was ist Sterbebegleitung?', type: 'fill', question: 'Însoțirea la final (cu articol): „die ____"', correct: 'Sterbebegleitung', accept: ['sterbebegleitung'] },
    { id: 2, category: 'Was ist Sterbebegleitung?', type: 'mc', question: 'Ce face îngrijitoarea în Sterbebegleitung?', options: ['Vindecă boala', 'Însoțește: confort, prezență, demnitate (NU vindecă)', 'Ia decizii medicale', 'Decide tratamentul'], correctIndex: 1, correct: 'Însoțește — confort, prezență, demnitate' },
    { id: 3, category: 'Was ist Sterbebegleitung?', type: 'fill', question: 'Îngrijirea de confort (nu de vindecare) = die ____', correct: 'Palliativpflege', accept: ['palliativpflege'] },
    { id: 4, category: 'Was ist Sterbebegleitung?', type: 'mc', question: 'Scopul îngrijirii paliative este:', options: ['Să prelungească suferința', 'Confort + demnitate (viață și demnitate la zile)', 'Vindecarea cu orice preț', 'Nimic anume'], correctIndex: 1, correct: 'Confort + demnitate' },
    { id: 5, category: 'Was ist Sterbebegleitung?', type: 'fill', question: 'A însoți = ____ (verb)', correct: 'begleiten', accept: ['begleiten'] },

    // === 2. ANZEICHEN & BEDÜRFNISSE (5) ===
    { id: 6, category: 'Anzeichen & Bedürfnisse', type: 'mc', question: 'La final, pacientul nu mai mănâncă și bea puțin. Ce faci?', options: ['Forțez mâncarea și lichidele', 'E firesc — umezesc gura, NU forțez', 'Îl cert', 'Sun imediat urgența'], correctIndex: 1, correct: 'E firesc — umezesc gura, nu forțez' },
    { id: 7, category: 'Anzeichen & Bedürfnisse', type: 'fill', question: 'Respirația (cu articol): „die ____"', correct: 'Atmung', accept: ['atmung'] },
    { id: 8, category: 'Anzeichen & Bedürfnisse', type: 'mc', question: '📌 Ce raportezi imediat echipei medicale?', options: ['Nimic', 'Dureri, respirație grea, neliniște mare', 'Doar dacă întreabă familia', 'Doar mâinile reci'], correctIndex: 1, correct: 'Dureri, respirație grea, neliniște mare' },
    { id: 9, category: 'Anzeichen & Bedürfnisse', type: 'fill', question: 'Slab (adjectiv) = ____', correct: 'schwach', accept: ['schwach'] },
    { id: 10, category: 'Anzeichen & Bedürfnisse', type: 'mc', question: 'Durerea și liniștirea la final le decide:', options: ['Eu, singură', 'Medicul / echipa paliativă / Hospiz', 'Familia', 'Pacientul singur'], correctIndex: 1, correct: 'Medicul / echipa paliativă' },

    // === 3. TROST & NÄHE (5) ===
    { id: 11, category: 'Trost & Nähe', type: 'fill', question: 'A alina / a mângâia = ____ (verb)', correct: 'trösten', accept: ['trösten', 'troesten'] },
    { id: 12, category: 'Trost & Nähe', type: 'mc', question: '📌 Ultimul simț care rămâne la final este:', options: ['Văzul', 'Auzul (das Gehör) — îi vorbești blând chiar dacă nu răspunde', 'Gustul', 'Mirosul'], correctIndex: 1, correct: 'Auzul — das Gehör' },
    { id: 13, category: 'Trost & Nähe', type: 'fill', question: 'A ține de mână = die Hand ____', correct: 'halten', accept: ['halten'] },
    { id: 14, category: 'Trost & Nähe', type: 'mc', question: 'Cum alini cel mai mult la final?', options: ['Cu multe explicații', 'Cu prezență: ești acolo, calm, ții mâna, voce blândă', 'Cu medicamente', 'Plecând des din cameră'], correctIndex: 1, correct: 'Cu prezență — da sein, calm, atingere' },
    { id: 15, category: 'Trost & Nähe', type: 'fill', question: 'Auzul (cu articol): „das ____"', correct: 'Gehör', accept: ['gehör', 'gehoer'] },

    // === 4. KONJUNKTIV II (5) ===
    { id: 16, category: 'Konjunktiv II', type: 'mc', question: 'Konjunktiv II îl folosești pentru:', options: ['Comenzi dure', 'Oferte blânde, dorințe, politețe („Möchten Sie…?")', 'Trecut', 'Nimic'], correctIndex: 1, correct: 'Oferte blânde, dorințe, politețe' },
    { id: 17, category: 'Konjunktiv II', type: 'fill', question: '„Ich ____ gern bei Ihnen bleiben." (aș — de la „werden", + Infinitiv)', correct: 'würde', accept: ['würde', 'wuerde'] },
    { id: 18, category: 'Konjunktiv II', type: 'fill', question: '„Es ____ gut, wenn die Familie kommt." (ar fi — de la „sein")', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 19, category: 'Konjunktiv II', type: 'mc', question: 'Care formă e Konjunktiv II de la „können"?', options: ['kann', 'könnte', 'konnte', 'kannte'], correctIndex: 1, correct: 'könnte (aș putea)' },
    { id: 20, category: 'Konjunktiv II', type: 'fill', question: '„____ Sie etwas trinken?" (Doriți — de la „mögen")', correct: 'Möchten', accept: ['möchten', 'moechten'] },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Sunt lângă dvs." → 🇩🇪 ?', correct: 'Ich bin bei Ihnen.', accept: ['ich bin bei ihnen'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Nu sunteți singur." → 🇩🇪 ?', correct: 'Sie sind nicht allein.', accept: ['sie sind nicht allein'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '🚨🚨 Familia te roagă „să-l ajuți să se termine mai repede" (eutanasie). Faci?', options: ['Da, ca să nu sufere', 'NU — nu e rolul tău și nu e legal; confortul/durerea le decide medicul; explici blând', 'Da, dacă cere și pacientul', 'Decid singură'], correctIndex: 1, correct: 'NU — nu e rolul tău, nu e legal; medicul decide' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Aș putea să vă citesc ceva." → 🇩🇪 ? (Konjunktiv II)', correct: 'Ich könnte Ihnen etwas vorlesen.', accept: ['ich könnte ihnen etwas vorlesen', 'ich koennte ihnen etwas vorlesen'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: '🕯️ Herr Klein a decedat. Ce faci?', options: ['Intru în panică', 'Rămân calmă, anunț medicul (constatarea decesului) și familia', 'Plec imediat', 'Nu spun nimănui'], correctIndex: 1, correct: 'Calmă — anunți medicul + familia' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Was ist Sterbebegleitung? · Anzeichen & Bedürfnisse · Trost & Nähe · Konjunktiv II · Traducere+Situații</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Dăruiești prezența care alină la cel mai greu moment.`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
