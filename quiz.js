const fragen = [
    {
        "frage": "A compiler in Python is a program designed to (Select two answers):",
        "optionen": [
            "A: rearrange the source code to make it clearer",
            "B: check the source code in order to see if it's correct",
            "C: execute the source code",
            "D: translate the source code into machine code"
        ],
        "korrekte_antwort": ["B", "D"]
    },
    {
        "frage": "Which of the following statements are true? (Select two answers):",
        "optionen": [
            "A: Python strings are actually lists",
            "B: Python strings can be concatenated",
            "C: Python strings can be sliced like lists",
            "D: Python strings are mutable"
        ],
        "korrekte_antwort": ["B", "C"]
    },
    {
        "frage": "Assuming that String is six or more letters long the following slice string[1:-2] is shorter than the original string by:",
        "optionen": [
            "A: four chars",
            "B: three chars",
            "C: one char",
            "D: two chars"
        ],
        "korrekte_antwort": "D"
    },
    {
        "frage": "What is the expected output of the following snippet?\n\ns = 'abc'\nfor i in len(s):\n    s[i] = s[i].upper()\nprint(s)",
        "optionen": [
            "A: abc",
            "B: The code will cause a runtime exception",
            "C: ABC",
            "D: 123"
        ],
        "korrekte_antwort": "B"
    },
    {
        "frage": "Can a module run like regular code?",
        "optionen": [
            "A: yes and it can differentiate its behavior between the regular launch and import",
            "B: it depends on the Python version",
            "C: yes but it cannot differentiate its behavior between the regular launch and import",
            "D: no it is not possible; a module can be imported not run"
        ],
        "korrekte_antwort": "A"
    },
    {
        "frage": "Select the valid fun() invocations: (Select two answers)\n\ndef fun(a, b = 0):\n    return a * b",
        "optionen": [
            "A: fun(b = 1)",
            "B: fun(a = 0)",
            "C: fun(b = 1, 0)",
            "D: fun(1)"
        ],
        "korrekte_antwort": ["A", "B"]
    },
    {
        "frage": "A file name like this one below says that: services.cpython-36.pyc (Select three answers)",
        "optionen": [
            "A: the interpreter used to generate the file is version 3.6",
            "B: it has been produced by CPython",
            "C: it is the 36th version of the file",
            "D: the file comes from the services.py source file"
        ],
        "korrekte_antwort": ["A", "B", "D"]
    },
    {
        "frage": "What is the expected behavior of the following snippet?\n\ndef a(l, I):\n    return l[I]\nprint(a(0, [1))",
        "optionen": [
            "A: cause an exception",
            "B: print 1",
            "C: print 0 [1]",
            "D: print [1]"
        ],
        "korrekte_antwort": "A"
    },
    {
        "frage": "What can you do if you don’t like a long package path like this one?\n\nimport alpha.beta.gamma.delta.epsilon.zeta",
        "optionen": [
            "A: you can make an alias for the name using the alias keyword",
            "B: nothing you need to come to terms with it",
            "C: you can shorten it to alpha.zeta and Python will find the proper connection",
            "D: you can make an alias for the name using the as keyword"
        ],
        "korrekte_antwort": "D"
    },
    {
        "frage": "What is the expected output of the following code?\n\nstr = 'abcdef'\ndef fun(s):\n    del s[2]\n    return s\n\nprint(fun(str))",
        "optionen": [
            "A: abcef",
            "B: The program will cause a runtime exception/error",
            "C: acdef",
            "D: abdef"
        ],
        "korrekte_antwort": "B"
    }
];

let gesamteFragen = [];
let aktuelleFrageIndex = 0;
let score = 0;
let falscheAntworten = [];


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

        // Ersetzen Sie Zeilenumbrüche durch <br> Tags und nutzen Sie das <pre>-Tag für die Formatierung
        questionTextElement.innerHTML = `<pre>${aktuelleFrage.frage.replace(/\n/g, '<br>')}</pre>`;

        optionsContainer.innerHTML = ''; // Löschen Sie vorherige Optionen

        aktuelleFrage.optionen.forEach((option, index) => {
            const inputType = typeof aktuelleFrage.korrekte_antwort === 'string' ? 'radio' : 'checkbox';
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
