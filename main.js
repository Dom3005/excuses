no1 = ["Sorry, ich kann nicht,", "Bitte vergieb meine Abwesenheit, aber", "Das hört sich sicherlich verrückt an, aber", "Hör her:",
   "Ich kann nicht, weil", "Du wirst mich hassen, aber", "Ich kümmere mich um meine eigenen Angelegenheiten und bäm!", "Ich fühle mich schrecklich, aber",
   "Bedauerlicherweise kann ich nicht kommen, weil", "Das hört sich jetzt an wie eine Ausrede, aber", "ääähm..", "Ich bedaure ihnen mitteilen zu müssen:",
   "Es ist mir unmöglich zu erscheinen, denn", "Meine Fähigkeit teilzunehmen ist verhindert, weil", "ääh.. ja..", "", "Entschuldigen sie die Verspätung, aber",
   "Entschuldigen sie meine Anwesenheit, allerdings", "Ich kann da ja nichts für, doch", "Da können sie zwar nichts für, aber", "Ich war zwar nicht da, aber "];

no2 = ["mein Neffe", "Hitler's Geist", "der Papst", "mein/e Ex", "eine Schul-Marschkapelle", "Jerry Maus", "Bugs Bunny",
   "The Rock", "ein trauriger Clown", "so ein komisches Kind", "ein professionelles Cricketteam", "mein Tinderdate",
   "Herr Jütten", "Herr Moll", "Herr Lawson", "Gott", "Herr Zimmermann", "Bob Ross", "Mahatma Gandhi", "Danny Devito",
   "Obama", "Nelson Mandela's Freiheitsgeist", "Dustin", "die Deutsche Bahn", "Michael Reeves",
   "Angela Merkel", "Jens Spahn", "Armin Laschet", "Herr Voss", "Fritz Dietmah",
   "ein kleines Kind auf dem Schulflur", "Putin", "die CIA", "Frau Krügel", "Kater Tom",
   "Julius", "Justus", "Goethe", "Schiller", "Herr Krüger", "das Finanzamt", "der Staat", "Xi Jinping", "die Maus",
   "Winnie Pooh", "Frau Waechter", "Mario", "Herr Küper", "Olga", "Kasim", "Guy Deutscher", "Barbara Schöneberger",
   "Atilla Hildmann", "der Wendler", "Günther Jauch" ,"Friedrich Merz", "Herr Deckwirth", "ein Taliban Kämpfer",
   "das Kikaninchen", "Bob der Baumeister", "Bernd das Brot", "Osama Bin Laden", "der rote Powerranger", "die US Army",
   "der Gruffallo", "der Sandmann", "Familie Feuerstein", "Ernie von der Sesamstraße", "Bert von der Sesamstraße",
   "Papa Schlumpf", "Schlumpfine", "Peter Lustig", "Mickey Mouse", "die Gummibärenbande", "Lucky Luke", "Dagobert Duck",
   "Inspektor Gadget", "Mogli", "Balu", "Sailor Moon", "Pikachu", "der rote Teletubby", "Feuerwehrmann Sam", "Benjamin Blümchen",
   "Marko", "Biene Maja", "der Mathemann", "Olaf Scholz", "Batman", "Gandalf", "Frodo", "Yoda", "der Terminator", "Neo",
   "Crack Vader", "Shrek", "Sonic", "Ruben", "Peppa Wutz"];

no2plr = ["die Kommunisten", "Querdenker", "so ein paar Verschwörungsschwurbler", "7 komische Zwerge", "die Teletubbies", "die Nazis",
          "die Inder"]
no2 = no2.concat(no2plr)

no3 = ["hat ins Bett geschissen", "ist vor mir verreckt", "will nicht aufhören mir Klopf-Klopf Witze zu erzählen", "hat einen mentalen Breakdown",
   "hat mir Syphilis gegeben", "hat Limo in meinen Tank geschüttet", "hat mich abgestochen", "hat meine Kiste mit menschlichen Zähnen gefunden",
   "hat mein Fahrrad gestohlen", "hat meine Nudes auf Insta hochgeladen", "hat die Binomische Formel von mir verlangt", "hat mein Haus abgebrannt",
   "hat mir Creditcard-Scams angedreht", "hat mich getasered", "hat mir eine Vorlesen über Quantenphysik gehalten", "hat Eier auf mich geworfen", 
   "hat mich zum Islam konvertiert, habibi", "wollte mich von Verschwörungstheorien überzeugen", "hat meine lebensgroßen Pappaufsteller von Herr Zimmermann gefunden",
   "hat sich eingeschissen", "hat spontan einen Genozid begangen", "hat den dritten Weltkrieg gestartet", "hat mich mit Corona angesteckt", "hat mich abgezogen", "",
   "hat mich gescammt", "hat mich mit einem Raketenwerfer abgeschossen", "hat einen Terroranschlag verübt", "hat eine Gedichtsanalyse von mir verlangt",
   "wollte die UdSSR neustarten", "hat mich gewaterboarded", "hat in meinen Tank geschissen", "hat vor meine Tür geschissen", "hat mein Pfand geklaut",
   "betreibt internationalen Drogenhandel", "hat ein kurzes Nicken verlangt", "begeht Kriegsverbrechen im Kosovo", "hat dafür gesorgt, dass der Papst Al Quaeda beigetreten i|st",
   "ist für zahlreiche Kriegsverbrechen im nahen Osten verantwortlich", "ist zum Super-Saiyajin transformiert", "musste noch kurz Wahlergebnisse fälschen",
   "ist zum Islam konvertiert", "hat auf den Bahngleisen meditiert", "hat einen Selbstmordattentat begangen", "hat mich geblackmailed", "sieht kein Problem im 3. Reich",
   "leitet Atomraketentests in Nordkorea", "leitet chinesische Arbeitslager", "ist Verfechter der Deutschland GmbH", "hat zwei US-Präsidenten ermordet",
   "hat Menschenexperimente an mir durchgeführt", "hat mir eine Coronaimpfung am Hauptbahnhof angedreht", "wollte mich vom Kommunismus überzeugen",
   "verbringt jetzt den Rest seiner/ihrer Zeit hinter Gittern", "hat noch seinen Besitz aus dem Müllcontainer geholt", "versuchte mir einen Mobilfunkvertrag anzudrehen",
   "hat versehentlich den Killcount der Soviet Union wie einen Witz aussehen lassen", "ist Bundeskanzler geworden", "musste noch ein Terrorregime einrichten",
   "ist im Treibsand verreckt", "ist als Kanzler von Österreich zurückgetreten", "musste noch kurz einen Laden ausrauben", "hat einen Straßenkampf gestartet"];

v1 = ["hat",  "ist", "musste", "leitet", "wollte", "betreibt", "begeht", "sieht", "verbringt", "versuchte", "hat noch seinen", "seiner/ihrer"]
v2 = ["haben", "sind", "mussten", "leiten", "wollten", "betreiben", "begehen", "sehen", "verbringen", "versuchten", "haben noch ihren", "ihrer"]

classNames = ["no1", "no2", "no3"];
fields = [no1, no2, no3];
sentences = [];

let amt = 5;

function generateSentence(){
    sentences = [];
    let table = document.getElementById("sentences")

    for(let i = 0; i < amt; i++){
        let temp = [];

        // select fields
        for(let ii = 0; ii < 3; ii++){
            temp.push(fields[ii][getRandomInt(fields[ii].length)]);
        }

        // make singular stuff plural
        if(no2plr.includes(temp[1])){
            for(let i = 0; i < v1.length; i++){
                if(temp[2].includes(v1[i]))
                temp[2] = temp[2].replace(v1[i], v2[i]);
            }
                
        }

        // remove temp thing that prevents some words from being made plural
        temp[2] = temp[2].replace("|", "");
        sentences.push(temp);
    }

    // push to website
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
