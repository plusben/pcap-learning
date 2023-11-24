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
    },
    {
        "frage": "Wählen Sie die gültigen fun() Aufrufe aus: (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: fun(b = 1)",
            "B: fun(a = 0)",
            "C: fun(b = 1 0)",
            "D: fun(1)"
        ],
        "korrekte_antwort": ["B", "D"]
    },
    {
        "frage": "Was sagt ein Dateiname wie dieser unten über die Datei aus? services.cpython-36.pyc (Wählen Sie drei Antworten):",
        "optionen": [
            "A: der Interpreter, der zum Generieren der Datei verwendet wurde, ist Version 3.6",
            "B: sie wurde von CPython produziert",
            "C: es ist die 36. Version der Datei",
            "D: die Datei stammt aus der Quelldatei services.py"
        ],
        "korrekte_antwort": ["A", "B", "D"]
    },
    {
        "frage": "Was ist das erwartete Verhalten des folgenden Snippets?",
        "optionen": [
            "A: verursacht eine Ausnahme",
            "B: druckt 1",
            "C: druckt 0 [1]",
            "D: druckt [1]"
        ],
        "korrekte_antwort": ["A"]
    },
    {
        "frage": "Was können Sie tun, wenn Sie einen langen Paketpfad wie diesen nicht mögen?",
        "optionen": [
            "A: Sie können einen Alias für den Namen mit dem Schlüsselwort alias erstellen",
            "B: nichts, Sie müssen sich damit abfinden",
            "C: Sie können ihn auf alpha.zeta verkürzen und Python wird die richtige Verbindung finden",
            "D: Sie können einen Alias für den Namen mit dem Schlüsselwort as erstellen"
        ],
        "korrekte_antwort": ["D"]
    },
    {
        "frage": "Was ist die erwartete Ausgabe des folgenden Codes?",
        "optionen": [
            "A: abcef",
            "B: Das Programm verursacht eine Laufzeit-Ausnahme/Fehler",
            "C: acdef",
            "D: abdef"
        ],
        "korrekte_antwort": ["B"]
    },
    {
        "frage": "Welche der folgenden Ausdrücke werden True bewerten? (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: 99 > '99'",
            "B: 'ABc' > 'CAB'",
            "C: len( \"\"\"\") <= 1",
            "D: 'True' != True"
        ],
        "korrekte_antwort": ["C", "D"]
    },
    {
        "frage": "Welches ist die Ausgabe des folgenden Snippets?",
        "optionen": [
            "A: Es wird 1 ausgegeben",
            "B: Es wird 2 ausgegeben",
            "C: Es wird 3 ausgegeben",
            "D: Es tritt ein Laufzeitfehler auf"
        ],
        "korrekte_antwort": ["A"]
    },
    {
        "frage": "Welche der folgenden Aussagen über objektorientierte Programmierung (OOP) in Python sind wahr? (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: Klassenvariablen werden nicht in einem Objekt's __dict__ angezeigt",
            "B: Beim Verwenden der hasattr-Methode muss der Name der Eigenschaft eine Klasse oder ein Objekt sein",
            "C: Python erreicht die Kapselung privater Variablen durch Namensmangling",
            "D: Eine einzelne Vererbung ist immer schwerer zu pflegen als eine multiple Vererbung"
        ],
        "korrekte_antwort": ["A", "C"]
    },
    {
        "frage": "Welches ist die Ausgabe des folgenden Snippets?",
        "optionen": [
            "A: [3 2]",
            "B: [1 2]",
            "C: 1",
            "D: 3"
        ],
        "korrekte_antwort": ["C"]
    },
    {
        "frage": "Welche der folgenden Code-Snippets würden Sie einfügen, um Klasse B den Konstruktor von Klasse A aufrufen zu lassen? (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: super().__init__()",
            "B: super().__init__(self)",
            "C: A.__init__()",
            "D: A.__init__(self)"
        ],
        "korrekte_antwort": ["A", "D"]
    },
    {
        "frage": "Welches ist die Ausgabe des folgenden Snippets?",
        "optionen": [
            "A: False True False",
            "B: True False False",
            "C: True True False",
            "D: True True True"
        ],
        "korrekte_antwort": ["C"]
    },
    {
        "frage": "Was ist wahr über Python-Klassenkonstruktoren? (Wählen Sie zwei Antworten):",
        "optionen": [
            "A: Übergeordnete Konstruktoren werden implizit während der Konstruktor-Ausführung aufgerufen",
            "B: Der Konstruktor kann direkt aufgerufen werden",
            "C: Der erste Parameter jeder Methode wird verwendet, um auf die Eigenschaften des Objekts zuzugreifen oder seine Methoden aufzurufen",
            "D: Der Konstruktor kann nichts zurückgeben"
        ],
        "korrekte_antwort": ["A", "D"]
    },
    {
        "frage": "Welches ist die Ausgabe des folgenden Snippets?",
        "optionen": [
            "A: 1",
            "B: 2",
            "C: 3",
            "D: Der Code ist fehlerhaft"
        ],
        "korrekte_antwort": ["C"]
    },
    {
        "frage": "Welches ist die Ausgabe des folgenden Snippets?",
        "optionen": [
            "A: 1",
            "B: 3",
            "C: 5",
            "D: Der Code ist fehlerhaft"
        ],
        "korrekte_antwort": ["C"]
    },
    {
        "frage": "Was ist die erwartete Ausgabe des folgenden Snippets?",
        "optionen": [
            "A: 0 1 2 3",
            "B: range(4)",
            "C: <generator object fun at (einige Hex-Zahlen)>",
            "D: Ein Laufzeitfehler tritt auf"
        ],
        "korrekte_antwort": ["C"]
    }


];

let gesamteFragen = [];
let aktuelleFrageIndex = 0;
let score = 0;
let falscheAntworten = [];

document.addEventListener('DOMContentLoaded', function() {
    loadFragen();
});

function loadFragen() {
    fetch('questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(data => {
            fragen = data;
            startQuiz();
            addEventListeners();
        })
        .catch(error => console.error('Fehler beim Laden der Fragen:', error));
}

function addEventListeners() {
    document.getElementById('nextQuestion').addEventListener('click', checkAnswer);
    let restartQuizButton = document.getElementById('restart-quiz');
    if (restartQuizButton) {
        restartQuizButton.addEventListener('click', restartQuiz);
    }
    loadQuestion();
}
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
    // Die Seite neu laden
    window.location.reload();
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

document.addEventListener('DOMContentLoaded', function() {
    let restartQuizButton = document.getElementById('restart-quiz');
    if (restartQuizButton) {
        restartQuizButton.addEventListener('click', restartQuiz);
    }
    loadQuestion(); // Laden der ersten Frage beim Start
});
