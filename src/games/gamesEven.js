import readlineSync from 'readline-sync';

export function rezult() {
    console.log("Welcome to the Brain Games!")
    const Name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + Name + "!");

    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let chislo = random()
    let chislo2 = random()
    let chislo3 = random()
    console.log("Question: " + chislo)
    const Otvet = readlineSync.question('Your answer: ');
    if (Otvet != "yes" && Otvet != "no") {
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'."),
            console.log("Let's try again, " + Name + "!");
    }
    if ((chislo % 2 == 0 && Otvet == "yes") || (chislo % 2 == 1 && Otvet == "no")) {
        console.log("Correсt")
    } else {
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'."),
            console.log("Let's try again, " + Name + "!")

    }

    console.log("Question: " + chislo2)
    const Otvet2 = readlineSync.question('Your answer: ');

    if (Otvet2 != "yes" && Otvet2 != "no") {
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'."),
            console.log("Let's try again, " + Name + "!")
    }
    if ((chislo2 % 2 == 0 && Otvet2 == "yes") || (chislo2 % 2 == 1 && Otvet2 == "no")) {
        console.log("Correсt")
    } else {
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'."),
            console.log("Let's try again, " + Name + "!")

    }
    console.log("Question: " + chislo3)
    const Otvet3 = readlineSync.question('Your answer: ');

    if (Otvet3 != "yes" && Otvet3 != "no") {
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'."),
            console.log("Let's try again, " + Name + "!")
    }
    if ((chislo3 % 2 == 0 && Otvet3 == "yes") || (chislo3 % 2 == 1 && Otvet3 == "no")) {
        console.log("Correсt")
    } else {
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'."),
            console.log("Let's try again, " + Name + "!")

    }

    return console.log("Congratulations, " + Name + "!")
}


function random() {
    const min = 1
    const max = 20
    return Math.floor(Math.random() * (max - min) + min)
}