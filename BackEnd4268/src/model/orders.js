const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    fullname: {
        type: String, // Corrected from Schema.Types.ObjectId
        required: true
    },
    MobileNO:{
        type: Number,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    productname: {
        type: String, // Corrected from Schema.Types.ObjectId
        required: true
    },
    NOofproduct:{
        type: Number,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    productsize:{
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', OrdersSchema); // Changed to 'Order' for consistency

module.exports = Order;
