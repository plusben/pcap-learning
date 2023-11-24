const fragen = [
    {
    "frage": "A compiler in Python is a program designed to (Select two answers)",
    "optionen": [
        "A: rearrange the source code to make it clearer",
        "B: check the source code in order to see if it's correct",
        "C: execute the source code",
        "D: translate the source code into machine code"
    ],
    "korrekte_antwort": ["B", "D"],
    "erlaeuterung": "In Python ist ein Compiler ein Programm, das den Quellcode in Maschinencode übersetzt (D) und den Quellcode auf Korrektheit prüft (B). Er ist nicht dazu gedacht, den Code neu anzuordnen (A) oder direkt auszuführen (C)."
},
{
    "frage": "Which of the following statements are true? (Select two answers)",
    "optionen": [
        "A: Python strings are actually lists",
        "B: Python strings can be concatenated",
        "C: Python strings can be sliced like lists",
        "D: Python strings are mutable"
    ],
    "korrekte_antwort": ["B", "C"],
    "erlaeuterung": "Python-Zeichenketten können miteinander verkettet (B) und ähnlich wie Listen geschnitten (sliced) werden (C). Sie sind jedoch nicht tatsächlich Listen (A) und sind unveränderlich (immutable), also nicht veränderbar (D)."
},
{
    "frage": "Assuming that String is six or more letters long the following slice string[1:-2] is shorter than the original string by:",
    "optionen": [
        "A: four chars",
        "B: three chars",
        "C: one char",
        "D: two chars"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Der Ausdruck 'string[1:-2]' schneidet das erste und die letzten zwei Zeichen des Strings ab, was den String insgesamt um drei Zeichen verkürzt."
},
{
    "frage": "What is the expected output of the following snippet?\n\ns = 'abc'\nfor i in len(s):\n    s[i] = s[i].upper()\nprint(s)",
    "optionen": [
        "A: abc",
        "B: The code will cause a runtime exception",
        "C: ABC",
        "D: 123"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Dieser Code führt zu einer Laufzeitexception, da 'len(s)' eine Zahl zurückgibt und nicht durchlaufen werden kann. Außerdem sind Strings in Python unveränderlich, was das Zuweisen zu 's[i]' ebenfalls fehlschlagen lässt."
},
{
    "frage": "Can a module run like regular code?",
    "optionen": [
        "A: yes and it can differentiate its behavior between the regular launch and import",
        "B: it depends on the Python version",
        "C: yes but it cannot differentiate its behavior between the regular launch and import",
        "D: no it is not possible; a module can be imported not run"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Ein Modul in Python kann wie regulärer Code ausgeführt werden und es kann sein Verhalten unterscheiden, je nachdem, ob es direkt ausgeführt oder importiert wird. Dies wird oft durch Überprüfung von '__name__ == \"__main__\"' erreicht."
},
  {
    "frage": "Select the valid fun() invocations: (Select two answers)\n\ndef fun(a, b = 0):\n    return a * b",
    "optionen": [
        "A: fun(b = 1)",
        "B: fun(a = 0)",
        "C: fun(b = 1, 0)",
        "D: fun(1)"
    ],
    "korrekte_antwort": ["A", "D"],
    "erlaeuterung": "Die gültigen Aufrufe sind 'fun(b = 1)' und 'fun(1)'. In beiden Fällen wird die Funktion 'fun' korrekt aufgerufen, wobei entweder das Schlüsselwortargument 'b' oder das Positionsargument 'a' verwendet wird."
},
  {
    "frage": "A file name like this one below says that: services.cpython-36.pyc (Select three answers)",
    "optionen": [
        "A: the interpreter used to generate the file is version 3.6",
        "B: it has been produced by CPython",
        "C: it is the 36th version of the file",
        "D: the file comes from the services.py source file"
    ],
    "korrekte_antwort": ["A", "B", "D"],
    "erlaeuterung": "Die Datei 'services.cpython-36.pyc' zeigt, dass sie von CPython (B) generiert wurde, die Version des Interpreters ist 3.6 (A), und sie stammt aus der Quelldatei 'services.py' (D). 'C' ist falsch, da die Zahl 36 auf die Python-Version und nicht auf eine Versionsnummer der Datei hinweist."
},
{
    "frage": "What is the expected behavior of the following snippet?\n\ns = 'abc'\nfor i in len(s):\n    s[i] = s[i].upper()\nprint(s)",
    "optionen": [
        "A: cause an exception",
        "B: print 1",
        "C: print 0 [1]",
        "D: print [1]"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Dieser Codeausschnitt führt zu einer Ausnahme, da 'len(s)' eine Zahl zurückgibt und nicht durchlaufen werden kann. Außerdem sind Strings in Python unveränderlich, was das Zuweisen zu 's[i]' ebenfalls fehlschlagen lässt."
},
  {
    "frage": "What can you do if you don’t like a long package path like this one?\n\nimport alpha.beta.gamma.delta.epsilon.zeta",
    "optionen": [
        "A: you can make an alias for the name using the alias keyword",
        "B: nothing you need to come to terms with it",
        "C: you can shorten it to alpha.zeta and Python will find the proper connection",
        "D: you can make an alias for the name using the as keyword"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Wenn ein langer Paketpfad nicht gewünscht ist, kann in Python der 'as'-Schlüsselwort verwendet werden, um einen Alias für den Paketnamen zu erstellen (Option D). Die anderen Optionen sind entweder ungültig oder nicht effektiv in Python."
},
  {
    "frage": "What is the expected output of the following code?\n\nstr = 'abcdef'\ndef fun(s):\n    del s[2]\n    return s\n\nprint(fun(str))",
    "optionen": [
        "A: abcef",
        "B: The program will cause a runtime exception/error",
        "C: acdef",
        "D: abdef"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Dieser Code führt zu einem Laufzeitfehler, da Zeichenketten in Python unveränderlich sind und der Versuch, ein Zeichen aus einer Zeichenkette zu löschen, einen Fehler verursacht."
},
  {
    "frage": "What is the expected output of the following code?\n\ndef f(n):\n    if n == 1:\n        return '1'\n    return str(n) + f(n-1)\n\nprint(f(2))",
    "optionen": [
        "A: 21",
        "B: 2",
        "C: 3",
        "D: 12"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Dieser rekursive Funktionsaufruf von 'f(n)' erzeugt die Ausgabe '21', da 'f(2)' zuerst '2' und dann 'f(1)' aufruft, was '1' zurückgibt."
},
  {
    "frage": "What is the expected behavior of the following snippet?\n\n01 def x():\n02     return 2\n03 x = 1 + x()\n04 print(x)",
    "optionen": [
        "A: cause a runtime exception on line 02",
        "B: cause a runtime exception on line 01",
        "C: cause a runtime exception on line 03",
        "D: print 3"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Der Code weist der Variablen 'x' den Wert '1 + x()' zu, was 3 ergibt, da die Funktion 'x()' den Wert 2 zurückgibt. Es gibt keine Laufzeitexception."
},
  {
    "frage": "What is the expected behavior of the following code?\n\ndef f(n):\n    for i in range(1, n + 1):\n        yield i\n\nprint(f(2))",
    "optionen": [
        "A: print 4321",
        "B: print <generator object f at (some hex digits)>",
        "C: cause a runtime exception",
        "D: print 1234"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Da 'f(2)' ein Generatorobjekt ist, gibt der Print-Befehl die Repräsentation des Generatorobjekts aus, nicht die generierten Werte."
},
  {
    "frage": "Is it possible to safely check if a class/object has a certain attribute?",
    "optionen": [
        "A: yes by using the hasattr attribute",
        "B: yes by using the hasattr() method",
        "C: yes by using the hasattr() function",
        "D: no it is not possible"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Es ist möglich, sicher zu überprüfen, ob eine Klasse oder ein Objekt ein bestimmtes Attribut hat, indem man die Funktion 'hasattr()' verwendet."
},
  {
    "frage": "Is it possible to safely check if a class/object has a certain attribute?",
    "optionen": [
        "A: yes by using the hasattr attribute",
        "B: yes by using the hasattr() method",
        "C: yes by using the hasattr() function",
        "D: no it is not possible"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Es ist möglich, sicher zu überprüfen, ob eine Klasse oder ein Objekt ein bestimmtes Attribut hat, indem man die Funktion 'hasattr()' verwendet."
},
  {
    "frage": "The first parameter of each method:",
    "optionen": [
        "A: holds a reference to the currently processed object",
        "B: is always set to None",
        "C: is set to a unique random value",
        "D: is set by the first argument's value"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "In Python hält der erste Parameter einer Methode (üblicherweise 'self') eine Referenz auf das aktuell verarbeitete Objekt."
},
  {
    "frage": "The simplest possible class definition in Python can be expressed as:",
    "optionen": [
        "A: class X:",
        "B: class X:\n    pass",
        "C: class X:\n    return",
        "D: class X:\n    { }"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Die einfachste mögliche Klassendefinition in Python besteht aus dem Schlüsselwort 'class', gefolgt vom Klassennamen und einem Rumpf, der mindestens eine Anweisung enthält. 'pass' ist eine Anweisung, die nichts tut, und wird häufig in leeren Klassendefinitionen verwendet."
},
  {
    "frage": "If you want to access an exception object’s components and store them in an object called e you have to use the following form of exception statement:",
    "optionen": [
        "A: except Exception (e) :",
        "B: except e= Exception:",
        "C: except Exception as e:",
        "D: such an action is not possible in Python"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Um auf die Bestandteile eines Ausnahmeobjekts zuzugreifen und sie in einem Objekt namens 'e' zu speichern, verwendet man die Form 'except Exception as e:'. Diese Syntax weist das Ausnahmeobjekt der Variablen 'e' zu."
},
  {
    "frage": "A variable stored separately in every object is called:",
    "optionen": [
        "A: there are no such variables all variables are shared among objects",
        "B: a class variable",
        "C: an object variable",
        "D: an instance variable"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Eine Variable, die in jedem Objekt separat gespeichert wird, wird als Instanzvariable bezeichnet. Sie ist spezifisch für jede Instanz einer Klasse."
},
  {
    "frage": "There is a stream named s open for writing. What option will you select to write a line to the stream?",
    "optionen": [
        "A: s.write (\"Hello\\n\")",
        "B: write (s, \"Hello\")",
        "C: s.writeln (\"Hello\")",
        "D: s.writeline (\"Hello\")"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Um eine Zeile in einen Stream zu schreiben, der für das Schreiben geöffnet ist, verwendet man die Methode 'write()' des Stream-Objekts, gefolgt von der zu schreibenden Zeichenkette und einem Zeilenumbruch '\\n', falls erforderlich."
},
  {
    "frage": "You are going to read just one character from a stream called s. Which statement would you use?",
    "optionen": [
        "A: ch = read (s, 1)",
        "B: ch= s.input (1)",
        "C: ch= input (s, 1)",
        "D: ch= s.read (1)"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Um genau ein Zeichen aus einem Stream zu lesen, verwendet man die Methode 'read(1)' des Stream-Objekts. Dies gibt das nächste Zeichen aus dem Stream zurück."
},
  {
    "frage": "What can you deduce from the following statement? (Select two answers)\n\nstr = open('file.txt', 'rt')",
    "optionen": [
        "A: str is a string read in from the file named file.txt",
        "B: a newline character translation will be performed during the reads",
        "C: if file.txt does not exist it will be created",
        "D: the opened file cannot be written with the use of the str variable"
    ],
    "korrekte_antwort": ["B", "D"],
    "erlaeuterung": "Beim Öffnen einer Datei im Textmodus ('rt') wird eine Umwandlung von Zeilenumbruchzeichen durchgeführt (B), und die Datei ist nur für das Lesen geöffnet, nicht für das Schreiben (D). 'str' ist hierbei ein Dateiobjekt, nicht der Inhalt der Datei (A), und die Datei wird nicht automatisch erstellt, wenn sie nicht existiert (C)."
},
  {
    "frage": "The following class hierarchy is given. What is the expected out of the code?\n\nclass A:\n    def a(self):\n        print(\"A\", end = '')\n    def b(self):\n        self.a()\n\nclass B(A):\n    def a(self):\n        print(\"B\", end = '')\n    def do(self):\n        self.b()\n\nclass C(A):\n    def a(self):\n        print(\"C\", end = '')\n    def do(self):\n        self.b()\n\nB().do()\nC().do()",
    "optionen": [
        "A: BB",
        "B: CC",
        "C: AA",
        "D: BC"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Die Ausgabe ist 'BC', da die Methode 'do()' von Klasse 'B' die Methode 'b()' von Klasse 'A' aufruft, die wiederum die überschriebene Methode 'a()' von Klasse 'B' aufruft ('B'). Anschließend wird 'do()' von Klasse 'C' aufgerufen, die ebenfalls 'b()' von 'A' aufruft, aber die Methode 'a()' von 'C' verwendet ('C')."
},
  {
    "frage": "Python’s built in function named open() tries to open a file and returns:",
    "optionen": [
        "A: an integer value identifying an opened file",
        "B: an error code (0 means success)",
        "C: a stream object",
        "D: always None"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Die eingebaute Funktion 'open()' in Python versucht, eine Datei zu öffnen und gibt bei Erfolg ein Stream-Objekt zurück, über das auf die Datei zugegriffen werden kann."
},
  {
    "frage": "Python strings can be “glued” together using the operator:",
    "optionen": [
        "A: .",
        "B: &",
        "C: _",
        "D: +"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "In Python können Zeichenketten (Strings) mit dem '+'-Operator aneinandergefügt („verklebt“) werden."
},
  {
    "frage": "How many stars (*) does the snippet print?\n\ns = '*****'\ns = s - s[2]\nprint(s)",
    "optionen": [
        "A: the code is erroneous",
        "B: five",
        "C: four",
        "D: two"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Der Code ist fehlerhaft ('erroneous'), da der Versuch, zwei Strings mit '-' zu subtrahieren, in Python nicht zulässig ist und einen Fehler verursacht."
},
  {
    "frage": "What is the expected output of the following snippet?\n\ns = '*-*'\ns = 2 * s + s * 2\nprint(s)",
    "optionen": [
        "A: *-**-**-**-*",
        "B: *-**-**-**-**-**-**-**-*",
        "C: *-*",
        "D: *-**-*"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Der Ausdruck '2 * s + s * 2' verdoppelt den String 's' zweimal und fügt die Ergebnisse zusammen, was zu '*-**-**-**-*' führt."
},
  {
    "frage": "How many elements will the list1 list contain after execution of the following snippet?\n\nList1 = \"don't think twice do it!\".split('')",
    "optionen": [
        "A: two",
        "B: zero",
        "C: one",
        "D: three"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Dieser Code führt zu einem Fehler, da der 'split()' Methodenaufruf mit einem leeren Trennzeichen ungültig ist. Daher wird keine Liste erstellt."
},
  {
    "frage": "Which of the equations are True? (Select two answers)",
    "optionen": [
        "A: chr(ord(x)) == x",
        "B: ord(ord(x)) == x",
        "C: chr(chr(x)) == x",
        "D: ord(chr(x)) == x"
    ],
    "korrekte_antwort": ["A", "D"],
    "erlaeuterung": "Die Ausdrücke 'chr(ord(x)) == x' und 'ord(chr(x)) == x' sind wahr, da 'ord()' einen Buchstaben in seinen ASCII-Wert und 'chr()' einen ASCII-Wert in den entsprechenden Buchstaben umwandelt. Die Umwandlungen heben sich gegenseitig auf."
},
  {
    "frage": "If you want to transform a string into a list of words what invocation would you use? (Select two answers)\n\ns = \"The Catcher in the Rye\"",
    "optionen": [
        "A: s.split()",
        "B: split(s, ' ')",
        "C: s.split(' ')",
        "D: split(s)"
    ],
    "korrekte_antwort": ["A", "C"],
    "erlaeuterung": "Die Methoden 's.split()' und 's.split(' ')' können verwendet werden, um einen String in eine Liste von Wörtern aufzuteilen. Beide teilen den String an den Leerzeichen auf."
},
  {
    "frage": "What should you put instead of XXX to print out the module name?\n\nif __name__ != 'XXX':\n    print(__name__)",
    "optionen": [
        "A: main",
        "B: _main_",
        "C: __main__",
        "D: ___main___"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Um den Modulnamen auszugeben, sollte 'XXX' durch '__main__' ersetzt werden. Die Variable '__name__' enthält den Namen des aktuellen Moduls, und wenn das Modul als Hauptprogramm ausgeführt wird, ist '__name__' gleich '__main__'."
},
  {
    "frage": "Files with the suffix .pyc contain:",
    "optionen": [
        "A: Python 4 source code",
        "B: backups",
        "C: temporary data",
        "D: semi-compiled Python code"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Dateien mit der Endung .pyc enthalten semi-kompilierten Python-Code. Sie sind Bytecode-Dateien, die vom Python-Interpreter erzeugt werden, um den Start von Python-Programmen zu beschleunigen."
},
  {
    "frage": "Package source directories/folders can be:",
    "optionen": [
        "A: converted into the so-called pypck format",
        "B: packed as a ZIP file and distributed as one file",
        "C: rebuilt to a flat form and distributed as one directory/folder",
        "D: removed as Python compiles them into an internal portable format"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Python-Pakete können als ZIP-Datei gepackt und als eine einzige Datei verteilt werden. Dies ermöglicht es, die gesamte Paketstruktur in einer komprimierten Form zu speichern und zu verteilen."
},
  {
    "frage": "What can you deduce from the line below? (Select two answers)\n\nx = a.b.c.f()",
    "optionen": [
        "A: import a.b.c should be placed before that line",
        "B: f() is located in subpackage c of subpackage b of package a",
        "C: the line is incorrect",
        "D: the function being invoked is called a.b.c.f()"
    ],
    "korrekte_antwort": ["A", "B"],
    "erlaeuterung": "Aus der Zeile 'x = a.b.c.f()' kann gefolgert werden, dass 'import a.b.c' vor dieser Zeile stehen sollte (A), und dass die Funktion 'f()' im Unter-Paket 'c' des Unter-Pakets 'b' des Pakets 'a' liegt (B)."
},
  {
    "frage": "A two-parameter lambda function raising its first parameter to the power of the second parameter should be declared as:",
    "optionen": [
        "A: lambda (x, y) = x ** y",
        "B: lambda (x, y): x ** y",
        "C: def lambda (x, y): return x ** y",
        "D: lambda x, y: x ** y"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Die korrekte Deklaration einer Zwei-Parameter-Lambda-Funktion, die den ersten Parameter zur Potenz des zweiten Parameters erhebt, ist 'lambda x, y: x ** y'. Lambda-Funktionen in Python erfordern das Schlüsselwort 'lambda', gefolgt von den Parametern und dem Ausdruck."
},
  {
    "frage": "What is the expected output of the following code?\n\ndef f(n):\n    if n == 1:\n        return 1\n    return n + f(n - 1)\nprint(f(2))",
    "optionen": [
        "A: 21",
        "B: 12",
        "C: 3",
        "D: None"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Dieser rekursive Funktionsaufruf von 'f(2)' ergibt '2 + f(1)', wobei 'f(1)' den Wert 1 zurückgibt. Daher ist das Endergebnis 3."
},
  {
    "frage": "A method for passing the arguments used by the following snippet is called:\n\ndef fun(a, b):\n    return a + b\n\nres = fun(1, 2)",
    "optionen": [
        "A: sequential",
        "B: named",
        "C: positional",
        "D: keyword"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Die Argumentübergabe in dem Snippet erfolgt nach Position, da die Werte 1 und 2 den Parametern 'a' und 'b' in der Reihenfolge ihrer Definition in der Funktionsdeklaration zugewiesen werden. Dies wird als Positionalargument-Übergabe bezeichnet."
},
  {
    "frage": "What is the expected behavior of the following code?\n\ndef f(n):\n    for i in range(1, n + 1):\n        yield i\n\nfor i in f(2):\n    print(i, end = '')",
    "optionen": [
        "A: print 21",
        "B: print 12",
        "C: cause a runtime exception",
        "D: print <generator object f at (some hex digits)>"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Dieser Code verwendet einen Generator, um Zahlen von 1 bis 'n' zu erzeugen. Bei der Iteration über 'f(2)' werden die Zahlen 1 und 2 generiert und nacheinander ohne Leerzeichen ausgegeben, was zu '12' führt."
},
  {
    "frage": "What is the expected output of the following code?\n\nlst = [x for x in range(5)]\nlst = list(filter(lambda x: x % 2 == 0, lst))\nprint(len(lst))",
    "optionen": [
        "A: 2",
        "B: The code will cause a runtime exception",
        "C: 1",
        "D: 3"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Dieser Code erzeugt eine Liste von Zahlen von 0 bis 4. Dann wird 'filter' verwendet, um nur gerade Zahlen zu behalten. Die geraden Zahlen in der Liste sind 0, 2 und 4, also insgesamt 3 Elemente."
},
  {
    "frage": "What is the expected behavior of the following code?\n\ndef unclear(x):\n    if x % 2 == 1:\n        return 0\n\nprint(unclear(1) + unclear(2))",
    "optionen": [
        "A: print 0",
        "B: cause a runtime exception",
        "C: prints 3",
        "D: print an empty line"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Der Code verursacht eine Laufzeitexception, da 'unclear(2)' 'None' zurückgibt (es gibt keinen expliziten 'return' für diesen Fall), und der Versuch, 'None' zu einem Integer zu addieren, führt zu einem Fehler."
},
  {
    "frage": "If any of a class’s components has a name that starts with two underscores (___) then:",
    "optionen": [
        "A: the class component’s name will be mangled",
        "B: the class component has to be an instance variable",
        "C: the class component has to be a class variable",
        "D: the class component has to be a method"
    ],
    "korrekte_antwort": "A",
    "erlaeuterung": "Wenn der Name einer Klassenkomponente mit zwei Unterstrichen beginnt, wird der Name in Python gemäß der Namensverwürfelung ('name mangling') verändert. Dies dient dazu, die Kapselung von privaten Attributen innerhalb einer Klasse zu verstärken."
},
  {
    "frage": "If you need to serve two different exceptions called Ex1 and Ex2 in one except branch you can write:",
    "optionen": [
        "A: except Ex1 Ex2:",
        "B: except (Ex1, Ex2):",
        "C: except Ex1, Ex2:",
        "D: except Ex1+Ex2:"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Um zwei verschiedene Ausnahmen in einem 'except'-Zweig zu behandeln, verwendet man die Syntax 'except (Ex1, Ex2):'. Diese Syntax ermöglicht es, mehrere Ausnahmen in einem einzigen Block zu fangen."
},
  {
    "frage": "A function called issubclass(c1, c2) is able to check if:",
    "optionen": [
        "A: c1 and c2 are both subclasses of the same superclass",
        "B: c2 is a subclass of c1",
        "C: c1 is a subclass of c2",
        "D: c1 and c2 are not subclasses of the same superclass"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Die Funktion 'issubclass(c1, c2)' überprüft, ob 'c1' eine Unterklasse von 'c2' ist. Sie gibt 'True' zurück, wenn dies der Fall ist, und 'False' andernfalls."
},
  {
    "frage": "The following class definition is given. We want the show() method to invoke the get() method and then output the value the get() method returns. Which of the invocations should be used instead of XXX?\n\nclass Klasse:\n    def __init__(self, val):\n        self.val = val\n    def get(self):\n        return self.val\n    def show(self):\n        XXX",
    "optionen": [
        "A: print(get(self))",
        "B: print(self.get())",
        "C: print(get())",
        "D: print(self.get(val))"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Um die 'get()' Methode innerhalb der 'show()' Methode aufzurufen und ihren Wert auszugeben, sollte die Syntax 'print(self.get())' verwendet werden. Dies ruft die 'get()' Methode des aktuellen Objekts ('self') auf."
},
  {
    "frage": "If s is a stream open for reading what do you expect from the following invocation?\n\nc = s.read()",
    "optionen": [
        "A: one line of the file will be read and stored in the string called C",
        "B: the whole file content will be read and stored in the string called C",
        "C: one character will be read and stored in the string called C",
        "D: one disk sector (512 bytes) will be read and stored in the string called C"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Die Methode 'read()' ohne Parameter liest den gesamten Inhalt des Streams 's' und speichert ihn in der Variablen 'c'. Wenn der Stream eine Datei repräsentiert, bedeutet dies, dass der gesamte Dateiinhalt gelesen wird."
},
  {
    "frage": "What is the expected output of the following code?\n\nclass Err(Exception):\n    def __init__(self, msg):\n        self.message = msg\n    def __str__(self):\n        return 'From Err block'\n\ntry:\n    print('Start')\n    raise Err('Error raised')\nexcept Err as e:\n    print(e)\nelse:\n    print('From else block')",
    "optionen": [
        "A: Start\nFrom else block",
        "B: Start\nError raised",
        "C: Start\nFrom Err block",
        "D: Start\nAn exception/runtime error is raised."
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Der Code gibt 'Start' aus, gefolgt von der Ausgabe des 'Err' Ausnahmeobjekts. Da die Ausnahme abgefangen wird, wird der Text 'From Err block' gedruckt."
},
  {
    "frage": "What is the expected behavior of the following snippet?\n\ndict_pets = {'dog': 1, 'cat': 1}\ntry:\n    print(dict_pets['mouse'])\nexcept LookupError:\n    print('Error handled by lookup branch')\nexcept KeyError:\n    print('Error handled by key branch')\nexcept:\n    print('Error handled by except branch')",
    "optionen": [
        "A: Error handled by lookup branch",
        "B: Error handled by key branch",
        "C: Error handled by except branch",
        "D: The code is erroneous"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Da 'mouse' nicht im 'dict_pets' vorhanden ist, wird ein KeyError ausgelöst. Die passende except-Klausel ist diejenige für KeyError, daher wird 'Error handled by key branch' gedruckt."
},
  {
    "frage": "Which of the following will output True? (Select two answers)\n\nprint(issubclass(NameError, OSError))\nprint(issubclass(SystemError, SystemExit))\nprint(issubclass(ValueError, Exception))\nprint(issubclass(FileNotFoundError, OSError))",
    "optionen": [
        "A: print(issubclass(NameError, OSError))",
        "B: print(issubclass(SystemError, SystemExit))",
        "C: print(issubclass(ValueError, Exception))",
        "D: print(issubclass(FileNotFoundError, OSError))"
    ],
    "korrekte_antwort": ["C", "D"],
    "erlaeuterung": "ValueError und FileNotFoundError sind beide Unterklassen von Exception bzw. OSError, daher geben die Ausdrücke 'issubclass(ValueError, Exception)' und 'issubclass(FileNotFoundError, OSError)' True zurück."
},
  {
    "frage": "What is the expected behavior of the following code?\n\ndef foo(x):\n    assert x, 'assertion error'\n    return 1 / x\n\ntry:\n    print(foo(0))\nexcept ZeroDivisionError:\n    print('zero')\nexcept AssertionError as e:\n    print(e)",
    "optionen": [
        "A: it will print: zero",
        "B: it will print: assertion error",
        "C: it will print an empty line",
        "D: The code is erroneous"
    ],
    "korrekte_antwort": "B",
    "erlaeuterung": "Da die Funktion 'foo' mit dem Wert 0 aufgerufen wird, löst die assert-Anweisung eine AssertionError aus, bevor eine Division durchgeführt wird. Daher wird 'assertion error' gedruckt."
},
  {
    "frage": "Which of the following statements are true with regards to Python Exceptions? (Select two answers)\n\nA: a try block must have a corresponding except block\nB: abstract exceptions are also known as leaves\nC: exceptions can cross function and module boundaries and travel through the invocation chain looking for a matching except clause\nD: AssertionError raises an exception when the expression is equal to None",
    "optionen": [
        "A: a try block must have a corresponding except block",
        "B: abstract exceptions are also known as leaves",
        "C: exceptions can cross function and module boundaries and travel through the invocation chain looking for a matching except clause",
        "D: AssertionError raises an exception when the expression is equal to None"
    ],
    "korrekte_antwort": ["A", "C"],
    "erlaeuterung": "Ein 'try'-Block muss einen entsprechenden 'except'-Block haben (A), und Ausnahmen können Funktions- und Modulgrenzen überschreiten und durch die Aufrufkette wandern, um nach einer passenden 'except'-Klausel zu suchen (C)."
},
  {
    "frage": "Which of the following statements are true. (Select two answers)",
    "optionen": [
        "A: isword() checks if a string contains only alpha numeric characters",
        "B: strings are immutable and can be sliced",
        "C: Python strings can be concatenated with the * operator",
        "D: triple quotes are used for multiline comments"
    ],
    "korrekte_antwort": ["B", "D"],
    "erlaeuterung": "Strings in Python sind unveränderlich (immutable) und können in Teilstrings (slices) aufgeteilt werden (B). Dreifache Anführungszeichen werden häufig für mehrzeilige Kommentare oder Strings verwendet (D)."
},
  {
    "frage": "Which of the following Python string methods are invoked correctly? (Select two answers)",
    "optionen": [
        "A: 'Hello World!'.replace('i', 'e')",
        "B: 'Hello World!'.join()",
        "C: 'Hello World!'.sort()",
        "D: 'Hello World!'.center(20, 'a')"
    ],
    "korrekte_antwort": ["A", "D"],
    "erlaeuterung": "Die Methoden 'replace()' und 'center()' sind korrekt aufgerufen. 'replace()' ersetzt Zeichen im String und 'center()' zentriert den String in einem Feld einer bestimmten Breite."
},
  {
    "frage": "What is the expected output of the following snippet?\n\nx = False\ny = '0'\nprint(x >= y)",
    "optionen": [
        "A: True",
        "B: False",
        "C: None",
        "D: The comparison causes a runtime exception"
    ],
    "korrekte_antwort": "D",
    "erlaeuterung": "Der Versuch, einen Boolean-Wert mit einem String zu vergleichen, führt in Python zu einer Laufzeitexception, da diese Datentypen nicht direkt vergleichbar sind."
},
  {
    "frage": "Which of the following expressions evaluate to True? (Select two answers)",
    "optionen": [
        "A: \"good\"[:3] == \"dog\"[::-1]",
        "B: len(300) == 3",
        "C: chr(32) == \" \"",
        "D: len(\"two dogs\") == 8"
    ],
    "korrekte_antwort": ["C", "D"],
    "erlaeuterung": "Der Ausdruck 'chr(32) == \" \"' ist wahr, da 'chr(32)' ein Leerzeichen darstellt. Der Ausdruck 'len(\"two dogs\") == 8' ist ebenfalls wahr, da der String 'two dogs' 8 Zeichen lang ist."
},
  {
    "frage": "Which of the following is a Python string method which removes trailing whitespace?",
    "optionen": [
        "A: replace()",
        "B: split()",
        "C: rstrip()",
        "D: join()"
    ],
    "korrekte_antwort": "C",
    "erlaeuterung": "Die Methode 'rstrip()' entfernt nachgestellte Leerzeichen (trailing whitespace) aus einem String. Die anderen Methoden haben andere Verwendungen und Funktionen."
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
            frageIndex: aktuelleFrageIndex, // Speichern des aktuellen Frage-Index
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

        // Hinzufügen der Frage-Nummerierung und Ersetzen von Zeilenumbrüchen durch <br> Tags
        // Nutzen Sie das <pre>-Tag für die Formatierung
        questionTextElement.innerHTML = `<h3 class="display-3">Frage ${aktuelleFrageIndex + 1}</h3><hr><pre>${aktuelleFrage.frage.replace(/\n/g, '<br>')}</pre>`;

        optionsContainer.innerHTML = ''; // Löschen Sie vorherige Optionen

        aktuelleFrage.optionen.forEach((option, index) => {
            const inputType = typeof aktuelleFrage.korrekte_antwort === 'string' ? 'radio' : 'checkbox';
            const inputId = `option-${index}`;
            optionsContainer.innerHTML += `
                <hr>
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
    wrongAnswersContainer.innerHTML = '<h2>Ihre falsch beantworteten Fragen:</h2>';

    // Falsch beantwortete Fragen anzeigen
    if (falscheAntworten.length > 0) {
        falscheAntworten.forEach(item => {
            wrongAnswersContainer.innerHTML += '<hr>';
            // Verwendung des gespeicherten Index für die Nummerierung
            wrongAnswersContainer.innerHTML += `<h4>Frage ${item.frageIndex + 1}:</h4><pre>${item.frage}</pre>`;
            item.gewaehlteAntwort.forEach(antwort => {
                const antwortText = fragen[item.frageIndex].optionen[antwort.charCodeAt(0) - 'A'.charCodeAt(0)];
                wrongAnswersContainer.innerHTML += `<p class="wrong-answer">Ihre Antwort: ${antwortText}</p>`;
            });
            const korrekteAntworten = Array.isArray(item.korrekteAntwort) ? item.korrekteAntwort : [item.korrekteAntwort];
            korrekteAntworten.forEach(antwort => {
                const antwortText = fragen[item.frageIndex].optionen[antwort.charCodeAt(0) - 'A'.charCodeAt(0)];
                wrongAnswersContainer.innerHTML += `<p class="correct-answer">Richtige Antwort: ${antwortText}</p>`;
            });
            // Verwendung von <pre> für Erläuterungen
            wrongAnswersContainer.innerHTML += `<p><strong>Erläuterung:</strong></p><p>${fragen[item.frageIndex].erlaeuterung}</p>`;
        });
    } else {
        wrongAnswersContainer.innerHTML += '<p>Sie haben keine Fragen falsch beantwortet.</p>';
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
