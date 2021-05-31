let playerCount = 0
let houseCount = 0

let playerScore = 0
let houseScore = 0

let scoreBoard = 0


let bStart = document.getElementById("start")
let bHit = document.getElementById("hit")
let bStand = document.getElementById("start")
let bInfo = document.getElementById("info")



//create a deck of cards

let suits = ["H", "C", "D", "S"]
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

let deck = []

for(let i = 0; i<suits.length; i++){
    for(let j=0; j<ranks.length; j++){
        let value = parseInt(ranks[j]);//number value of each array item of ranks
        console.log(ranks[j])
        if (ranks[j] === "A")  {
            value = 11;
        }
        if(ranks[j] === "J" || ranks[j] === "Q" || ranks[j] === "K") {
        value = 10;
        }
    deck.push({Suit: suits[i], Rank: ranks[j], Value: value});     
    }
}
console.log(deck)

//use the same method I used for translator to get the values of each card from the object (.map())

//make a function to randomly pick from the deck. 

let randomCard = deck[Math.floor(Math.random() * deck.length)]
console.log(randomCard)

function randomPicks (){
    
}




//start button initializes the game. 
//deals two random cards to both 
//updates the count with sum of two values 







