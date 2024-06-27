const Product = require('../model/products');

// Controller function to add a new product
const addProduct = async (req, res, next) => {
  try {
    const { Product_Name, Product_Price, Product_Size, No_of_Products } = req.body;

    const newProduct = new Product({
      Product_Name,
      Product_Price,
      Product_Size,
      No_of_Products
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

// Controller function to get all products
const getAllProducts = async (req, res, next) => {
  try {
    const productsList = await Product.find();
    res.status(200).json(productsList);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



module.exports = { addProduct, getAllProducts, deleteProduct };
