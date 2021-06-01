let playerCount = 0
let houseCount = 0

let playerScore = 0
let houseScore = 0

let scoreBoard = 0


let bStart = document.getElementById("start")
let bHit = document.getElementById("hit")
let bStand = document.getElementById("stand")
let bInfo = document.getElementById("info")
let house = document.getElementById("house")
let player = document.getElementById("player")


bHit.style.display = "none";
bStand.style.display = "none";
house.style.display = "none";
player.style.display = "none";


bStart.addEventListener("click", init)
//create a deck of cards

let suits = ["h", "c", "d", "s"]
let ranks = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K", "A"]

let deck = []

for(let i = 0; i<suits.length; i++){
    for(let j=0; j<ranks.length; j++){
        let value = parseInt(ranks[j]);//number value of each array item of ranks
        if (ranks[j] === "A")  {
            value = 11;
        }
        if(ranks[j] === "J" || ranks[j] === "Q" || ranks[j] === "K") {
        value = 10;
        }
        let eachCard = (suits[i]+ranks[j])
        console.log(eachCard)
    let individualCard= {Suit: suits[i], Rank: ranks[j], Value: value, Class: eachCard};  

    deck.push(individualCard);
    }
}
console.log(deck)


//make a function to randomly pick from the deck. 

function pickCardP (){   
let randomCard = [deck[Math.floor(Math.random() * deck.length)]]
console.log(randomCard)
let newClass = document.createElement("DIV")
let result = randomCard.map(a => a.Class)
console.log(result)
newClass.className= "card "+result;
console.log(newClass)
player.appendChild(newClass);
}



let startingCardsP = pickCardP()
pickCardP();


function pickCardH (){   
    let randomCard = [deck[Math.floor(Math.random() * deck.length)]]
    console.log(randomCard)
    let newClass = document.createElement("DIV")
    let result = randomCard.map(a => a.Class)
    console.log(result)
    newClass.className= "card "+result;
    console.log(newClass)
    house.appendChild(newClass);
    }

let startingCardsH = pickCardH()
pickCardH();


function init(){
    bStart.style.display = "none";
    house.style.display = "block";
    player.style.display = "block";
    bHit.style.display = "block";
    bStand.style.display = "block";
}




//make the hit and stand buttons appear 2 seconds after cards are shown









