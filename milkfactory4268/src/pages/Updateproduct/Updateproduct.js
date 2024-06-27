import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Updateproduct.css';

const Updateproduct = () => {
  const [Product_Name, setProduct_Name] = useState("");
  const [Product_Price, setProduct_Price] = useState("");
  const [Product_Size, setProduct_Size] = useState("");
  const [No_of_Products, setNo_of_Products] = useState("");
  const navigate = useNavigate();

  const productId = new URLSearchParams(window.location.search).get("productId");

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get(`http://localhost:3002/api/v1/products/${productId}`);
        const productData = response.data;

        setProduct_Name(productData.Product_Name);
        setProduct_Price(productData.Product_Price);
        setProduct_Size(productData.Product_Size);
        setNo_of_Products(productData.No_of_Products);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductData();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Product_Name") {
      setProduct_Name(value);
    } else if (name === "Product_Price") {
      setProduct_Price(value);
    } else if (name === "Product_Size") {
      setProduct_Size(value);
    } else if (name === "No_of_Products") {
      setNo_of_Products(value);
    }
  };

  const onBackLogPButton1ButtonClick = () => {
    // Handle the save action here
    const UpdatedProduct = {
      Product_Name,
      Product_Price,
      Product_Size,
      No_of_Products,
    };

    // Make a PUT request to update the product
    axios.put(`http://localhost:3002/api/v1/products/${productId}`, UpdatedProduct)
      .then((response) => {
        console.log('Product updated:', response.data);
        navigate('/Productdetails');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onBtncontactButtonClick = () => {
    navigate("/Contact");
  };

  return (
    <>
      <div className="ribbon">
        <button className="Btncontact" onClick={onBtncontactButtonClick}>
          Contact Us
        </button>
      </div>
      <div className="Backgroundpw">
        <div className="topic">Update Product</div>
        <div className="createAccbox">
          <div className="PDetails">
            <form>
              <div className="inputArea">
                Product Name:
                <input
                  type="text"
                  name="Product_Name"
                  placeholder="Enter Product Name"
                  value={Product_Name}
                  onChange={handleInputChange}
                />
                <i className="user"></i>
              </div>
              <div className="inputArea">
                Product Price:
                <input
                  type="text"
                  name="Product_Price"
                  placeholder="Enter Product Price"
                  value={Product_Price}
                  onChange={handleInputChange}
                />
                <i className="user"></i>
              </div>
              <div className="inputArea">
                Product Size:
                <input
                  type="text"
                  name="Product_Size"
                  placeholder="Enter Product Size"
                  value={Product_Size}
                  onChange={handleInputChange}
                />
                <i className="user"></i>
              </div>
              <div className="inputArea">
                No. of Products:
                <input
                  type="number"
                  name="No_of_Products"
                  placeholder="Enter the Amount of Available Products"
                  value={No_of_Products}
                  onChange={handleInputChange}
                />
                <i className="user"></i>
              </div>
              <div>
                <button className="BackLogPButton1" onClick={onBackLogPButton1ButtonClick}>
                  SAVE
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Updateproduct;
