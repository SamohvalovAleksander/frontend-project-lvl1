import readlineSync from 'readline-sync';
export function Nod() {
    console.log("Welcome to the Brain Games!")
    const Name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + Name + "!");
    console.log("Find the greatest common divisor of given numbers.")
    let chislo = random()
    let chislo2 = random()
    let chislo3 = random()
    let chislo4 = random()
    let chislo5 = random()
    let chislo6 = random()

    console.log(`Question: ${chislo} ${chislo2} `)
    const Otvet = readlineSync.question("Your answer: ")
    if (NOD(chislo, chislo2) == Otvet) {
        console.log("Correсt")
    } else {
        return console.log(`${Otvet} is wrong answer ;(. Correct answer was ${NOD(chislo,chislo2)}.`)
    }
    console.log(`Question: ${chislo3} ${chislo4} `)
    const Otvet2 = readlineSync.question("Your answer: ")
    if (NOD(chislo3, chislo4) == Otvet2) {
        console.log("Correсt")
    } else {
        return console.log(`${Otvet2} is wrong answer ;(. Correct answer was ${NOD(chislo3,chislo4)}.`)
    }
    console.log(`Question: ${chislo5} ${chislo6} `)
    const Otvet3 = readlineSync.question("Your answer: ")
    if (NOD(chislo5, chislo6) == Otvet3) {
        console.log("Correct")
    } else {
        return console.log(`${Otvet3} is wrong answer ;(. Correct answer was ${NOD(chislo5,chislo6)}.`)
    }
    return console.log("Congratulations, " + Name + "!")
}

function random() {
    const min = 1
    const max = 20
    return Math.floor(Math.random() * (max - min) + min)
}

function NOD(chislo, chislo2) {
    if (chislo2 > chislo) return NOD(chislo2, chislo);
    if (!chislo2) return chislo;
    return NOD(chislo2, chislo % chislo2);
}