const mongoose = require('mongoose');
const Order = require('../model/orders');

// Add new order
const addOrder = async (req, res) => {
  try {
    const { fullname, MobileNO, Address, productname, NOofproduct, Date, productsize } = req.body;
    const order = new Order({ fullname, MobileNO, Address, productname, NOofproduct, Date, productsize });
    await order.save();
    res.status(201).json({ message: 'Order added successfully', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {addOrder,getOrders};
