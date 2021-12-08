no1 = ["Sorry, ich kann nicht, ", "Bitte vergieb meine Abwesenheit, aber ", "Das hört sich sicherlich verrückt an, aber ", "Hör her: ",
    "Ich kann nicht, weil ", "Du wirst mich hassen, aber ", "Ich kümmere mich um meine eigenen Angelegenheiten und bäm! ", "Ich fühle mich schrecklich, aber ",
    "Bedauerlicherweise kann ich nicht kommen, weil ", "Das hört sich jetzt an wie eine Ausrede, aber ", "ääähm.. ", "Es bedauert mich dir mitteilen zu müssen: ",
    "Es ist mir unmöglich zu erscheinen, denn ", "Meine Fähigkeit teilzunehmen ist verhindert, weil ", "ääh.. ja.. ", "",
    "Entschuldigen sie meine Anwesenheit, allerdings ", "Ich da nichts für, dass ", "Da können sie zwar nichts für, aber "];

no2 = ["mein Neffe ", "Hitler's Geist ", "der Papst ", "mein/e ex ", "Eine Schul-Marschkapelle ", "Jerry Maus ", "Bugs Bunny ",
    "The Rock ", "ein trauriger Clown ", "so ein komisches Kind ", "ein professionelles Cricketteam ", "mein Tinderdate ",
    "Herr Jütten ", "Herr Moll ", "Herr Lawson ", "Gott ", "Herr Zimmermann ", "Bob Ross ", "Mahatma Gandhi ", "Danny Devito",
    "Obama ", "Nelson Mandela's Freiheitsgeist ", "Dustin ", "eine Gruppe Querdenker ", "die Deutsche Bahn ", "Michael Reeves ",
    "so eine Gruppe Verschwörungsschwurbler ", "Angela Merkel", "Jens Spahn ", "Armin Laschet ", "Herr Voss ", "Fritz Dietmah ",
    "ein kleines Kind auf dem Schulflur ", "eine Gruppe Kommunisten ", "Putin ", "die CIA ", "Frau Krügel", "Kater Tom ",
    "Julius ", "Justus ", "Goethe ", "Schiller ", "Herr Krüger ", "das Finanzamt ", "der Staat ", "Xi Jinping ", "die Maus ",
    "Winnie Pooh ", "Frau Waechter ", "Mario ", "Herr Küper ", "Olga ", "Kassim ", "Guy Deutscher ", "Barbara Schöneberger",
    "Atilla Hildmann ", "der Wendler ", "Günther Jauch " , "Friedrich Merz", "Herr Deckwirth ", "ein Taliban Kämpfer ",
    "das Kikaninchen", "Bob der Baumeister ", "Bernd das Brot ", "Osama Bin Laden ", "der rote Powerranger ", "die US Army ",
    "7 komische Zwerge ", "der Gruffallo ", "der Sandmann ", "Familie Feuerstein ", "Ernie von der Sesamstraße ", "Bert von der Sesamstraße ",
    "Papa Schlumpf ", "Schlumpfine , "Peter Lustig ", "Mickry Mouse ", "die Gummibärenbande ", "Lucky Luke ", "Dagobert Duck ",
    "Inspektor Gadget ", "Mogli ", "Balu ", "Sailor Moon ", "Pikachu ", "der rote Teletubby ", "Feuerwehrmann Sam "];

no3 = ["hat ins Bett geschissen", "ist vor mir verreckt", "will nicht aufhören mir Klopf-Klopf Witze zu erzählen", "hat einen mentalen Breakdown",
    "hat mir Syphilis gegeben", "hat Limo in meinen Tank geschüttet", "hat mich abgestochen", "hat meine Kiste mit menschlichen Zähnen gefunden",
    "hat mein Fahrrad gestohlen", "hat meine Nudes auf Insta hochgeladen", "hat die Binomische Formel von mir verlangt", "hat mein Haus abgebrannt",
    "hat mir Creditcard-Scams angedreht", "hat mich getasered", "hat mir eine Vorlesen über Quantenphysik gehalten", "hat Eier auf mich geworfen", 
    "hat mich zum Islam konvertiert, habibi", "wollte mich von Verschwörungstheorien überzeugen", "hat meine lebensgroßen Pappaufsteller von Herr Zimmermann gefunden",
    "hat sich eingeschissen", "hat spontan einen Genozid begangen", "hat den dritten Weltkrieg gestartet", "hat mich mit Corona angesteckt", "hat mich abgezogen", "",
    "hat mich gescammt", "hat mich mit einem Raketenwerfer abgeschossen", "hat einen Terroranschlag verübt", "hat eine Gedichtsanalyse von mir verlangt",
    "wollte die UdSSR wiederbeleben", "hat mich gewaterboarded", "hat in meinen Tank geschissen", "hat vor meine Tür geschissen", "hat mein Pfand geklaut",
    "betreibt internationalen Drogenhandel", "hat ein kurzes Nicken verlangt", "begeht Kriegsverbrechen im Kosovo", "hat dafür gesorgt, sass der Papst Al Quaeda beigetragen ist",
    "ist für zahlreiche Kriegsverbrechen im nahen Osten verantwortlich", "ist zum Super-Saiyajin transformiert", "musste noch kurz Wahlergebnisse fälschen",
    "ist zum Islam konvertiert", "hat auf den Bahngleisen meditiert", "hat einen Selbstmordattentat begangen "];

classNames = ["no1", "no2", "no3"];
fields = [no1, no2, no3];
sentences = [];

let amt = 5;

function generateSentence(){
    sentences = [];
    let table = document.getElementById("sentences")

    for(let i = 0; i < amt; i++){
        let temp = [];
        for(let ii = 0; ii < 3; ii++){
            temp.push(fields[ii][getRandomInt(fields[ii].length)]);
        }

        sentences.push(temp);
    }

    for(let i = 0; i < amt; i++){
        var row = table.insertRow(table.rows.length);
        for(let ii = 0; ii < 3; ii++){
            row.insertCell(ii).innerHTML = `<a class="${classNames[ii]} cell">${sentences[i][ii]}</a>`;
        }
    }
}

function sliderChange(){
    amt = document.getElementById("size").value;
    document.getElementById("sizeText").text = amt;
}

function getRandomInt(max) {
    // Return number between 0 and (max-1)
    return Math.floor(Math.random() * max);
}
