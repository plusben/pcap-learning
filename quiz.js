const fragen = [
    {
        "frage": "Ein Compiler in Python ist ein Programm, das dazu dient (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: den Quellcode neu zu ordnen, um ihn klarer zu machen",
            "B: den Quellcode zu überprüfen, um zu sehen, ob er korrekt ist",
            "C: den Quellcode auszuführen",
            "D: den Quellcode in Maschinencode zu übersetzen"
        ],
        "korrekte_antwort": ["B", "D"]
    },
    {
        "frage": "Welche der folgenden Aussagen sind wahr? (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: Python-Strings sind eigentlich Listen",
            "B: Python-Strings können verkettet werden",
            "C: Python-Strings können wie Listen geschnitten werden",
            "D: Python-Strings sind veränderlich"
        ],
        "korrekte_antwort": ["B", "C"]
    },
    {
        "frage": "Angenommen, dass 'String' sechs oder mehr Buchstaben lang ist, ist der folgende Slice `string[1:-2]` kürzer als der ursprüngliche String um:",
        "optionen": ["A: vier Zeichen", "B: drei Zeichen", "C: ein Zeichen", "D: zwei Zeichen"],
        "korrekte_antwort": "D"
    },
    {
        "frage": "Was ist die erwartete Ausgabe des folgenden Snippets?\n\ns = 'abc'\nfor i in len(s):\n    s[i] = s[i].upper()\nprint(s)",
        "optionen": ["A: abc", "B: Der Code verursacht eine Laufzeit-Ausnahme", "C: ABC", "D: 123"],
        "korrekte_antwort": "B"
    },
    {
        "frage": "Kann ein Modul wie regulärer Code ausgeführt werden?",
        "optionen": [
            "A: ja, und es kann sein Verhalten zwischen dem regulären Start und dem Import unterscheiden",
            "B: es hängt von der Python-Version ab",
            "C: ja, aber es kann sein Verhalten zwischen dem regulären Start und dem Import nicht unterscheiden",
            "D: nein, das ist nicht möglich; ein Modul kann importiert, aber nicht ausgeführt werden"
        ],
        "korrekte_antwort": "A"
    }
    // Weitere Fragen...
];

let aktuelleFrageIndex = 0;
let score = 0;
let falscheAntworten = []; // Array zum Speichern der falsch beantworteten Fragen

function checkAnswer() {
    let gewaehlteOptionen = document.querySelectorAll('input[name="option"]:checked');
    let gewaehlteAntworten = Array.from(gewaehlteOptionen).map(opt => opt.value);
    let korrekteAntworten = typeof fragen[aktuelleFrageIndex].korrekte_antwort === 'string' ? [fragen[aktuelleFrageIndex].korrekte_antwort] : fragen[aktuelleFrageIndex].korrekte_antwort;

    let korrektBeantwortet = gewaehlteAntworten.sort().join(',') === korrekteAntworten.sort().join(',');

    if (korrektBeantwortet) {
        score++;
    } else {
        // Falsch beantwortete Frage speichern
        falscheAntworten.push({
            frage: fragen[aktuelleFrageIndex].frage,
            korrekteAntwort: korrekteAntworten,
            gewaehlteAntwort: gewaehlteAntworten
        });
    }
    aktuelleFrageIndex++;
    loadQuestion();
}

function restartQuiz() {
    aktuelleFrageIndex = 0;
    score = 0;
    falscheAntworten = []; // Zurücksetzen der falsch beantworteten Fragen
    loadQuestion();

    // Den "Nächste Frage"-Button wieder anzeigen
    let nextQuestionButton = document.getElementById('nextQuestion');
    nextQuestionButton.style.display = 'block';

    // Den "Neu starten" Button ausblenden
    let restartQuizButton = document.getElementById('restart-quiz');
    restartQuizButton.style.display = 'none';
}

function loadQuestion() {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    if (questionTextElement && optionsContainer && aktuelleFrageIndex < fragen.length) {
        const aktuelleFrage = fragen[aktuelleFrageIndex];
        questionTextElement.textContent = aktuelleFrage.frage;
        optionsContainer.innerHTML = ''; // Löschen Sie vorherige Optionen

        aktuelleFrage.optionen.forEach((option, index) => {
            const inputType = aktuelleFrage.korrekte_antwort.length > 1 ? 'checkbox' : 'radio';
            const inputId = `option-${index}`;
            optionsContainer.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="${inputType}" name="option" id="${inputId}" value="${option[0]}">
                    <label class="form-check-label" for="${inputId}">
                        ${option}
                    </label>
                </div>`;
        });
    } else {
        endQuiz();
    }
}

function endQuiz() {
    let quizDiv = document.getElementById('quiz');
    let nextQuestionButton = document.getElementById('nextQuestion');

    // Titelzeile für falsch beantwortete Fragen
    let wrongAnswersContainer = document.getElementById('wrong-answers-container');
    wrongAnswersContainer.innerHTML = `<h2>Ihre falsch beantworteten Fragen:</h2>`;

    // Falsch beantwortete Fragen anzeigen
    if (falscheAntworten.length > 0) {
        falscheAntworten.forEach((item, index) => {
            wrongAnswersContainer.innerHTML += `<hr>`;
            // Hier verwenden wir den Index + 1, um die richtige Frage-Nummer anzuzeigen.
            const frageIndex = fragen.findIndex(frage => frage.frage === item.frage);
            if (frageIndex !== -1) {
                wrongAnswersContainer.innerHTML += `<h4>Frage ${frageIndex + 1}: ${item.frage}</h4>`;
                const gewaehlteAntworten = Array.isArray(item.gewaehlteAntwort) ? item.gewaehlteAntwort : [item.gewaehlteAntwort];
                gewaehlteAntworten.forEach((antwort) => {
                    const antwortIndex = antwort.charCodeAt(0) - 'A'.charCodeAt(0);
                    const antwortText = fragen[frageIndex].optionen[antwortIndex];
                    wrongAnswersContainer.innerHTML += `<p class="wrong-answer">Ihre Antwort: ${antwortText}</p>`;
                });
                const korrekteAntworten = Array.isArray(item.korrekteAntwort) ? item.korrekteAntwort : [item.korrekteAntwort];
                korrekteAntworten.forEach((antwort) => {
                    const antwortIndex = antwort.charCodeAt(0) - 'A'.charCodeAt(0);
                    const antwortText = fragen[frageIndex].optionen[antwortIndex];
                    wrongAnswersContainer.innerHTML += `<p>Richtige Antwort: ${antwortText}</p>`;
                });
            }
        });
    } else {
        wrongAnswersContainer.innerHTML += `<p>Sie haben keine Fragen falsch beantwortet.</p>`;
    }

    // Den "Neu starten" Button anzeigen
    let restartQuizButton = document.getElementById('restart-quiz');
    restartQuizButton.style.display = 'block';

    // Ausblenden des "Nächste Frage"-Buttons
    nextQuestionButton.style.display = 'none';

    // Anzeige des Gesamtergebnisses
    quizDiv.innerHTML = `<h4 class="pt-5">Quiz beendet. Ihr Ergebnis: ${score}/${fragen.length}</h4>`;
}


document.getElementById('nextQuestion').addEventListener('click', checkAnswer);

// Den "Neu starten" Button ausblenden
let restartQuizButton = document.getElementById('restart-quiz');
restartQuizButton.style.display = 'none';

// Laden der ersten Frage beim Start
loadQuestion();
