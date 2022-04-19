import readlineSync from 'readline-sync';

export function kalkulator() {
    let chislo = random()
    let chislo2 = random()
    let chislo3 = random()
    let chislo4 = random()
    let chislo5 = random()
    let chislo6 = random()
    const arr = ["+", "-", "*"]
    let Result = 0
    let Result2 = 0
    let Result3 = 0
    let Znak = getRandomArrayElement(arr)
    let Znak2 = getRandomArrayElement(arr)
    let Znak3 = getRandomArrayElement(arr)
    console.log("Welcome to the Brain Games!")
    const Name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + Name + "!");
    console.log("What is the result of the expression?")
    console.log(`Question: ${chislo} ${Znak} ${chislo2}`)
    const Otvet = readlineSync.question("Your answer: ")
    if (Znak == "*") {
        Result = chislo * chislo2
    }
    if (Znak == "+") {
        Result = chislo + chislo2
    }
    if (Znak == "-") {
        Result = chislo - chislo2
    }

    if (Otvet == Result) {
        console.log("Correct!")
    } else {
        return console.log(`${Otvet} is wrong answer ;(. Correct answer was ${Result}.`),
            console.log("Let's try again, " + Name + "!")
    }
    console.log(`Question: ${chislo3} ${Znak2} ${chislo4}`)
    const Otvet2 = readlineSync.question("Your answer: ")
    if (Znak2 == "*") {
        Result2 = chislo3 * chislo4
    }
    if (Znak2 == "+") {
        Result2 = chislo3 + chislo4
    }
    if (Znak2 == "-") {
        Result2 = chislo3 - chislo4
    }

    if (Otvet2 == Result2) {
        console.log("Correct!")
    } else {
        return console.log(`${Otvet2} is wrong answer ;(. Correct answer was ${Result2}.`),
            console.log("Let's try again, " + Name + "!")
    }
    console.log(`Question: ${chislo5} ${Znak3} ${chislo6}`)
    const Otvet3 = readlineSync.question("Your answer: ")
    if (Znak3 == "*") {
        Result3 = chislo5 * chislo6
    }
    if (Znak3 == "+") {
        Result3 = chislo5 + chislo6
    }
    if (Znak3 == "-") {
        Result3 = chislo5 - chislo6
    }

    if (Otvet3 == Result3) {
        console.log("Correct")
    } else {
        return console.log(`${Otvet3} is wrong answer ;(. Correct answer was ${Result3}.`),
            console.log("Let's try again, " + Name + "!")
    }
    return console.log("Congratulations, " + Name + "!")
}

function random() {
    const min = 1
    const max = 20
    return Math.floor(Math.random() * (max - min) + min)
}


const arr = ["+", "-", "*"]

function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}