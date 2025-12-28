const mongoose = require('mongoose')


const songSchema = mongoose.Schema({
    title:String,
    artist:String,
    audio:String
})

const song = mongoose.model('song',songSchema)

module.exports = song