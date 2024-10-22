//Min gissning är att vi kommer vilja ha dessa som globala variabler?
let deck //dumt ifall den finns både som global variabel och som lokal i generateDeck-funktionerna

let playerHand //Skulle behöva annat namn ifall vi har fler spelare
let dealerHand

let playerScore
let dealerScore //Inte så bra namn ifall man både räknar summan av handen och hur många rundor som vunnits



// variabler för att kunna lägga ut kort och interagera med DOMen från js
const playerCardDisplay = document.querySelector('.player-card-display')
const dealerCardDisplay = document.querySelector('.dealer-card-display')
const playerScoreDisplay = document.querySelector('#player-score')
const dealerScoreDisplay = document.querySelector('#dealer-score')
const hitButton = document.querySelector('#hit-button')
const standButton = document.querySelector('#stand-button')

console.log(playerCardDisplay, dealerCardDisplay, hitButton, standButton)

function hitButtonClick() {
    //TODO: Lägg till vad som ska hända när man klickar på hit
    console.log('you just hit the hit button')
}
function standButtonClick() {
    //TODO: Lägg till vad som ska hända när man klickar på stand
    console.log('you just hit the stand button')
}

hitButton.addEventListener('click', hitButtonClick)
standButton.addEventListener('click', standButtonClick)