//Funktionsvariant som bara genererar en lista med namn
function generateDeckShort() {
    let newDeck = []
    const suits = ['Spader', 'Hjärter', 'Ruter', 'Klöver']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knekt', 'Dam', 'Kung', 'Ess']
    for (let suit of suits) {
        for (let rank of ranks) {
            let newCard = suit + ' ' + rank
            newDeck.push(newCard)
        }
    }

    return newDeck
}


//Variant som genererar lista med objekt{} med namn, färg, rang och HTML-bildelement
function generateDeckLong() {
    let newDeck = []

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

            newDeck.push(newCard)
        }
    }

    return newDeck
}


//Hur man skapar en kortlek och lägger till <img>-elementet hos ett kort i HTML-dokumentets <body>-tagg
let deck = generateDeckLong()

let card = deck[24]
document.querySelector('body').append(card.image) 

let cardBackImage = document.createElement('img')
cardBackImage.src = 'assets/cards/back_light.png'
document.querySelector('body').append(cardBackImage)


//export {generateDeckLong, generateDeckShort}

function shuffleDeck() {

    for(let i = 0;i< deck.length; i++){

        let a= Math.floor(Math.random()*deck.length) // math floor för att inte få decimaler 
        let swipeDeck=deck[i];
        deck[i]=deck[a];
        deck[a]= swipeDeck;
       


    }
    console.log(deck); 
    
}
