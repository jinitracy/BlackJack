
let player = {
    name: "Jini",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-ele")
let cardsEl=document.getElementById("cards-ele")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber=Math.floor(Math.random() * 13) + 1
    if (randomNumber===1){
        return 11
    }
    else if (randomNumber>10){
    return 10
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards = [firstCard,secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}
function renderGame(){
    sumEl.textContent= "Sum:" + sum
    cardsEl.textContent= "Cards:" 
    for(let i=0;i<cards.length;i++){
    cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message

}

function newCard(){
    if (isAlive===true&&hasBlackJack===false){
    message=" Draw a new card!"
    messageEl.textContent=message
    let thirdCard= getRandomCard()
    sum+=sum
    cards.push(thirdCard)
    renderGame()
    }

}