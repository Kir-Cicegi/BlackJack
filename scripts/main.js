/*----- constants -----*/ 

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
    let individualCard= {Suit: suits[i], Rank: ranks[j], Value: value, Class: eachCard};  
    deck.push(individualCard);
    }
}

/*----- app's state (variables) -----*/ 

let playerCount = 0
let houseCount = 0
let houseCards = []
let playerCards =[]
let newCard=[]
let userName;


/*----- cached element references -----*/ 

let bStart = document.getElementById("start")
let bInfo = document.getElementById("infobtn")
let infoImg = document.getElementById("infoimg");
let info = document.getElementById("iPop");
let closebtn = document.getElementById("close");
let userInput = document.getElementById("userName")
let bHit = document.getElementById("hit")
let bStand = document.getElementById("stand")
let house = document.getElementById("house")
let player = document.getElementById("player")
let playerInput = document.getElementById("playerCount")
let houseInput = document.getElementById("houseCount")
let displayResult = document.getElementById("display")
let decisionBtn = document.getElementById("decision")


/*----- event listeners -----*/ 

bStand.addEventListener("click", houseAI);
decisionBtn.addEventListener("click", reSet)
bInfo.addEventListener("click", showInfo)
closebtn.addEventListener("click", closeInfo)
bStart.addEventListener("click", init)
bHit.addEventListener("click", () => {
    setTimeout(addCardP, 500);
    houseAI();
    compare();
})


/*----- functions -----*/


initialDisplay();

function initialDisplay (){  
    bHit.style.display = "none";
    bStand.style.display = "none";
    house.style.display = "none";
    player.style.display = "none";
    playerInput.style.display= "none";
    houseInput.style.display= "none";
    displayResult.style.backgroundColor = "gainsboro";
    decisionBtn.style.display= "none";
    closebtn.style.display = "none";
    infoImg.style.display = "none"
 
}


function showInfo () {
    infoImg.style.display = "block";
    closebtn.style.display = "block";
}

function closeInfo(){
    infoImg.style.display = "none";
    closebtn.style.display = "none";
}

//function that is initiated with start being clicked 

function init(){
    bStart.style.visibility = "hidden";
    userInput.style.display = "none";
    house.style.display = "block";
    player.style.display = "block";
    addCardH();
    addCardP();
    setTimeout(addCardH, 1000);
    setTimeout(addCardP, 2000);
    bHit.style.display = "block";
    bStand.style.display = "block";
    playerInput.style.display= "block"
    decisionBtn.style.display = "none";
    closebtn.style.display = "none";
    
}

//function to randomly pick from the deck & assign to player and house 

function pickRandomCard(){
    let randomCard = [deck[Math.floor(Math.random() * deck.length)]]
    return randomCard
}


function newValues (){
    newCard = pickRandomCard();
    assignClass();
    assignValue();
}


function assignClass(){
    let newClass = document.createElement("DIV")
    let result = newCard.map(a => a.Class)
    newClass.className= "card large "+result;
    return newClass 
}
   

function assignValue(){
    let total = newCard.map(v => v.Value)
    return parseInt(total)  
}



function addCardP (){   
    newValues()
    let random = assignClass();
    playerCards.push(random);
    for(i=0; i<playerCards.length; i++){
        let newCard = (playerCards[i])
        player.appendChild(newCard)
    }
    let eachCardCount = assignValue();
    playerCount += eachCardCount  
    playerInput.innerHTML = "Your total is: " + playerCount
    playerCards.push(random)
    compare();
}


function addCardH (){  
    newValues() 
    let random = assignClass();
    houseCards.push(random)
        for(i=0; i<houseCards.length; i++){
            let newCard = (houseCards[i])
            if (i === 0){
                newCard.className = "card large back-red";
            }
        house.appendChild(newCard)
    }
    let eachCardCount  = assignValue();
    houseCount += eachCardCount;
    console.log(houseCount) 
    houseInput.innerHTML = "House total is: " + houseCount
    compare();  
}


//win/lose logic 

function compare(){
    userName = userInput.value
    if (houseCount === 21){
        displayResult.innerHTML= "House Wins! " + userName + " drink up!"
        endGame();
    }else if (playerCount === 21){
        displayResult.innerHTML= userName + " wins. Give out a drink!"
        endGame();
    }else if (playerCount > 21){
        displayResult.innerHTML= userName + " busts! Drink Up"
        endGame();
    }else if (houseCount > 21){
        displayResult.innerHTML= "House Busts!" + userName + " give out a drink!"
        endGame();
    }
}


function houseAI() {
    if (houseCount < 17){
    setTimeout(addCardH, 1000);
    }else if (houseCount < 21 && playerCount < 21){
        if(houseCount < playerCount){
            displayResult.innerHTML = userName + " wins. Give out a drink!"
            endGame();
        }displayResult.innerHTML = "House Wins! " + userName + " drink up!"
        endGame();
    }compare();
}

// functions for resetting the game 

function endGame (){
    displayResult.style.display = "block";
    bStand.style.display = "none";
    bHit.style.display = "none";
    setTimeout(initialDisplay, 3500);
    displayResult.style.textAlign = "center";
    displayResult.style.fontSize = "300%"
    houseInput.style.display= "block";
    setTimeout(keepPlaying, 3500)
}


function keepPlaying () {
    decisionBtn.style.display= "block"
}


function reSet(){
    playerCount = 0
    houseCount = 0
    houseCards = [];
    playerCards =[];
    player.innerHTML = ""
    house.innerHTML = ""   
    displayResult.innerHTML = ""
    init();
}











