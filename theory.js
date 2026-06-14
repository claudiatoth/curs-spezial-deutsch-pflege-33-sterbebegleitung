// ============================================
// THEORY.JS — Pflege 33: Sterbebegleitung
// Was ist Sterbebegleitung + Anzeichen & Bedürfnisse + Trost & Nähe + Familie & Abschied + Konjunktiv II (STAR) + Box & Würde
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🕊️ Sterbebegleitung — însoțirea la final de viață</h4>
  <p>Când un om nu se mai poate vindeca, îngrijirea nu se oprește — se schimbă. Nu mai vindeci, ci <strong>însoțești</strong>: aduci confort, liniște și demnitate. Tu înveți <strong>ce este</strong> însoțirea la final (Palliativpflege, Hospiz), cum <strong>recunoști semnele</strong> apropierii și nevoile, cum aduci <strong>mângâiere și prezență</strong>, și cum sprijini <strong>familia</strong> la rămas-bun. 💚 Prezența ta calmă e cel mai mare dar pe care îl poți oferi.</p>
  <p>Gramatică nouă: <strong>Konjunktiv II</strong> — limba blândeții și a ofertelor delicate: <em>„<strong>Möchten</strong> Sie, dass ich bei Ihnen bleibe?"</em> (Doriți să rămân lângă dvs.?) · <em>„Ich <strong>würde</strong> gern bleiben."</em> (Aș rămâne cu plăcere). Cu ea oferi alinare cu gingășie.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🕊️</div>
      <div class="pillar-title">Was ist das</div>
      <div class="pillar-text">A însoți, nu a vindeca.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🔍</div>
      <div class="pillar-title">Anzeichen</div>
      <div class="pillar-text">Semne · nevoi.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🤝</div>
      <div class="pillar-title">Trost & Nähe</div>
      <div class="pillar-text">Mângâiere · prezență.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">👪</div>
      <div class="pillar-title">Familie</div>
      <div class="pillar-text">Rămas-bun · doliu.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💬</div>
      <div class="pillar-title">Konjunktiv II</div>
      <div class="pillar-text">würde · könnte · wäre</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🌟</div>
      <div class="pillar-title">Würde</div>
      <div class="pillar-text">Demnitate până la capăt.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Was ist Sterbebegleitung?
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Was ist Sterbebegleitung? — ce este însoțirea la final</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-was-ist.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Când boala nu mai poate fi vindecată, scopul nu mai e să adaugi <strong>zile la viață</strong>, ci <strong>viață și demnitate la zile</strong>. Asta e <strong>Palliativpflege</strong>, îngrijirea paliativă — confort, nu vindecare.</p>

    <h5 style="color:#065f46; margin-top:18px;">🕊️ Vocabular de bază</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Sterbebegleitung · begleiten</strong></td><td>însoțirea la final · a însoți</td></tr>
          <tr><td><strong>sterben · der Tod</strong></td><td>a muri · moartea</td></tr>
          <tr><td><strong>die Palliativpflege</strong></td><td>îngrijirea paliativă (confort, nu vindecare)</td></tr>
          <tr><td><strong>das Hospiz</strong></td><td>hospiciul (casă pentru îngrijire la final)</td></tr>
          <tr><td><strong>der Abschied · unheilbar krank</strong></td><td>rămas-bunul · bolnav incurabil</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Rolul tău în însoțire</h5>
      <p>📌 Nu vindeci — <strong>însoțești</strong>. Aduci <strong>confort</strong> (fără durere, liniște, curățenie, gură umedă), <strong>prezență</strong> (nu lași omul singur), și <strong>demnitate</strong>. Sprijini <strong>familia</strong>. Și <strong>observi și raportezi</strong> echipei medicale. 📌 Deciziile despre tratament și durere le ia <strong>medicul / echipa paliativă / Hospiz</strong> — tu ești prezența caldă alături.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Anzeichen & Bedürfnisse
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Anzeichen & Bedürfnisse — semnele apropierii și nevoile</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-anzeichen.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">În ultimele zile și ore, corpul se schimbă. Nu te speria — sunt semne <strong>firești</strong>. Le observi cu calm și le raportezi echipei.</p>

    <h5 style="color:#065f46; margin-top:18px;">🔍 Semne frecvente + nevoi</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>schwach · viel schlafen</strong></td><td>slab · doarme mult</td></tr>
          <tr><td><strong>nicht mehr essen · wenig trinken</strong></td><td>nu mai mănâncă · bea puțin</td></tr>
          <tr><td><strong>die Atmung (verändert)</strong></td><td>respirația (schimbată, neregulată)</td></tr>
          <tr><td><strong>kalte Hände</strong></td><td>mâini reci (circulația scade)</td></tr>
          <tr><td><strong>die Ruhe · keine Schmerzen</strong></td><td>liniștea · fără dureri</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Important — ce e firesc și ce raportezi</h5>
      <p>📌 Că nu mai mănâncă și bea puțin e <strong>firesc</strong> la final — NU forțezi mâncarea sau lichidele (poate face rău). Umezești gura și buzele. 🚨 Ce raportezi imediat medicului/echipei: <strong>dureri</strong>, respirație grea/agitație, neliniște mare, sau orice schimbare bruscă. Durerea și liniștirea se tratează DOAR la indicația medicului. Tu observi, alini și anunți.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Trost & Nähe
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Trost & Nähe — mângâiere și prezență</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-trost.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La final, cuvintele contează mai puțin decât <strong>prezența</strong>. Să fii acolo, calm, blând — asta alină cel mai mult.</p>

    <h5 style="color:#065f46; margin-top:18px;">🤝 Vocabular — Trost & Nähe</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>trösten · der Trost</strong></td><td>a alina / a mângâia · alinarea</td></tr>
          <tr><td><strong>die Hand halten · streicheln</strong></td><td>a ține de mână · a mângâia (cu mâna)</td></tr>
          <tr><td><strong>da sein · die Stille</strong></td><td>a fi prezent / acolo · tăcerea, liniștea</td></tr>
          <tr><td><strong>vorlesen</strong></td><td>a citi cu voce tare</td></tr>
          <tr><td><strong>das Gehör</strong></td><td>auzul (🔊 ultimul simț care rămâne)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🔊 Auzul e ultimul simț</h5>
      <p>📌 Chiar dacă pacientul nu mai răspunde, <strong>te aude</strong> — auzul (das Gehör) e ultimul simț care rămâne. Deci vorbește-i <strong>blând</strong>, spune-i cine ești, liniștește-l: „Ich bin bei Ihnen. Sie sind nicht allein." 📌 Ține-l de mână, mângâie-l, pune o muzică liniștită sau citește-i ceva drag. O cameră caldă, lumină blândă, liniște. 🚫 Nu vorbi despre el ca și cum n-ar fi acolo. E acolo.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Familie & Abschied
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Die Familie & der Abschied — familia și rămas-bunul</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-familie.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Nu doar pacientul are nevoie de tine — și <strong>familia</strong>. Le dai timp și spațiu pentru rămas-bun, le respecți doliul și credința.</p>

    <h5 style="color:#065f46; margin-top:18px;">👪 Vocabular — Familie & Abschied</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Angehörigen · die Familie</strong></td><td>aparținătorii / rudele · familia</td></tr>
          <tr><td><strong>die Trauer · weinen</strong></td><td>doliul / durerea sufletească · a plânge</td></tr>
          <tr><td><strong>der Seelsorger</strong></td><td>duhovnicul / preotul (îngrijire spirituală)</td></tr>
          <tr><td><strong>Abschied nehmen · der Wunsch</strong></td><td>a-și lua rămas-bun · dorința (ultima dorință)</td></tr>
          <tr><td><strong>der Arzt</strong></td><td>medicul (chemat la deces)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>👪 Cum sprijini familia + ce faci la deces</h5>
      <p>📌 Lași familia să stea aproape, să-și ia <strong>rămas-bun</strong>; le respecți <strong>doliul</strong> și lacrimile. Întrebi de dorințele <strong>religioase/spirituale</strong> (un <strong>Seelsorger</strong>, un preot) și de obiceiuri. 🕯️ <strong>La deces</strong>: rămâi calmă, nu ești singură — anunți <strong>medicul</strong> (pentru constatarea decesului) și familia, conform planului. NU ești obligată să faci totul singură — echipa și familia sunt acolo.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — GRAMATICA STAR: Konjunktiv II
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ 🌟 Gramatică — Konjunktiv II (oferte blânde & mângâiere)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-grammatik.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Când oferi ceva cu gingășie, când întrebi politicos, când exprimi o dorință — folosești <strong>Konjunktiv II</strong>. E mai blând și mai respectuos decât prezentul simplu. Perfect pentru momentele delicate.</p>

    <div class="grammar-highlight" style="background:#ecfdf5; border:2px solid #047857; border-radius:10px; padding:14px 18px; margin:14px 0;">
      <p style="margin:0; font-size:1.02rem; color:#065f46; text-align:center;"><strong>würde + Infinitiv</strong> · sau formele scurte <strong>hätte · wäre · könnte · möchte</strong></p>
      <p style="margin:6px 0 0; text-align:center; color:#047857;"><em>Ich <strong>würde</strong> gern bei Ihnen <strong>bleiben</strong>. · <strong>Möchten</strong> Sie etwas trinken?</em></p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Formele de care ai nevoie</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Konjunktiv II</th><th>Vine de la · Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ich würde</strong> + Infinitiv</td><td>(werden) — aș … (merge la majoritatea verbelor)</td></tr>
          <tr><td><strong>ich hätte</strong></td><td>(haben) — aș avea</td></tr>
          <tr><td><strong>es wäre</strong></td><td>(sein) — ar fi</td></tr>
          <tr><td><strong>ich könnte</strong></td><td>(können) — aș putea</td></tr>
          <tr><td><strong>ich möchte</strong></td><td>(mögen) — aș dori / doresc</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🕊️ Konjunktiv II în însoțire</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Möchten</strong> Sie etwas trinken?</td><td>Doriți să beți ceva? (ofertă blândă)</td></tr>
          <tr><td>Ich <strong>könnte</strong> Ihnen etwas vorlesen.</td><td>Aș putea să vă citesc ceva.</td></tr>
          <tr><td>Ich <strong>würde</strong> gern bei Ihnen bleiben.</td><td>Aș rămâne cu plăcere lângă dvs.</td></tr>
          <tr><td>Es <strong>wäre</strong> gut, wenn die Familie kommt.</td><td>Ar fi bine dacă vine familia.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Capcana — würde la orice verb, formele scurte le înveți pe de rost</h5>
      <p>📌 La <strong>majoritatea verbelor</strong> folosești <strong>würde + Infinitiv</strong>: „Ich würde gern <strong>bleiben</strong>", „Ich würde Ihnen gern <strong>helfen</strong>". <br>
      📌 La <strong>haben, sein, können, mögen</strong> folosești formele scurte: <strong>hätte, wäre, könnte, möchte</strong> (NU „würde haben"). <br>
      📌 Sună politicos și cald — exact ce trebuie la momentele grele. „<strong>Könnten</strong> Sie…?" e mai blând decât „Können Sie…?".</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Box & Würde
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ Würde bis zum letzten Atemzug — demnitate până la ultima suflare</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-wuerde.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">A însoți un om la final e una dintre cele mai grele și mai frumoase părți ale meseriei. Cere blândețe, calm și grijă — pentru pacient, pentru familie și pentru tine.</p>

    <h5 style="color:#065f46; margin-top:18px;">💚 Cum păstrezi demnitatea</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li>prezență caldă, voce blândă, atingere — „Sie sind nicht allein"</li>
      <li>confort: gură umedă, poziție comodă, curățenie, liniște</li>
      <li>respecți credința, dorințele și obiceiurile</li>
      <li>NU forțezi mâncarea/lichidele la final</li>
      <li>ai grijă și de tine — e firesc să fie greu</li>
    </ul>

    <div class="capcana-box">
      <h5>🦺 Box de siguranță — citește cu atenție</h5>
      <p>Această lecție te pregătește <strong>LINGVISTIC și de atitudine</strong>. 🚨🚨 Îngrijitoarea <strong>NU</strong> ia decizii medicale sau de final de viață, <strong>NU</strong> dă medicamente peste indicația medicului, și <strong>NU</strong> discută sau ajută eutanasia (nu e rolul tău și nu e legal). 🚨 Confortul paliativ și calmarea durerii le stabilește <strong>medicul / echipa paliativă / Hospiz</strong>. 🚨 La durere, respirație grea sau neliniște mare → anunți imediat echipa. 🕯️ La deces → rămâi calmă, anunți <strong>medicul</strong> (constatarea decesului) și familia. Tu <strong>alini, ești prezentă, păstrezi demnitatea și raportezi</strong>.</p>
    </div>

    <div class="final-note-box">
      <h5>🌟 Cuvântul final — cel mai mare dar</h5>
      <p>Nimeni n-ar trebui să plece singur. Când stai lângă un om la final, îi ții mâna și îi spui blând <em>„Ich bin bei Ihnen. Sie sind nicht allein."</em> (Sunt lângă dvs. Nu sunteți singur.), îi dăruiești ceva ce niciun medicament nu poate da: să nu fie singur în cel mai greu moment. Prezența ta caldă, la final, e cel mai mare dar pe care îl poate primi un om. Și tu poți să-l oferi. 💚</p>
    </div>

  </div>
</div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
}

buildTheory();
