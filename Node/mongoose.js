const mongoose = require("mongoose")
const prompt = require('prompt-sync')()
const {carModel, setupTestData} = require('./Models/car.js')
const playModel = require('./Models/player.js')



mongoose.connect("mongodb://127.0.0.1:27017/tdp").then(() => {
    console.log('Connected')


    playModel.create({
        name:'Victor Osimhen',
        age:'25',
        country:'Nigeria'
    }).then(player => console.log(player))

    carModel.create({
        reg: 'regis',
        name:'jon',
        color:'Pink'
    }).then(car => console.log(car))

    

    

    // carModel.create({
    //     reg:'jke 123 cad',
    //     age:2,
    //     make:'GLK',
    //     model:'GLK 2023',
    //     color:'CHARCOAL BLACK'
    // }).then(()=> {

    //     carModel.find({}).then(res => {
    //         for(let car of res){
    //             console.log(car);
    //         }

            
    //     })

    // })

    // createPlayers().then(() => {
    //     playerModel.find({}).then(fes => {
    //         for(let player of fes){
    //             console.log(player);
    //         }

    //         mongoose.disconnect()
    //     })
    // })

}).catch(err => {
    console.log('There was an error')
    console.log(err)
})

// const carSchema = new mongoose.Schema({
//     reg:String,
//     age:Number,
//     make:String,
//     model:String,
//     color:String
// })

// const carModel = mongoose.model("Cars", carSchema)

// const playerSchema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     club:String,
//     nationality:String
// })

// const playerModel = mongoose.model('Footballers', playerSchema)

// function createPlayers() {

//     return new Promise((resolve, reg) => {
//         const name = prompt('Enter name: ')
//         const age = parseInt(prompt('Enter age: '))
//         const club = prompt('Enter club: ')
//         const nationality = prompt('Enter nationality: ')

//         playerModel.create({name, age, club, nationality}).then( res => {
//             console.log(res);
//             resolve()

//     })

//     })
    

// }

mongoose.connect("mongodb://127.0.0.1:27017/tdp").then(async() =>{
    console.log('Connected again');
    await setupTestData()

    const play = await playModel.find({})

    console.log(`We have ${play.lenght} Players`)
    for (let p of players){
        console.log(p);
    }
})

function menu() {
    switch (prompt('What are we doing today? ')) {
        case 'read':
            readFunction()
            break;
        case 'quit':
            mongoose.disconnect()
            break;
    
        default:
            menu();
    }
}