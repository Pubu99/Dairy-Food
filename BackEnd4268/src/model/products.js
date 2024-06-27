const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productsSchema = new Schema({
    Product_Name: {
        type: String,
        required: true
    },
    Product_Price:{
        type: Number,
        required: true
    },
    Product_Size:{
        type: Number,
        required: true
    },
    No_of_Products:{
        type: Number,
        required: true
    }
})

const products = mongoose.model('Products',productsSchema);

module.exports = products;