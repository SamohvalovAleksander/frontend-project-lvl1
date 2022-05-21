import readlineSync from 'readline-sync';

export function game() {
    let chislo1 = random(2, 55)
    let chislo2 = random(2, 55)
    let chislo3 = random(2, 55)
    console.log("Welcome to the Brain Games!")
    const Name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + Name + "!");
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    console.log(`Question: ${chislo1}`)
    const Otvet = readlineSync.question("Your answer: ")
    if (prosto(chislo1) == Otvet) {
        console.log("Correct!")
    } else {
        return console.log('Answer "yes" if given number is prime. Otherwise answer "no".'),
            console.log("Let's try again, " + Name + "!")
    }
    console.log(`Question: ${chislo2}`)
    const Otvet2 = readlineSync.question("Your answer: ")
    if (prosto(chislo2) == Otvet2) {
        console.log("Correct!")
    } else {
        return console.log('Answer "yes" if given number is prime. Otherwise answer "no".'),
            console.log("Let's try again, " + Name + "!")
    }
    console.log(`Question: ${chislo3}`)
    const Otvet3 = readlineSync.question("Your answer: ")
    if (prosto(chislo3) == Otvet3) {
        console.log("Correct!")
    } else {
        return console.log('Answer "yes" if given number is prime. Otherwise answer "no".'),
            console.log("Let's try again, " + Name + "!")
    }
    return console.log("Congratulations, " + Name + "!")

}

function prosto(n) {
    for (let i = 2; i < n; i++) {

        if (n % i == 0)
            return "no"
    }
    return "yes"
}

function random(a, b) {
    return Math.floor(Math.random() * (a - b) + b)
}