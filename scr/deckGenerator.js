//Funktionsvariant som bara genererar en lista med namn
function generateDeckShort() {
    let deck = []
    const suits = ['Spader', 'Hjärter', 'Ruter', 'Klöver']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knekt', 'Dam', 'Kung', 'Ess']
    for (let suit of suits) {
        for (let rank of ranks) {
            let newCard = suit + ' ' + rank
            deck.push(newCard)
        }
    }

    return deck
}


//Variant som genererar lista med objekt{} med namn, färg, rang och HTML-bildelement
function generateDeckLong() {
    let deck = []

    //Använder engelska för att kunna använda namnen för att hitta rätt png
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'] 
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

    for (let suit of suits) {
        for (let rank of ranks) {
            let newCard = {
                name: rank + ' of ' + suit, //Här får t.ex. spader 5 namnet "5 of spades"
                suit: suit,
                rank: rank,
                image: document.createElement('img') //Skapar ett tomt <img> element
            }

            let imageSource = `assets/cards/${suit}_${rank[0]}.png` //I fallet spader 5 blir strängen "assets/cards/spades_5.png"
            newCard.image.src = imageSource //

            deck.push(newCard)
        }
    }

    return deck
}


//Nedanstående bör inte användas utan är mer exempel på hur funktionen kan tillämpas
let deck = generateDeckLong()

let card = deck[24] //väljer ut kort med index 24 som "card"

document.querySelector('body').append(card.image) //lägger till <img>-elementet hos "card" i HTML-dokumentets <body>-tagg

let cardBackImage = document.createElement('img')
cardBackImage.src = 'assets/cards/back_light.png'
document.querySelector('body').append(cardBackImage)


export {generateDeckLong, generateDeckShort}