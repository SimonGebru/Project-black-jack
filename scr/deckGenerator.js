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

            let imageSource
            if (newCard.rank == 10) {
                imageSource = `assets/cards/${suit}_${rank}.png`
            } else {
                imageSource = `assets/cards/${suit}_${rank[0]}.png`
            }
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
        console.log(`Player got: ${playerCard.name}`);
    }

    // Dela ut två kort till dealern (båda korten visas direkt)
    for (let i = 0; i < 2; i++) {
        let dealerCard = deck.pop(); // Ta det sista kortet från kortleken
        dealerHand.push(dealerCard); // Lägg kortet i dealerns hand
        dealerCardDisplay.append(dealerCard.image); // Visa kortet på skärmen
        console.log(`Dealer's card: ${dealerCard.name}`);
    }

    // Räkna poäng för både spelaren och dealern efter utdelning
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);

    // Uppdatera poängvisningen i HTML
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('dealer-score').textContent = dealerScore;

    // Logga poängen i konsolen också (för felsökning)
    console.log(`Player's score: ${playerScore}`);
    console.log(`Dealer's score: ${dealerScore}`);
}

// Funktion för att dra ett till kort när "Hit Me"-knappen klickas
function hitButtonClick() {
    let newCard = deck.pop(); // Dra ett nytt kort från kortleken
    playerHand.push(newCard); // Lägg till det i spelarens hand
    playerCardDisplay.append(newCard.image); // Visa det nya kortet på skärmen

    // Uppdatera spelarens poäng
    playerScore = calculateScore(playerHand);
    document.getElementById('player-score').textContent = playerScore;

    // Logga kortet och spelarens nya poäng i konsolen för felsökning
    console.log(`Player got: ${newCard.name}`);
    console.log(`Player's updated score: ${playerScore}`);

    // Kolla om spelaren har överstigit 21 (bust)
    if (playerScore > 21) {
        console.log('Player busts!');
        // Lägg till logik här för vad som händer när spelaren "bustar"
    }
}

// Funktion för att räkna poäng
function calculateScore(hand) {
    let totalScore = 0;
    let aceCount = 0; // Håller koll på ess

    for (let card of hand) {
        let rank = card.rank;

        // Kolla om kortet är ett nummerkort (2-10)
        if (parseInt(rank)) {
            totalScore += parseInt(rank);
        }
        // Klädda kort (Jack, Queen, King) är värda 10
        else if (rank === 'Jack' || rank === 'Queen' || rank === 'King') {
            totalScore += 10;
        }
        // Ess kan vara 1 eller 11
        else if (rank === 'Ace') {
            aceCount += 1;
            totalScore += 11; // Börja med att räkna ess som 11
        }
    }

    // Om poängen överstiger 21 och det finns ess, räkna dem som 1 istället för 11
    while (totalScore > 21 && aceCount > 0) {
        totalScore -= 10; // Ändra ett ess från 11 till 1
        aceCount -= 1;
    }

    return totalScore; // Se till att returnera poängen
}


hitButton.addEventListener('click', hitButtonClick);
standButton.addEventListener('click', standButtonClick);

console.log(playerCardDisplay, dealerCardDisplay, hitButton, standButton);

// När du delar ut kort, räkna poäng direkt efteråt:
dealInitialCards();

// När du delar ut kort, räkna poäng direkt efteråt:
dealInitialCards();
let playerScores = calculateScore(playerHand);
let dealerScores = calculateScore(dealerHand);







function dealerTurn() {
    //Börjar med att dra ett kort om score <=17
    if (dealerScores <= 17) {

        let dealerCard = deck.pop() //Tar kort från leken
        dealerHand.push(dealerCard) //Lägger till ovannämnda kort i dealerHand
        dealerCardDisplay.append(dealerCard.image) //Lägger upp kortet
        console.log(`Dealer's card: ${dealerCard.name}`)

        //Uppdaterar och visar dealerns score
        dealerScores = calculateScore(dealerHand)
        dealerScoreDisplay.innerText = `${dealerScores}`
    }

    //Nödvändigt att göra såhär istället för att använda while-loop om det ska bli delay mellan att korten läggs ut,
    if (dealerScores <=17) {
        console.log('Pausing for dramatic effect...')
        setTimeout(dealerTurn, 1000) //Betyder praktiskt taget "börja om funktionen efter 1000 millisekunder"
    }
}