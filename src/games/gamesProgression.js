import readlineSync from 'readline-sync';
let number = random(1, 5)
let number2 = random(1, 5)
let number3 = random(1, 5)


function random(a, b) {
    return Math.floor(Math.random() * (a - b) + b)
}

export function game() {

    let Massive1 = get_progressive(random(5, 11))
    let Massive2 = get_progressive2(random(5, 10))
    let Massive3 = get_progressive3(random(5, 10))
    console.log("Welcome to the Brain Games!")
    const Name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + Name + "!");
    console.log("What number is missing in the progression?")
    console.log(`Question: ${replace(get_progressive(random(5, 11)))}`)
    const Otvet = readlineSync.question("Your answer: ")
    if (Otvet == Massive1[number]) {
        console.log("Correct!")
    } else {
        return console.log(`${Otvet} is wrong answer ;(. Correct answer was ${Massive1[number]}.`),
            console.log(`Let 's try again, ${Name}!`)
    }
    console.log(`Question: ${replace2(get_progressive2(random(5, 11)))}`)
    const Otvet2 = readlineSync.question("Your answer: ")
    if (Otvet2 == Massive2[number2]) {
        console.log("Correct!")
    } else {
        return console.log(`${Otvet2} is wrong answer ;(. Correct answer was ${Massive2[number2]}.`),
            console.log(`Let 's try again, ${Name}!`)
    }
    console.log(`Question: ${replace3(get_progressive3(random(5, 11)))}`)
    const Otvet3 = readlineSync.question("Your answer: ")
    if (Otvet3 == Massive3[number3]) {
        console.log("Correct!")
    } else {
        return console.log(`${Otvet3} is wrong answer ;(. Correct answer was ${Massive3[number3]}.`),
            console.log(`Let 's try again, ${Name}!`)


    }
    return console.log("Congratulations, " + Name + "!")
}

function get_progressive(n) {
    let plus = 2
    let nachalo = 0
    let rezult = []
    for (let i = 0; i < n; i++) {
        nachalo += plus
        rezult.push(nachalo)
    }
    return rezult
}

function get_progressive2(n) {
    let plus = 3
    let nachalo = 0
    let rezult = []
    for (let i = 0; i < n; i++) {
        nachalo += plus
        rezult.push(nachalo)
    }
    return rezult
}

function get_progressive3(n) {
    let plus = 4
    let nachalo = 0
    let rezult = []
    for (let i = 0; i < n; i++) {
        nachalo += plus
        rezult.push(nachalo)
    }
    return rezult
}



function replace(array) {

    array.splice(number, 1, "..")
    return array
}

function replace2(array) {

    array.splice(number2, 1, "..")
    return array
}

function replace3(array) {

    array.splice(number3, 1, "..")
    return array
}