const mongoose = require("mongoose")

const playSchema = new mongoose.Schema ({
    name:String,
    age:Number,
    country:String
})

const playModel = mongoose.model('Players', playSchema)

async function setupTestData(){
    await playModel.deleteMany({})

    await playModel.create({
        name:'Victor Osimhen',
        age:'25',
        country:'Nigeria'
    })
    await playModel.create({
        name:'Ndidi',
        age:'23',
        country:'Nigeria'
    })
    await playModel.create({
        name:'Harry kane',
        age:'29',
        country:'England'
    })
}

module.exports = {playModel, setupTestData}