const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect("mongodb+srv://shreaydeepsinhvaghela:gjBit1DJ3OMPHB63@cluster0.61i5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("db connected")
}

module.exports = connection