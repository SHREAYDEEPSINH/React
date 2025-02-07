const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect("mongodb://localhost:27017/food-e-com-Data")
    console.log("db connected")
}

module.exports = connection