import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Productdetails.css';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/products");
        console.log(response.data); // Log the response data
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/products/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };
  

  const onAddProduct2ButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAddProduct3ButtonClick = useCallback(() => {
    navigate("/OrderDetails");
  }, [navigate]);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  }, [navigate]);

  const onAddProduct1ButtonClick = useCallback(() => {
    navigate("/Addproduct");
  }, [navigate]);

  return (
    <>
      <div className="ribbon">
        <button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button>
      </div>
      <div className="BackgroundProductDetails">
        <div className="PDetailtopic">Product Details</div>
        <div className="AddDeleteProductBox">
          <div className="AddProduct">
            <button className="AddProduct110" onClick={onAddProduct1ButtonClick}>ADD</button>
          </div>
        </div>

        <div className="GoToOrdersButton">
          <button className="AddProduct2" onClick={onAddProduct2ButtonClick}>Go to Login</button>
          <button className="AddProduct3" onClick={onAddProduct3ButtonClick}>Go to Orders</button>
        </div>

        <div className="Class_pro">
          <table className="product-table">
            <thead>
              <tr className="Text2w">
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Size</th>
                <th>No of Products</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="Text3c" key={product._id}>
                  <td>{product.Product_Name}</td>
                  <td>{product.Product_Price}</td>
                  <td>{product.Product_Size}</td>
                  <td>{product.No_of_Products}</td>
                  <td>
                    <button className="BtnE" onClick={() => navigate(`/EditProducts?productId=${product._id}`)}></button>
                  </td>
                  <td>
                    <button className="BtnD" onClick={() => onDeleteProduct(product._id)}></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
