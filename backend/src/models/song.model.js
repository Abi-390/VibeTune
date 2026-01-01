const mongoose = require('mongoose')


const songSchema = mongoose.Schema({
    title:String,
    artist:String,
    audio:String,
    mood:String
})

const songModel = mongoose.model('song',songSchema)

module.exports = songModel