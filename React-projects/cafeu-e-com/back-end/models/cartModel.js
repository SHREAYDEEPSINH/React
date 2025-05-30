// const mongoose = require("mongoose");

// const cartSchema = mongoose.Schema({
//     cartId : {
//         type : mongoose.Schema.Types.ObjectId,
//         required : true,
//         ref : "User"
//     },
//     cartName : {
//         type : String,
//         required : true
//     }
// })

// const CartModel = mongoose.model("Cart" , cartSchema);

// module.exports = CartModel;


const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

const CartModel = mongoose.model("Cart", cartSchema);

module.exports = CartModel;
