# Gruppövning: Skapa ett Blackjack-spel

**Regler för blackjack:**
Regler för Black Jack

	1.	Mål: Målet i Black Jack är att få en hand med ett totalt värde så nära 21 som möjligt utan att överskrida detta värde.
	2.	Kortens värde:
	•	Numrerade kort (2–10) har sitt nominella värde.
	•	Klädda kort (kung, dam, knekt) är värda 10.
	•	Ess kan vara antingen 1 eller 11, beroende på vad som är bäst för handen.
	3.	Spelet börjar: Varje spelare och dealern får två kort. Spelaren ser båda sina kort, medan dealern har ett öppet kort och ett dolt kort.
	4.	Spelarens val:
	•	Hit: Ta ytterligare ett kort.
	•	Stand: Stanna med de kort du har.
	•	Double down: Spelaren kan välja att dubbla sin insats och få ett sista kort.
	•	Split: Om de två första korten har samma värde, kan spelaren dela upp dem i två händer.
	5.	Dealer: Dealern måste dra kort tills den har minst 17 poäng. Om dealern överskrider 21 förlorar dealern.
	6.	Vinnare: Den hand som kommer närmast 21 utan att överstiga vinner. Om spelaren och dealern har samma poäng blir det “push” och insatsen återbetalas.

**Mål:**
Skapa ett enkelt Blackjack-spel där spelaren möter datorn.

**Material:**
En mapp med bilder för alla 52 kort + baksidan av korten ligger inne i assets.

## Instruktioner

**Förstå spelet:**
Gå igenom reglerna för Blackjack. Hur många poäng behöver man för att vinna? Vad är "bust"? Hur fungerar dealerns drag?

**Planera strukturen:**
Diskutera med gruppen vilka funktioner som behövs. Till exempel:
En funktion för att dra ett kort.
En funktion för att räkna poäng.
En funktion för att visa korten på skärmen.

**Starta med grunderna:**
Skapa en funktion som drar ett kort från kortleken (tips: använd en array för kortleken).
Implementera en funktion för att beräkna poängen för en hand.

**Utveckla spelet:**
Lägg till en spel-loop där spelaren kan välja att dra ett nytt kort eller stanna.
Programmera datorns drag enligt Blackjack-reglerna.
Det innebär inte att hela spelet ska ligga i en loop, utan mer att ni ska ha ett spel som går från början till slut och
efter det kunna spela igen. Det är då loopen blir sluten och kan fortsätta spelas till spelaren inte längre vill spela.

**Använd DOM-manipulation:**
Visa korten och poängen på skärmen med hjälp av DOM-manipulation.

**Testa och förbättra:**
Testa spelet och se till att alla regler följs.
Diskutera med gruppen hur spelet kan förbättras eller göras mer användarvänligt.

**Tips:**

Kom ihåg också att försöka bryta ner projektet i så små hanterbara delar som möjligt. det är bättre att få en liten
liten sak att funka i taget istället för att allt ska funka direkt.
T ex få ett kort att synas på skärmen, kunna klicka på en knapp för att visa ett kort, klicka på en knapp för att dra
ett till kort osv. Ett steg i taget!

Kom också ihåg att skriva tydlig kod! nu jobbar ni i grupper. se till att ni alla kan förstå koden och att alla hänger
med!