//Funktionsvariant som bara genererar en lista med namn
function generateDeckSimplified() {
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
function generateDeck() {
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
            newCard.image.src = imageSource 

            newDeck.push(newCard)
        }
    }

    return newDeck
}


//Hur man skapar en kortlek och lägger till <img>-elementet hos ett kort i HTML-dokumentets <body>-tagg
let testDeck = generateDeck()

let card = testDeck[24]
document.querySelector('.dealer-card-display').append(card.image) 
document.querySelector('.dealer-card-display').append(testDeck[4].image) 

document.querySelector('.player-card-display').append(testDeck[5].image) 





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

// Utdelning av korten//
// Förbereda leken och dela ut korten
deck = generateDeck();  // Skapa kortleken
shuffleDeck();          // Blanda leken
function dealInitialCards() {
    // Tomma händer för ny runda
    playerHand = [];
    dealerHand = [];

    // Rensa tidigare kort från display
    playerCardDisplay.innerHTML = '';
    dealerCardDisplay.innerHTML = '';

    // Dela ut två kort till spelaren
    for (let i = 0; i < 2; i++) {
        let playerCard = deck.pop(); // Ta det sista kortet från kortleken
        playerHand.push(playerCard); // Lägg kortet i spelarens hand
        playerCardDisplay.append(playerCard.image); // Visa kortet på skärmen
        console.log(`Player got: ${playerCard.name}`); // Logga spelarens kort för att se till att två kort delas ut
    }

    // Dela ut två kort till dealern
    for (let i = 0; i < 2; i++) {
        let dealerCard = deck.pop(); // Ta det sista kortet från kortleken
        dealerHand.push(dealerCard); // Lägg kortet i dealerns hand

        if (i === 0) {
            // Visa första kortet öppet
            dealerCardDisplay.append(dealerCard.image);
            console.log(`Dealer's visible card: ${dealerCard.name}`);
        } else {
            // Skapa ett dolt kort för dealern (det andra kortet)
            let backOfCard = document.createElement('img');
            backOfCard.src = 'assets/cards/back.png'; // Bilden för kortets baksida
            dealerCardDisplay.append(backOfCard);
            console.log(`Dealer's hidden card: ${dealerHand[1].name}`); // Ändra till dealerHand[1] för att logga det andra kortet
        }
    }
}