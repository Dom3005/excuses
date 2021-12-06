no1 = ["Sorry I cant come ", "Please forgive my absence ", "This is going to sound crazy but ", "Get this: ",
    "I cant go because ", "I know youre going to hate me but ", "I was minding my own business and boom! ", "I feel terrible but ",
    "I regretfully cannot attend, ", "This is going to sound like an excuse but ", "ääähm.. ", "I regret to inform you that"];

no2 = ["my newphew ", "the ghost of Hitler ", "the Pope ", "my ex ", "a high school marching band ",
    "Dan Rather ", "a sad clown ", "the kid from Air Bud ", "a professional cricket team ", "my Tinder date ",
    "Mr. Jütten ", "Mr. Moll ", "Mr. Lawson "];

no3 = ["just shit the bed", "died in front of me", "wont stop telling me knock knock jokes", "is having a nervous breakdown",
    "gave me syphilis", "poured lemonade in my gas tank", "stabbed me", "found my box of human teeth",
    "stole my bike", "posted my nudes on Instagram", "demanded the binomial formula of me", "burned my home"];

classNames = ["no1", "no2", "no3"];
fields = [no1, no2, no3];
sentences = [];

let amt = 3;

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