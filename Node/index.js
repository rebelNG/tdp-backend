const colors = require('colors')
const prompt = require('prompt-sync')()


// console.log('Hello, Emmanuel'.rainbow);
// console.log('Hello, Emmanuel'.bgYellow);
// console.log('Hello, Emmanuel'.black.bgRed);

// for (let i = 1; i <=100; i++){
//     console.log((`${i}`).random);
// }

// for (let a = 1; a <= 100; a++) {
//     if (a%3 === 0) {
//         console.log('Fizz'.red);
//     } else if (a%5 === 0) {
//         console.log('Buzz'.green);
//     } else if (a%7 === 0) {
//         console.log('Zing'.blue);
//     } else if ((a%7 && a%3 && a%5)!==0) {
//         console.log('fizzbuzzzing'.rainbow);
//     }
//     else {
//         console.log(a);
//     }
// }

// console.log('---ROCK, PAPER, SCISSORS---');
// const options = ["Rock".red, "Paper".green, "Scissors".blue]

// function computersTurn(){

//     return Math.floor(Math.random() * options.length) // picks a number between 0,1,2

// }

//     function playersTurn(){

//         const input = prompt("RPS? ")

//         switch (input.toLowerCase()){

//             case "rock":
//             case "r":
//                 return 0

//             case "paper":
//             case "p":
//                 return 1

//             case "scissors":
//             case "s":
//                 return 2                                                                                                                           

//             default:

//                 return playersTurn()

//             }

//     }


//     while (true){

//         let playerChoice = playersTurn()
//         let computerChoice = computersTurn()

//         if (playerChoice == computerChoice){

//             console.log(`Draw! Both player choose ${options[playerChoice]}`)

//         }else if ((playerChoice + 1)%3 == computerChoice){ // one use of modulus is to "wrap" maths. choice 2 + 1 becomes choice 0. 3%3 = 0
                                                                                                                                                                                                    
//             console.log(`Computer Won! ${options[computerChoice]} beats ${options[playerC]}`)
//         }
//     }
