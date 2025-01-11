import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    year: Number,
    price: Number,
})

const Game = mongoose.model('Game', gameSchema)

export default Game