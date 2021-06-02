let playerCount = 0
let houseCount = 0
let houseCards = []
let playerCards =[]
let playerScore = 0
let houseScore = 0

let scoreBoard = 0


let bStart = document.getElementById("start")
let bHit = document.getElementById("hit")
let bStand = document.getElementById("stand")
let bInfo = document.getElementById("info")
let house = document.getElementById("house")
let player = document.getElementById("player")
let playerInput = document.getElementById("playerCount")
let displayResult = document.getElementById("display")
let decisionBtn = document.getElementById("decision")


bHit.style.display = "none";
bStand.style.display = "none";
house.style.display = "none";
player.style.display = "none";
decisionBtn.style.display= "none";


bStart.addEventListener("click", init)
bHit.addEventListener("click", () => {
    addCardP();
    houseAI();
    compare();
})

bStand.addEventListener("click", () => {
    houseAI();
    compare();
    if (houseCount < 21 && playerCount < 21){
        if(houseCount < playerCount){
            displayResult.innerHTML = "Player Wins"
        }displayResult.innerHTML = "House Wins"
    }
})


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

//function that is initiated with start being clicked 
function init(){
    bStart.style.display = "none";
    house.style.display = "block";
    player.style.display = "block";
    addCardP();
    addCardP();
    addCardH();
    addCardH();
    bHit.style.display = "block";
    bStand.style.display = "block";
}

//function to randomly pick from the deck & assign 
function pickRandomCard(){
    let randomCard = [deck[Math.floor(Math.random() * deck.length)]]
    console.log(randomCard)
    return randomCard
}

let newCard=[]

//add the newCard's value 
function newValues (){
    newCard = pickRandomCard();
    console.log(newCard)
    assignClass();
    assignValue();
}


function assignClass(){
    let newClass = document.createElement("DIV")
    let result = newCard.map(a => a.Class)
    newClass.className= "card "+result;
    return newClass 
}
    
function assignValue(){
    let total = newCard.map(v => v.Value)
    return parseInt(total)  
}


function addCardP (){   
    newValues()
    let random = assignClass();
    player.appendChild(random);
    let eachCardCount = assignValue();
    playerCount += eachCardCount  
    console.log(playerCount)
    playerInput.innerHTML = "Your total is: " + playerCount
    compare();
}

function addCardH (){  
    newValues() 
    let random = assignClass();
    house.appendChild(random);
    let eachCardCount  = assignValue();
    houseCount += eachCardCount;
    console.log(houseCount) 
    compare();  
}

//winning logic 

function compare(){
    if (houseCount === 21){
        displayResult.innerHTML = "House Wins!"
    }else if (playerCount === 21){
        displayResult.innerHTML = "Player Wins!"
    }else if (playerCount > 21){
        displayResult.innerHTML = "Players Busts! House Wins"
    }else if (houseCount > 21){
        displayResult.innerHTML = "House Busts! Player Wins"
    }
}


function houseAI() {
    if (houseCount < 17){
    addCardH();
    } compare();
}


function endGame (){

}


//make the hit and stand buttons appear 2 seconds after cards are shown









