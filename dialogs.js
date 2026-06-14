// ============================================
// DIALOGS.JS — Pflege 33: Sterbebegleitung
// 2 dialoguri (Ich bin bei Ihnen + Anruf bei Dr. Schmidt)
// Personaje: Andreea + Herr Klein (🆕 pacient nou, slate #475569) + Dr. Schmidt (recap L16/L25/L30/L31 — verde-medical #15803d)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

// ============================================
// DIALOG 1: „Ich bin bei Ihnen" — Andreea + Herr Klein
// 10 replici, ~57 sec — prezență + confort la patul lui Herr Klein + Konjunktiv II (STAR)
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Ich bin bei Ihnen',
    context: 'Herr Klein (pacient în îngrijire paliativă, slăbit, aproape de final) stă în pat. Andreea e lângă el, calmă și blândă, și îi oferă confort cu gingășie. Observă Konjunktiv II: „Möchten Sie etwas trinken?", „Ich würde gern bei Ihnen bleiben", „könnte ich Ihnen etwas vorlesen".',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 57,
    replici: [
        { id: 1, speaker: 'andreea', start: 0,  duration: 7, de: 'Guten Morgen, Herr Klein. Wie fühlen Sie sich heute?', ro: 'Bună dimineața, Herr Klein. Cum vă simțiți azi?' },
        { id: 2, speaker: 'klein',   start: 7,  duration: 4, de: 'Müde. Sehr müde.', ro: 'Obosit. Foarte obosit.' },
        { id: 3, speaker: 'andreea', start: 11, duration: 7, de: 'Möchten Sie etwas trinken? Nur einen kleinen Schluck?', ro: 'Doriți să beți ceva? Doar o înghițitură mică?' },
        { id: 4, speaker: 'klein',   start: 18, duration: 5, de: 'Nein, danke. Bleiben Sie hier?', ro: 'Nu, mulțumesc. Rămâneți aici?' },
        { id: 5, speaker: 'andreea', start: 23, duration: 6, de: 'Natürlich. Ich würde gern bei Ihnen bleiben.', ro: 'Desigur. Aș rămâne cu plăcere lângă dvs.' },
        { id: 6, speaker: 'klein',   start: 29, duration: 5, de: 'Das ist gut. Ich habe Angst.', ro: 'E bine. Mi-e frică.' },
        { id: 7, speaker: 'andreea', start: 34, duration: 6, de: 'Sie sind nicht allein. Ich halte Ihre Hand.', ro: 'Nu sunteți singur. Vă țin mâna.' },
        { id: 8, speaker: 'klein',   start: 40, duration: 3, de: 'Danke, Andreea.', ro: 'Mulțumesc, Andreea.' },
        { id: 9, speaker: 'andreea', start: 43, duration: 6, de: 'Möchten Sie, dass ich Ihre Familie rufe?', ro: 'Doriți să vă chem familia?' },
        { id: 10, speaker: 'andreea',start: 49, duration: 8, de: 'Und wenn Sie möchten, könnte ich Ihnen etwas vorlesen.', ro: 'Și dacă doriți, aș putea să vă citesc ceva.' }
    ]
};

// ============================================
// DIALOG 2: „Anruf bei Dr. Schmidt" — Andreea + Dr. Schmidt
// 10 replici, ~58 sec — coordonarea paliativă + fără medicație fără medic + Konjunktiv II (STAR)
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Anruf bei Dr. Schmidt',
    context: 'Andreea îl sună pe Dr. Schmidt (medicul de familie, verde-medical) și raportează că Herr Klein s-a slăbit mult. Dr. Schmidt explică îngrijirea paliativă — confort și fără durere — și subliniază: NU dai nimic peste ce a prescris el. Observă Konjunktiv II: „Könnte ich…", „Er hätte gern…", „Das wäre gut".',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 58,
    replici: [
        { id: 1, speaker: 'andreea', start: 0,  duration: 6, de: 'Guten Tag, Dr. Schmidt. Herr Klein ist sehr schwach geworden.', ro: 'Bună ziua, Dr. Schmidt. Herr Klein a devenit foarte slăbit.' },
        { id: 2, speaker: 'doctor',  start: 6,  duration: 5, de: 'Ich weiß. Er ist in der Palliativphase.', ro: 'Știu. E în faza paliativă.' },
        { id: 3, speaker: 'andreea', start: 11, duration: 7, de: 'Er isst nichts mehr und schläft viel. Was kann ich tun?', ro: 'Nu mai mănâncă nimic și doarme mult. Ce pot să fac?' },
        { id: 4, speaker: 'doctor',  start: 18, duration: 6, de: 'Das Wichtigste ist Ruhe und kein Schmerz.', ro: 'Cel mai important e liniștea și fără durere.' },
        { id: 5, speaker: 'andreea', start: 24, duration: 6, de: 'Könnte ich ihm etwas gegen die Schmerzen geben?', ro: 'Aș putea să-i dau ceva pentru durere?' },
        { id: 6, speaker: 'doctor',  start: 30, duration: 5, de: 'Nur was ich verordnet habe. Nichts anderes.', ro: 'Doar ce am prescris eu. Nimic altceva.' },
        { id: 7, speaker: 'andreea', start: 35, duration: 6, de: 'Natürlich. Er hätte gern seine Familie bei sich.', ro: 'Desigur. Ar dori să aibă familia lângă el.' },
        { id: 8, speaker: 'doctor',  start: 41, duration: 6, de: 'Dann rufen Sie die Angehörigen. Das wäre gut.', ro: 'Atunci chemați rudele. Ar fi bine.' },
        { id: 9, speaker: 'andreea', start: 47, duration: 3, de: 'Und ein Seelsorger?', ro: 'Și un duhovnic?' },
        { id: 10, speaker: 'doctor', start: 50, duration: 8, de: 'Ja, wenn er das möchte. Rufen Sie mich, wenn sich etwas ändert.', ro: 'Da, dacă dorește. Sunați-mă dacă se schimbă ceva.' }
    ]
};

// ============================================
// BUILD DIALOG FUNCTION
// ============================================
function buildDialog(dialogData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="dialog-container">
            <div class="dialog-context">${dialogData.context}</div>

            <div class="dialog-audio-player">
                <button class="audio-btn dialog-play-btn" id="btn-${dialogData.id}-audio" onclick="toggleDialogAudio('${dialogData.id}')">▶</button>
                <audio id="${dialogData.id}-audio" preload="metadata"><source src="${dialogData.audioFile}" type="audio/mpeg"></audio>
                <span class="dialog-time" id="${dialogData.id}-time">0:00 / ${formatDialogTime(dialogData.totalDuration)}</span>
                <span class="dialog-hint">▶ Ascultă tot dialogul (${dialogData.totalDuration}s)</span>
            </div>

            <div class="dialog-replici">`;

    dialogData.replici.forEach((r, i) => {
        let speakerClass, speakerName, avatarContent, speechClass;

        if (r.speaker === 'andreea') {
            speakerClass = 'character-andreea';
            speakerName = 'Andreea';
            avatarContent = '<img src="images/andreea.png" alt="Andreea">';
            speechClass = 'speech-andreea';
        } else if (r.speaker === 'klein') {
            speakerClass = 'character-klein';
            speakerName = 'Herr Klein';
            avatarContent = '<span class="face">👴</span>';
            speechClass = 'speech-klein';
        } else if (r.speaker === 'doctor') {
            speakerClass = 'character-doctor';
            speakerName = 'Dr. Schmidt';
            avatarContent = '<span class="face">👨‍⚕️</span>';
            speechClass = 'speech-doctor';
        }

        const isEmojiAvatar = ['klein', 'doctor'].includes(r.speaker);

        html += `
            <div class="dialog-reply ${speakerClass}" id="${dialogData.id}-reply-${r.id}" data-start="${r.start}" data-duration="${r.duration}">
                <div class="character-avatar ${isEmojiAvatar ? r.speaker + '-avatar' : ''}">${avatarContent}</div>
                <div class="speech-bubble ${speechClass}">
                    <div class="speaker-name speaker-${r.speaker}">${i + 1}. ${speakerName}</div>
                    <div class="speech-de">🇩🇪 ${r.de}</div>
                    <div class="speech-ro">🇷🇴 ${r.ro}</div>
                </div>
            </div>`;
    });

    html += `
            </div>
        </div>`;

    container.innerHTML = html;
}

function formatDialogTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

function toggleDialogAudio(dialogId) {
    const audio = document.getElementById(`${dialogId}-audio`);
    const btn = document.getElementById(`btn-${dialogId}-audio`);
    if (!audio || !btn) return;

    ['dialog1', 'dialog2'].forEach(other => {
        if (other !== dialogId) {
            const otherAudio = document.getElementById(`${other}-audio`);
            const otherBtn = document.getElementById(`btn-${other}-audio`);
            if (otherAudio && !otherAudio.paused) {
                otherAudio.pause();
                if (otherBtn) otherBtn.textContent = '▶';
            }
        }
    });

    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function initDialogSync(dialogData) {
    const audio = document.getElementById(`${dialogData.id}-audio`);
    if (!audio) return;

    const timeEl = document.getElementById(`${dialogData.id}-time`);

    audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime;
        if (timeEl) timeEl.textContent = `${formatDialogTime(t)} / ${formatDialogTime(audio.duration || dialogData.totalDuration)}`;

        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (!el) return;
            const isActive = t >= r.start && t < r.start + r.duration;
            el.classList.toggle('active-reply', isActive);
        });
    });

    audio.addEventListener('ended', () => {
        const btn = document.getElementById(`btn-${dialogData.id}-audio`);
        if (btn) btn.textContent = '▶';
        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (el) el.classList.remove('active-reply');
        });
    });
}

buildDialog(dialog1Data, 'dialog1-container');
buildDialog(dialog2Data, 'dialog2-container');

if (document.readyState !== 'loading') {
    initDialogSync(dialog1Data);
    initDialogSync(dialog2Data);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initDialogSync(dialog1Data);
        initDialogSync(dialog2Data);
    });
}
