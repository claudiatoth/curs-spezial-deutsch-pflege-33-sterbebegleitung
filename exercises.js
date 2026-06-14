// ============================================
// EXERCISES.JS — Pflege 33: Sterbebegleitung
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/o5DbrS7EaquSPw6dA
// REGULĂ: la propoziții, răspunsul e valid CU sau FĂRĂ punct final
//   → normalizeAnswer elimină . ! ? ; : + .trim() + variante de topică în accept[]
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match Sterbebegleitung + Trost
const ex1Data = [
    { id: 'a', de: 'die Sterbebegleitung', accept: ['insotirea la final', 'insotirea la final de viata', 'insotirea'], correct: 'însoțirea la final de viață' },
    { id: 'b', de: 'die Palliativpflege', accept: ['ingrijirea paliativa', 'ingrijire paliativa'], correct: 'îngrijirea paliativă' },
    { id: 'c', de: 'begleiten', accept: ['a insoti', 'insoti'], correct: 'a însoți' },
    { id: 'd', de: 'der Trost', accept: ['alinarea', 'alinare', 'mangaierea'], correct: 'alinarea' },
    { id: 'e', de: 'trösten', accept: ['a alina', 'a mangaia', 'alina', 'mangaia'], correct: 'a alina / a mângâia' },
    { id: 'f', de: 'die Hand halten', accept: ['a tine de mana', 'a tine mana', 'tine de mana'], correct: 'a ține de mână' },
    { id: 'g', de: 'der Abschied', accept: ['ramas-bunul', 'ramas bun', 'ramas-bun', 'despartirea'], correct: 'rămas-bunul' },
    { id: 'h', de: 'die Angehörigen', accept: ['rudele', 'rude', 'apartinatorii', 'apartinatori'], correct: 'aparținătorii / rudele' },
    { id: 'i', de: 'der Seelsorger', accept: ['duhovnicul', 'preotul', 'duhovnic', 'preot'], correct: 'duhovnicul / preotul' },
    { id: 'j', de: 'das Gehör', accept: ['auzul', 'auz'], correct: 'auzul (ultimul simț)' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🕊️ Scrie traducerea</strong> pentru vocabularul de însoțire + mângâiere.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx1() { ex1Data.forEach(it => { const i = document.getElementById(`ex1-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex1-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 2: Konjunktiv II (STAR — würde/könnte/wäre/hätte/möchte)
const ex2Data = [
    { id: 'a', sentence: '____ Sie etwas trinken? (a dori, politicos — Konjunktiv II de la „mögen", pers. dvs.)', translation: 'DORIȚI să beți ceva?', correct: 'Möchten', accept: ['möchten', 'moechten'] },
    { id: 'b', sentence: 'Ich ____ gern bei Ihnen bleiben. (aș — Konjunktiv II de la „werden")', translation: 'AȘ rămâne cu plăcere lângă dvs.', correct: 'würde', accept: ['würde', 'wuerde'] },
    { id: 'c', sentence: 'Es ____ gut, wenn die Familie kommt. (ar fi — Konjunktiv II de la „sein")', translation: 'AR FI bine dacă vine familia.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'd', sentence: '____ ich Ihnen etwas vorlesen? (aș putea — Konjunktiv II de la „können")', translation: 'AȘ PUTEA să vă citesc ceva?', correct: 'Könnte', accept: ['könnte', 'koennte'] },
    { id: 'e', sentence: 'Er ____ gern seine Familie bei sich. (ar dori/avea — Konjunktiv II de la „haben")', translation: 'AR DORI să aibă familia lângă el.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'f', sentence: 'Ich ____ Ihnen gern helfen. (aș — würde + Infinitiv)', translation: 'V-AȘ ajuta cu plăcere.', correct: 'würde', accept: ['würde', 'wuerde'] },
    { id: 'g', sentence: '____ Sie bitte den Arzt rufen? (ați putea, politicos — können)', translation: 'AȚI PUTEA să sunați medicul, vă rog?', correct: 'Könnten', accept: ['könnten', 'koennten'] },
    { id: 'h', sentence: 'Ich ____ gern einen Moment bleiben. (aș dori — mögen)', translation: 'AȘ DORI să rămân un moment.', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'i', sentence: 'Es ____ schön, ein bisschen Musik zu hören. (ar fi — sein)', translation: 'AR FI frumos să asculte puțină muzică.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'j', sentence: '____ Sie, dass ich die Angehörigen anrufe? (doriți — mögen)', translation: 'DORIȚI să sun rudele?', correct: 'Möchten', accept: ['möchten', 'moechten'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌟 Konjunktiv II (oferte blânde & mângâiere).</strong> La majoritatea verbelor: <strong>würde</strong> + Infinitiv. Formele scurte: <strong>hätte · wäre · könnte · möchte</strong>. Sună politicos și cald.</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx2() { ex2Data.forEach(it => { const i = document.getElementById(`ex2-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex2-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'die Sterbebegleitung', accept: ['die sterbebegleitung', 'sterbebegleitung'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'der Trost', accept: ['der trost', 'trost'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'begleiten', accept: ['begleiten'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'die Atmung', accept: ['die atmung', 'atmung'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'trösten', accept: ['trösten', 'troesten'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'der Abschied', accept: ['der abschied', 'abschied'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'ich würde', accept: ['ich würde', 'ich wuerde'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'es wäre', accept: ['es wäre', 'es waere'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'Ich bin bei Ihnen, Sie sind nicht allein', accept: ['ich bin bei ihnen sie sind nicht allein'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Möchten Sie etwas trinken', accept: ['möchten sie etwas trinken', 'moechten sie etwas trinken'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Sterbebegleitung + Trost + Konjunktiv II.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie ce auzi..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx3() { ex3Data.forEach(it => { const i = document.getElementById(`ex3-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex3-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 4: Sterbebegleitung + Palliativ + Trost + siguranță
const ex4Data = [
    { id: 'a', sentence: 'La final nu vindeci, ci ____ pacientul (verb)', translation: 'BEGLEITEN (a însoți).', correct: 'begleiten', accept: ['begleiten', 'insotesti'] },
    { id: 'b', sentence: 'Îngrijirea de confort (nu de vindecare) = die ____', translation: 'PALLIATIVPFLEGE (îngrijirea paliativă).', correct: 'Palliativpflege', accept: ['palliativpflege', 'die palliativpflege'] },
    { id: 'c', sentence: 'Casa specializată pentru îngrijire la final = das ____', translation: 'HOSPIZ (hospiciul).', correct: 'Hospiz', accept: ['hospiz', 'das hospiz'] },
    { id: 'd', sentence: '📌 Ultimul simț care rămâne = das ____ (auzul)', translation: 'GEHÖR (auzul).', correct: 'Gehör', accept: ['gehör', 'gehoer', 'das gehör'] },
    { id: 'e', sentence: 'Preotul pentru îngrijire spirituală = der ____', translation: 'SEELSORGER (duhovnicul).', correct: 'Seelsorger', accept: ['seelsorger', 'der seelsorger'] },
    { id: 'f', sentence: 'Rudele / aparținătorii = die ____', translation: 'ANGEHÖRIGEN (rudele).', correct: 'Angehörigen', accept: ['angehörigen', 'angehoerigen', 'angehörige', 'angehoerige'] },
    { id: 'g', sentence: '🚨 Medicamentele contra durerii: dai DOAR ce a ____ medicul (a prescris)', translation: 'VERORDNET (a prescris).', correct: 'verordnet', accept: ['verordnet', 'verschrieben'] },
    { id: 'h', sentence: '🕯️ La deces chemi pe ____ pentru constatare (medicul)', translation: 'ARZT (medicul).', correct: 'Arzt', accept: ['arzt', 'den arzt', 'medicul'] },
    { id: 'i', sentence: 'A alina, a mângâia = ____ (verb)', translation: 'TRÖSTEN.', correct: 'trösten', accept: ['trösten', 'troesten'] },
    { id: 'j', sentence: 'A-și lua rămas-bun = Abschied ____ (verb)', translation: 'NEHMEN (Abschied nehmen).', correct: 'nehmen', accept: ['nehmen'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🕊️ Sterbebegleitung + Palliativ + Trost.</strong> A însoți, nu a vindeca · auzul = ultimul simț · Seelsorger + Angehörigen · 🚨 medicația doar ce a prescris medicul.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx4() { ex4Data.forEach(it => { const i = document.getElementById(`ex4-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex4-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 5: Dialog Gap-Fill (Dialog 2 — Anruf bei Dr. Schmidt)
const ex5Data = [
    { id: 'a', sentence: 'Andreea: „Herr Klein ist sehr ____ geworden." (SLAB)', translation: '...a devenit foarte SLAB.', correct: 'schwach', accept: ['schwach'] },
    { id: 'b', sentence: 'Dr. Schmidt: „Er ist in der ____." (FAZA PALIATIVĂ)', translation: 'E în FAZA PALIATIVĂ.', correct: 'Palliativphase', accept: ['palliativphase'] },
    { id: 'c', sentence: 'Dr. Schmidt: „Das Wichtigste ist Ruhe und kein ____." (DURERE)', translation: '...liniștea și fără DURERE.', correct: 'Schmerz', accept: ['schmerz'] },
    { id: 'd', sentence: 'Andreea: „____ ich ihm etwas gegen die Schmerzen geben?" (AȘ PUTEA — Konjunktiv II)', translation: 'AȘ PUTEA să-i dau ceva pentru durere?', correct: 'Könnte', accept: ['könnte', 'koennte'] },
    { id: 'e', sentence: 'Dr. Schmidt: „Nur was ich ____ habe." (AM PRESCRIS)', translation: 'Doar ce AM PRESCRIS eu.', correct: 'verordnet', accept: ['verordnet'] },
    { id: 'f', sentence: 'Andreea: „Er ____ gern seine Familie bei sich." (AR DORI — Konjunktiv II)', translation: 'AR DORI să aibă familia lângă el.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'g', sentence: 'Dr. Schmidt: „Dann rufen Sie die ____." (RUDELE)', translation: 'Atunci chemați RUDELE.', correct: 'Angehörigen', accept: ['angehörigen', 'angehoerigen'] },
    { id: 'h', sentence: 'Dr. Schmidt: „Das ____ gut." (AR FI — Konjunktiv II)', translation: 'AR FI bine.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'i', sentence: 'Dr. Schmidt: „Ja, wenn er das ____." (DOREȘTE — Konjunktiv II)', translation: 'Da, dacă DOREȘTE.', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'j', sentence: 'Dr. Schmidt: „Rufen Sie mich, wenn sich etwas ____." (SE SCHIMBĂ)', translation: 'Sunați-mă dacă SE SCHIMBĂ ceva.', correct: 'ändert', accept: ['ändert', 'aendert'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📞 Dialog gap-fill — Anruf bei Dr. Schmidt (Dialog 2).</strong> Coordonarea paliativă (confort, fără durere) + 🚨 fără medicație fără medic + Konjunktiv II.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx5() { ex5Data.forEach(it => { const i = document.getElementById(`ex5-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex5-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 6: Traducere RO → DE (PROPOZIȚII — punctul final NU contează; Konjunktiv II)
const ex6Data = [
    { id: 'a', ro: 'Sunt lângă dvs.', correct: 'Ich bin bei Ihnen.', accept: ['ich bin bei ihnen'] },
    { id: 'b', ro: 'Nu sunteți singur.', correct: 'Sie sind nicht allein.', accept: ['sie sind nicht allein'] },
    { id: 'c', ro: 'Doriți să beți ceva?', correct: 'Möchten Sie etwas trinken?', accept: ['möchten sie etwas trinken', 'moechten sie etwas trinken'] },
    { id: 'd', ro: 'Vă țin mâna.', correct: 'Ich halte Ihre Hand.', accept: ['ich halte ihre hand'] },
    { id: 'e', ro: 'Aș rămâne cu plăcere lângă dvs.', correct: 'Ich würde gern bei Ihnen bleiben.', accept: ['ich würde gern bei ihnen bleiben', 'ich wuerde gern bei ihnen bleiben'] },
    { id: 'f', ro: 'Aș putea să vă citesc ceva.', correct: 'Ich könnte Ihnen etwas vorlesen.', accept: ['ich könnte ihnen etwas vorlesen', 'ich koennte ihnen etwas vorlesen'] },
    { id: 'g', ro: 'Ar fi bine dacă vine familia.', correct: 'Es wäre gut, wenn die Familie kommt.', accept: ['es wäre gut wenn die familie kommt', 'es waere gut wenn die familie kommt'] },
    { id: 'h', ro: 'Să chem familia?', correct: 'Soll ich die Familie rufen?', accept: ['soll ich die familie rufen'] },
    { id: 'i', ro: 'Doriți un duhovnic?', correct: 'Möchten Sie einen Seelsorger?', accept: ['möchten sie einen seelsorger', 'moechten sie einen seelsorger'] },
    { id: 'j', ro: 'Sun medicul.', correct: 'Ich rufe den Arzt.', accept: ['ich rufe den arzt'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> 💡 Punctul de la final e <strong>opțional</strong>. Atenție la Konjunktiv II (würde/könnte/wäre/möchten) pentru oferte blânde.</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx6() { ex6Data.forEach(it => { const i = document.getElementById(`ex6-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex6-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 7: Schreiben — Raport paliativ pentru Dr. Schmidt
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Raport despre Herr Klein pentru Dr. Schmidt</h4>
                <p>Herr Klein e în îngrijire paliativă și s-a slăbit mult. Scrie-i medicului (Dr. Schmidt) un mesaj scurt în care raportezi cum este și cum îl însoțești.</p>
                <p><strong>Scrie un raport (5-8 propoziții)</strong>: cum e (mănâncă/bea/doarme/respirație/dureri), cum îl alini (prezență, mâna, familia), folosind cel puțin un <strong>Konjunktiv II</strong> („Möchten…", „würde…", „könnte…", „wäre…"). NU dai medicamente din proprie inițiativă — întrebi ce poți face.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Sehr geehrter Dr. Schmidt · ich melde mich wegen Herrn Klein · er ist sehr schwach und schläft viel · er isst nichts mehr und trinkt nur wenig · er hat keine starken Schmerzen, aber er hat Angst · ich bin bei ihm und halte seine Hand · es wäre gut, wenn die Familie bald kommt · könnten Sie mir sagen, was ich noch tun kann? · ich gebe ihm nichts ohne Ihre Anweisung · mit freundlichen Grüßen, Andreea.</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier den Bericht auf Deutsch...
Beispiel:
Sehr geehrter Dr. Schmidt, ich melde mich wegen Herrn Klein..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Sehr geehrter Dr. Schmidt, ich melde mich wegen Herrn Klein. Er ist sehr schwach und schläft viel. Er isst nichts mehr und trinkt nur wenig. Er hat keine starken Schmerzen, aber er hat Angst. Ich bin bei ihm und halte seine Hand. Es wäre gut, wenn die Familie bald kommt. Könnten Sie mir sagen, was ich noch tun kann? Ich gebe ihm nichts ohne Ihre Anweisung. Mit freundlichen Grüßen, Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Stimate Dr. Schmidt, vă scriu în legătură cu Herr Klein. E foarte slăbit și doarme mult. Nu mai mănâncă nimic și bea doar puțin. Nu are dureri puternice, dar îi e frică. Sunt lângă el și îi țin mâna. Ar fi bine dacă vine familia curând. Ați putea să-mi spuneți ce mai pot face? Nu-i dau nimic fără indicația dvs. Cu stimă, Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/o5DbrS7EaquSPw6dA" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite raportul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (!scoreEl) return;
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = '💪', msg = 'Mai exersează!';
    if (pct === 100) { emoji = '🏆'; msg = 'Perfect!'; }
    else if (pct >= 80) { emoji = '⭐'; msg = 'Foarte bine!'; }
    else if (pct >= 60) { emoji = '👍'; msg = 'Bine!'; }
    else if (pct >= 40) { emoji = '📚'; msg = 'Continuă!'; }
    scoreEl.className = 'score show';
    scoreEl.innerHTML = `<div class="score-value">${emoji} ${result.correct}/${result.total} (${pct}%)</div><div class="score-message">${msg}</div>`;
}

function resetExercise(n) {
    const resetters = { 1: resetEx1, 2: resetEx2, 3: resetEx3, 4: resetEx4, 5: resetEx5, 6: resetEx6 };
    if (resetters[n]) resetters[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.className = 'score'; scoreEl.innerHTML = ''; }
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = event.currentTarget;
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause(); btn.textContent = '▶';
    }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
