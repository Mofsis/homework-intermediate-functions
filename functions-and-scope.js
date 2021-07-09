// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

//stp 1. zorgen dat alle data gechecked word, ongeacht het aantal studenten
//stap 2. alle cijfers gelijk of groter dan 8 onthouden
//stap 3. Het aantal onthouden cijfers bij elkaar optellen en weergeven

//Oplossing met object methoden
function countCumLaude(grades) {
    let cumLaude = [];
    for (let i = 0; i < grades.length; i++) {
        if(grades[i] >= 8) {
            cumLaude.push(grades[i]);
        }
    }
    return cumLaude.length;
}
console.log(countCumLaude(grades));

//Oplossing zonder object methoden
function countCumLaudeTwo(grades) {
    let cumLaude = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            cumLaude ++;
        }
    }
    return cumLaude.length;
}
console.log(countCumLaude(grades));
// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

const gradesClassTwo = [6, 4, 5];
const gradesClassThree = [8, 9, 4, 6, 10];

//Oplossing met object methoden
//Welke klas wil je bekijken?
//Voor klas 1 vervang de [] met 1
//Voor klas 2 vervang de [] met 2
//Voor klas 3 vervang de [] met 3
numberOfClass = [];

if(numberOfClass === 1) {
    function countCumLaude(grades) {
        let cumLaude = [];
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] >= 8) {
                cumLaude.push(grades[i]);
            }
        }
        return cumLaude.length;
    }

    console.log(countCumLaude(grades));
}
if(numberOfClass === 2) {
    function countCumLaude(gradesClassTwo) {
        let cumLaude = [];
        for (let i = 0; i < gradesClassTwo.length; i++) {
            if (gradesClassTwo[i] >= 8) {
                cumLaude.push(gradesClassTwo[i]);
            }
        }
        return cumLaude.length;
    }

    console.log(countCumLaude(gradesClassTwo));
}
if(numberOfClass === 3) {
    function countCumLaude(gradesClassThree) {
        let cumLaude = [];
        for (let i = 0; i < gradesClassThree.length; i++) {
            if (gradesClassThree[i] >= 8) {
                cumLaude.push(gradesClassThree[i]);
            }
        }
        return cumLaude.length;
    }

    console.log(countCumLaude(gradesClassThree));
}

//Oplossing zonder object methoden
//Welke klas wil je bekijken?
//Voor klas 1 vervang de [] met 1
//Voor klas 2 vervang de [] met 2
//Voor klas 3 vervang de [] met 3
numberOfClass = [];

if(numberOfClass === 1) {
    function countCumLaudeTwo(grades) {
        let cumLaude = 0;
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] >= 8) {
                cumLaude++;
            }
        }
        return cumLaude.length;
    }

    console.log(countCumLaude(grades));
}
if(numberOfClass === 2) {
    function countCumLaudeTwo(gradesClassTwo) {
        let cumLaude = 0;
        for (let i = 0; i < gradesClassTwo.length; i++) {
            if (gradesClassTwo[i] >= 8) {
                cumLaude++;
            }
        }
        return cumLaude.length;
    }

    console.log(countCumLaude(gradesClassTwo));
}
if(numberOfClass === 3) {
    function countCumLaudeTwo(gradesClassThree) {
        let cumLaude = 0;
        for (let i = 0; i < gradesClassThree.length; i++) {
            if (gradesClassThree[i] >= 8) {
                cumLaude++;
            }
        }
        return cumLaude.length;
    }

    console.log(countCumLaude(gradesClassThree));
}
// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

//stap 1. De som uitrekenen van alle cijfers.
//stap 2. De som delen door het aantal cijfers.

//Oplossing met object methoden
gradesAvg = function(grades) {
    return grades.reduce(function(a,b) {
        return a + b;
    }, 0) / grades.length;
}
console.log(gradesAvg(grades));

//Oplossing zonder object methoden
let sum = 0;
let avg = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    avg = sum / grades.length
}
console.log(avg);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

//Oplossing met object methoden
//Welke klas wil je bekijken?
//Voor klas 1 vervang de [] met 1
//Voor klas 2 vervang de [] met 2
//Voor klas 3 vervang de [] met 3

numberOfClass = [];

if(numberOfClass === 1) {
    gradesAvg = function (grades) {
        return grades.reduce(function (a, b) {
            return a + b;
        }, 0) / grades.length;
    }
    console.log(gradesAvg(grades));
}
if(numberOfClass === 2) {
    gradesAvg = function (gradesClassTwo) {
        return gradesClassTwo.reduce(function (a, b) {
            return a + b;
        }, 0) / gradesClassTwo.length;
    }
    console.log(gradesAvg(gradesClassTwo));
}
if(numberOfClass === 3) {
    gradesAvg = function (gradesClassThree) {
        return gradesClassThree.reduce(function (a, b) {
            return a + b;
        }, 0) / gradesClassThree.length;
    }
    console.log(gradesAvg(gradesClassThree));
}

//Oplossing met object methoden
//Welke klas wil je bekijken?
//Voor klas 1 vervang de [] met 1
//Voor klas 2 vervang de [] met 2
//Voor klas 3 vervang de [] met 3
numberOfClass = [];

//de variabelen sum en avg leeggooien om te kunnen hergebruiken
sum = 0;
avg = 0;

if(numberOfClass === 1) {
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
        avg = sum / grades.length
    }
    console.log(avg);
}
if(numberOfClass === 2) {
    for (let i = 0; i < gradesClassTwo.length; i++) {
        sum += gradesClassTwo[i];
        avg = sum / gradesClassTwo.length
    }
    console.log(avg);
}
if(numberOfClass === 3) {
    for (let i = 0; i < gradesClassThree.length; i++) {
        sum += gradesClassThree[i];
        avg = sum / gradesClassThree.length
    }
    console.log(avg);
}
// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log(Math.round((gradesAvg(grades) + Number.EPSILON) * 100) / 100)

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.


let biggest = 0;
for (let i = 0; i <= biggest; i++) {
    if (grades[i] > biggest) {
        biggest = grades[i];
    }
}
console.log(biggest);


// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

//Welke klas wil je bekijken?
//Voor klas 1 vervang de [] met 1
//Voor klas 2 vervang de [] met 2
//Voor klas 3 vervang de [] met 3

numberOfClass = [];

if(numberOfClass === 1) {
    let biggest = 0;
    for (let i = 0; i <= biggest; i++) {
        if (grades[i] > biggest) {
            biggest = grades[i];
        }
    }
    console.log(biggest);
}
if(numberOfClass === 2) {
    let biggest = 0;
    for (let i = 0; i <= biggest; i++) {
        if (gradesClassTwo[i] > biggest) {
            biggest = gradesClassTwo[i];
        }
    }
    console.log(biggest);
}
if(numberOfClass === 3) {
    let biggest = 0;
    for (let i = 0; i <= biggest; i++) {
        if (gradesClassThree[i] > biggest) {
            biggest = gradesClassThree[i];
        }
    }
    console.log(biggest);
}

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
