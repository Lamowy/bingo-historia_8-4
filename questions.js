var Question = /** @class */ (function () {
    function Question(question, answers, correctAnswer, x, y) {
        this._answers = [];
        this._question = question;
        this._answers = answers;
        this._correctAnswer = correctAnswer;
        this._x = x;
        this._y = y;
    }
    Question.prototype.getQuestion = function () {
        return this._question;
    };
    Question.prototype.getAnswers = function () {
        return this._answers;
    };
    Question.prototype.getCorrectAnswer = function () {
        return this._correctAnswer;
    };
    Question.prototype.getX = function () {
        return this._x;
    };
    Question.prototype.getY = function () {
        return this._y;
    };
    return Question;
}());
// History unit 4th questions
var questions = [
    // =====================
    // 1. Początki władzy komunistów w Polsce
    // =====================
    new Question("Jaka partia połączyła się z Polską Partią Socjalistyczną w 1948 roku?", ["Polska Partia Robotnicza", "Polska Partia Ludowa", "Stronnictwo Demokratyczne", "Polskie Stronnictwo Ludowe"], "Polska Partia Robotnicza", 1, 1),
    new Question("W którym roku odbyło się referendum ludowe?", ["1948", "1945", "1946", "1947"], "1946", 1, 2),
    new Question("Jak nazywała się polska policja polityczna?", ["Ludowy Komisariat Spraw Wewnętrznych", "Urząd Bezpieczeństwa", "Milicja Obywatelska", "Służba Bezpieczeństwa"], "Urząd Bezpieczeństwa", 1, 3),
    new Question("Około ilu polskich obywateli zginęło w II wojnie światowej?", ["około 6 milionów", "około 2 milionów", "około 10 milionów", "około 4 milionów"], "około 6 milionów", 1, 4),
    new Question("19 lutego 1947 r. Sejm ustawodawczy uchwalił:", ["Konstytucję PRL", "Małą Konstytucję", "Manifest PKWN", "Konstytucję marcową"], "Małą Konstytucję", 1, 5),
    new Question("Posiadaczom powyżej ilu hektarów odbierano ziemię podczas reformy rolnej?", ["100 hektarów", "50 hektarów", "75 hektarów", "25 hektarów"], "50 hektarów", 1, 6),

    // =====================
    // 2. Stalinizm
    // =====================
    new Question("Jak nazywał się plan gospodarczy rozpoczęty w roku 1950 r.?", ["Plan Trzyletni", "Plan Sześcioletni", "Plan Czteroletni", "Plan Pięcioletni"], "Plan Sześcioletni", 2, 1),
    new Question("Jak nazywał się okres w kulturze i sztuce okresu stalinizmu?", ["Socrealizm", "Romantyzm socjalistyczny", "Realizm krytyczny", "Modernizm ludowy"], "Socrealizm", 2, 2),
    new Question("Czym zastąpiono urząd prezydenta w konstytucji stalinowskiej?", ["Radą Państwa", "Sejmem Ustawodawczym", "Radą Ministrów", "Trybunałem Ludowym"], "Radą Państwa", 2, 3),
    new Question("Kto sprawował rzeczywistą władzę w Polsce za czasów PRL-u?", ["Marszałek Sejmu", "I sekretarz KC PZPR", "Prezydent", "Prezes Rady Ministrów"], "I sekretarz KC PZPR", 2, 4),
    new Question("Młodych ludzi często zmuszano do wstępowania do komunistycznych organizacji. Jak nazywała się największa z nich?", ["Związek Harcerstwa Polskiego", "Organizacja Młodzieży Towarzystwa Uniwersytetu Robotniczego", "Związek Młodzieży Polskiej", "Socjalistyczny Związek Studentów Polskich"], "Związek Młodzieży Polskiej", 2, 5),
    new Question("Jak nazywano właścicieli dużych gospodarstw, którzy byli niechętni do wstępowania do spółdzielni rolniczych?", ["Biedota wiejska", "Chłopi pańszczyźniani", "Kułacy", "Robotnicy rolni"], "Kułacy", 2, 6),

    // =====================
    // 3. Gomułka
    // =====================
    new Question("W którym roku umarł Bolesław Bierut?", ["1952", "1953", "1956", "1957"], "1956", 3, 1),
    new Question("Kiedy Władysławowi Gomułce zaproponowano stanowisko I sekretarza KC PZPR?", ["Październik 1956", "Czerwiec 1956", "Marzec 1956", "Listopad 1956"], "Październik 1956", 3, 2),
    new Question("Gdzie odbył się strajk generalny 28 czerwca 1956 r.?", ["Poznań", "Warszawa", "Gdańsk", "Łódź"], "Poznań", 3, 3),
    new Question("Kto nakazał odsunięcie Gomułki od władzy?", ["Edward Gierek", "Władysław Gomułka", "Leonid Breżniew", "Bolesław Bierut"], "Leonid Breżniew", 3, 4),
    new Question("Jakie święto obchodził w 1966r. Kościół Katolicki w Polsce?", ["Tysiąclecie Chrztu Polski", "500-lecie Jagiellonów", "Millenium Soboru Trydenckiego", "Jubileusz II RP"], "Tysiąclecie Chrztu Polski", 3, 5),
    new Question("Jaki utwór Adama Mickiewicza zaprezentowany na scenie teatralnej był powodem kolejnych wystąpień społecznych w marcu 1968 r.?", ["Dziady", "Pan Tadeusz", "Konrad Wallenrod", "Ballady i romanse"], "Dziady", 3, 6),

    // =====================
    // 4. Gierek
    // =====================
    new Question("Jak potocznie nazywał się Fiat 126p?", ["Maluch", "Kaszlak", "Ogórek", "Warszawa"], "Maluch", 4, 1),
    new Question("Jak nazywał się program telewizyjny z propagandowymi wiadomościami za czasów PRL-u?", ["Dziennik Telewizyjny", "Wiadomości PRL", "Teleexpress", "Kronika Polska"], "Dziennik Telewizyjny", 4, 2),
    new Question("Jakie dwie miejscowości łączy 'gierkówka'?", ["Warszawa – Katowice", "Kraków – Gdańsk", "Poznań – Łódź", "Wrocław – Lublin"], "Warszawa – Katowice", 4, 3),
    new Question("Co wprowadzono w ramach walki z brakiem podstawowych artykułów w sklepach?", ["Kartki na żywność", "Darmowe sklepy", "Import z USA", "Zniesienie podatków"], "Kartki na żywność", 4, 4),
    new Question("Jak spłacano pożyczki zagraniczne zaciągnięte przez Edwarda Gierka?", ["Eksportem towarów i kredytami", "Sprzedażą złota i reformą walutową", "Podniesieniem podatków tylko dla rolników", "Emisją nowych pieniędzy bez pokrycia"], "Eksportem towarów i kredytami", 4, 5),
    new Question("W jaki sposób Edward Gierek chciał zbudować 'drugą Polskę'?", ["Poprzez kredyty zagraniczne i modernizację gospodarki", "Poprzez nacjonalizację wszystkich prywatnych firm", "Poprzez izolację od ZSRR", "Poprzez całkowitą likwidację przemysłu ciężkiego"], "Poprzez kredyty zagraniczne i modernizację gospodarki", 4, 6),

    // =====================
    // 5. Pojęcia
    // =====================
    new Question("Rozwiń skrót PRL", ["Polska Republika Ludowa", "Polska Rada Ludowa", "Państwowa Republika Ludowa", "Polska Rzeczpospolita Ludowa"], "Polska Rzeczpospolita Ludowa", 5, 1),
    new Question("Rozwiń skrót PGR", ["Państwowe Gospodarstwo Rolne", "Polskie Gospodarstwo Rolnicze", "Państwowa Grupa Rolna", "Powszechne Gospodarstwo Rolne"], "Państwowe Gospodarstwo Rolne", 5, 2),
    new Question("Czym był peweks?", ["Sklepem z towarami za dewizy", "Fabryką samochodów", "Partią polityczną", "Tajną organizacją wojskową"], "Sklepem z towarami za dewizy", 5, 3),
    new Question("Na czym polegała cenzura prewencyjna?", ["Na kontrolowaniu treści przed publikacją", "Na zamykaniu szkół", "Na zakazie wyjazdów za granicę", "Na obowiązkowej służbie wojskowej"], "Na kontrolowaniu treści przed publikacją", 5, 4),
    new Question("Czym jest strajk generalny?", ["Strajkiem obejmującym większość zakładów pracy", "Protestem uczniów", "Buntem wojskowym", "Zebraniem partii politycznej"], "Strajkiem obejmującym większość zakładów pracy", 5, 5),
    new Question("Czym była kolektywizacja rolnictwa?", ["Przymusowym łączeniem gospodarstw rolnych", "Prywatyzacją fabryk", "Reformą szkolnictwa", "Budową nowych osiedli"], "Przymusowym łączeniem gospodarstw rolnych", 5, 6),

    // =====================
    // 6. Postacie
    // =====================
    new Question("Jak nazywał się Prymas Tysiąclecia?", ["Józef Glemp", "Stefan Wyszyński", "August Hlond", "Karol Wojtyła"], "Stefan Wyszyński", 6, 1),
    new Question("Kto objął stanowisko I sekretarza KC PZPR w grudniu 1970 r.?", ["Władysław Gomułka", "Wojciech Jaruzelski", "Edward Gierek", "Bolesław Bierut"], "Edward Gierek", 6, 2),
    new Question("Kto dowodził tzw. 'legalną opozycją'?", ["Józef Cyrankiewicz", "Roman Dmowski", "Stanisław Mikołajczyk", "Jacek Kuroń"], "Stanisław Mikołajczyk", 6, 3),
    new Question("Jakie było prawdziwe imię i nazwisko 'Inki'?", ["Anna Walentynowicz", "Elżbieta Zawacka", "Irena Sendlerowa", "Danuta Siedzikówna"], "Danuta Siedzikówna", 6, 4),
    new Question("Kto dowodził PPR przed jej zjednoczeniem?", ["Bolesław Bierut", "Edward Ochab", "Władysław Gomułka", "Jakub Berman"], "Władysław Gomułka", 6, 5),
    new Question("Kto dał się złapać w łapance by zbierać informacje o obozie w Auschwitz?", ["Jan Karski", "Witold Pilecki", "Tadeusz Bor-Komorowski", "Emil Fieldorf"], "Witold Pilecki", 6, 6),
];
