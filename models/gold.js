const mongoose = require("mongoose")
const Schema = mongoose.Schema

const goldSchema = new Schema({
    tenKarat: {
        type: String,
        required: true
    },
    fourteenKarat: {
        type: String,
        required: true
    },
    eighteenKarat: {
        type: String,
        required: true
    },
    twentyOneKarat: {
        type: String,
        required: true
    },
    twentyFourKarat: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Gold", goldSchema)