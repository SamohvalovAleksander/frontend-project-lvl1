import readlineSync from 'readline-sync';

export function privetsvie() {
    const Name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + Name + "!");

}