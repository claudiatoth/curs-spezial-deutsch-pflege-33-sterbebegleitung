// ============================================
// PDF BUILDER — Pflege L33: Sterbebegleitung
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚠️ Notă de siguranță — citește înainte</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC și de atitudine</strong> să însoțești un pacient la final de viață. 🚨🚨 Îngrijitoarea <strong>NU</strong> ia decizii medicale sau de final de viață, <strong>NU</strong> dă medicamente peste indicația medicului, și <strong>NU</strong> discută/ajută eutanasia (nu e rolul tău și nu e legal). 🚨 Confortul paliativ și calmarea durerii le stabilește medicul / echipa paliativă / Hospiz. 🚨 La durere, respirație grea sau neliniște mare → anunți imediat echipa. 🕯️ La deces → rămâi calmă, anunți medicul (constatarea decesului) și familia. Tu <strong>alini, ești prezentă, păstrezi demnitatea și raportezi</strong>.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Herr Klein e în îngrijire paliativă; Andreea îl însoțește cu blândețe, iar Dr. Schmidt coordonează confortul paliativ</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · însoțește</div></div>
                <div class="cast-card"><div class="klein-pdf-avatar">👴</div><div class="name">Herr Klein</div><div class="detail">Pacient · paliativ</div></div>
                <div class="cast-card"><div class="doctor-pdf-avatar">👨‍⚕️</div><div class="name">Dr. Schmidt</div><div class="detail">Medic de familie</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — Was ist Sterbebegleitung + Anzeichen + Trost & Nähe + Familie & Abschied + Konjunktiv II + Würde</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Ich bin bei Ihnen + Anruf bei Dr. Schmidt</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                let spkrName;
                if (r.speaker === 'andreea') spkrName = '🧑‍⚕️ Andreea';
                else if (r.speaker === 'klein') spkrName = '👴 Herr Klein';
                else if (r.speaker === 'doctor') spkrName = '👨‍⚕️ Dr. Schmidt';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — Sterbebegleitung + Trost</h3>
                <div class="instruction">Pentru fiecare cuvânt, scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: 🌟 Konjunktiv II (würde/könnte/wäre)', 'La majoritatea verbelor: würde + Infinitiv. Formele scurte: hätte/wäre/könnte/möchte. Sună politicos și cald — pentru oferte blânde.', ex2Data);
        if (typeof ex4Data !== 'undefined') html += fillInBlock('Übung 4: Sterbebegleitung + Palliativ + Trost', 'A însoți, nu a vindeca · auzul = ultimul simț · Seelsorger + Angehörigen · 🚨 medicația doar ce a prescris medicul.', ex4Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — Anruf bei Dr. Schmidt (Dialog 2)', 'Completează replicile lipsă din Dialog 2 (coordonarea paliativă + fără medicație fără medic + Konjunktiv II).', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — Sterbebegleitung & Trost</h3>
                <div class="instruction">Ascultă și scrie ce auzi. (Audio disponibil online.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie propozițiile în germană. Atenție la Konjunktiv II (würde/könnte/wäre/möchten). Punctul final e opțional.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Raport paliativ pentru Dr. Schmidt</h3>
            <div class="instruction">Scrie-i medicului un raport (5-8 propoziții): cum e Herr Klein (mănâncă/bea/doarme/respirație/dureri), cum îl alini (prezență, mâna, familia), cu un Konjunktiv II („Möchten…", „würde…", „könnte…", „wäre…"). NU dai medicamente din proprie inițiativă — întrebi ce poți face.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>Sehr geehrter Dr. Schmidt, ich melde mich wegen Herrn Klein. Er ist sehr schwach und schläft viel. Er isst nichts mehr und trinkt nur wenig. Er hat keine starken Schmerzen, aber er hat Angst. Ich bin bei ihm und halte seine Hand. Es wäre gut, wenn die Familie bald kommt. Könnten Sie mir sagen, was ich noch tun kann? Ich gebe ihm nichts ohne Ihre Anweisung. Mit freundlichen Grüßen, Andreea.</em></p>
            <p class="ro-translation">🇷🇴 Stimate Dr. Schmidt, vă scriu în legătură cu Herr Klein. E foarte slăbit și doarme mult. Nu mai mănâncă nimic și bea doar puțin. Nu are dureri puternice, dar îi e frică. Sunt lângă el și îi țin mâna. Ar fi bine dacă vine familia curând. Ați putea să-mi spuneți ce mai pot face? Nu-i dau nimic fără indicația dvs. Cu stimă, Andreea.</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Sterben & Palliativpflege · Anzeichen & Bedürfnisse · Trost & Nähe · Familie & Abschied · Konjunktiv II · Sätze.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
