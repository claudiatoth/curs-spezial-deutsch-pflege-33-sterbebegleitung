# Generare WAV-uri Hedda pentru Pflege L33 - Sterbebegleitung
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='die Sterbebegleitung.' },
    @{ file='dictat-02.wav'; text='der Trost.' },
    @{ file='dictat-03.wav'; text='begleiten.' },
    @{ file='dictat-04.wav'; text='die Atmung.' },
    @{ file='dictat-05.wav'; text='trosten.' },
    @{ file='dictat-06.wav'; text='der Abschied.' },
    @{ file='dictat-07.wav'; text='ich wurde.' },
    @{ file='dictat-08.wav'; text='es ware.' },
    @{ file='dictat-09.wav'; text='Ich bin bei Ihnen, Sie sind nicht allein.' },
    @{ file='dictat-10.wav'; text='Mochten Sie etwas trinken?' }
)

# FLASHCARDS (48)
$flashcards = @(
    # 1. Sterben & Palliativpflege (8)
    @{ file='sterbebegleitung.wav';     text='die Sterbebegleitung.' },
    @{ file='sterben.wav';              text='sterben.' },
    @{ file='tod.wav';                  text='der Tod.' },
    @{ file='palliativpflege.wav';      text='die Palliativpflege.' },
    @{ file='hospiz.wav';               text='das Hospiz.' },
    @{ file='begleiten.wav';            text='begleiten.' },
    @{ file='abschied.wav';             text='der Abschied.' },
    @{ file='unheilbar.wav';            text='unheilbar krank.' },

    # 2. Anzeichen & Bedurfnisse (8)
    @{ file='schwach.wav';              text='schwach.' },
    @{ file='nicht-essen.wav';          text='nicht mehr essen.' },
    @{ file='wenig-trinken.wav';        text='wenig trinken.' },
    @{ file='viel-schlafen.wav';        text='viel schlafen.' },
    @{ file='atmung.wav';               text='die Atmung.' },
    @{ file='kalte-haende.wav';         text='kalte Hande.' },
    @{ file='schmerzen.wav';            text='die Schmerzen.' },
    @{ file='ruhe.wav';                 text='die Ruhe.' },

    # 3. Trost & Nahe (8)
    @{ file='troesten.wav';             text='trosten.' },
    @{ file='trost.wav';                text='der Trost.' },
    @{ file='hand-halten.wav';          text='die Hand halten.' },
    @{ file='da-sein.wav';              text='da sein.' },
    @{ file='stille.wav';               text='die Stille.' },
    @{ file='vorlesen.wav';             text='vorlesen.' },
    @{ file='streicheln.wav';           text='streicheln.' },
    @{ file='gehoer.wav';               text='das Gehor.' },

    # 4. Familie & Abschied (8)
    @{ file='angehoerige.wav';          text='die Angehorigen.' },
    @{ file='familie.wav';              text='die Familie.' },
    @{ file='trauer.wav';               text='die Trauer.' },
    @{ file='seelsorger.wav';           text='der Seelsorger.' },
    @{ file='abschied-nehmen.wav';      text='Abschied nehmen.' },
    @{ file='arzt.wav';                 text='der Arzt.' },
    @{ file='weinen.wav';               text='weinen.' },
    @{ file='wunsch.wav';               text='der Wunsch.' },

    # 5. Konjunktiv II (8)
    @{ file='wuerde.wav';               text='ich wurde.' },
    @{ file='koennte.wav';              text='ich konnte.' },
    @{ file='haette.wav';               text='ich hatte.' },
    @{ file='waere.wav';                text='es ware.' },
    @{ file='moechten-sie.wav';         text='Mochten Sie?' },
    @{ file='koennte-ich.wav';          text='Konnte ich?' },
    @{ file='waere-gut.wav';            text='Es ware gut, wenn.' },
    @{ file='wuerde-bleiben.wav';       text='Ich wurde gern bleiben.' },

    # 6. Satze (8)
    @{ file='bin-bei-ihnen.wav';        text='Ich bin bei Ihnen.' },
    @{ file='nicht-allein.wav';         text='Sie sind nicht allein.' },
    @{ file='etwas-trinken.wav';        text='Mochten Sie etwas trinken?' },
    @{ file='hand-halte.wav';           text='Ich halte Ihre Hand.' },
    @{ file='familie-rufen.wav';        text='Soll ich die Familie rufen?' },
    @{ file='seelsorger-frage.wav';     text='Mochten Sie einen Seelsorger?' },
    @{ file='jemand-bleibt.wav';        text='Es ware gut, wenn jemand bei ihm bleibt.' },
    @{ file='rufe-arzt.wav';            text='Ich rufe den Arzt.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
