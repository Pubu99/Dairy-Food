import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Addproduct.css';

const Addproduct = () => {
  const [Product_Name, setProduct_Name] = useState('');
  const [Product_Price, setProduct_Price] = useState('');
  const [Product_Size, setProduct_Size] = useState('');
  const [No_of_Products, setNo_of_Products] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/v1/products", {
        Product_Name: Product_Name,
        Product_Price: Product_Price,
        Product_Size: Product_Size,
        No_of_Products: No_of_Products,
      });
      console.log(response.data);
      navigate("/ProductDetails");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="ribbon"></div>
      <div className="Backgroundpw">
        <div className="topic">Add Product</div>
        <div className="createAccbox">
          <div className="PDetails">
            <form onSubmit={handleSubmit}>
              <span className="Text_reg">Product Name</span>
              <input
                className="Box1_p"
                value={Product_Name}
                onChange={(e) => setProduct_Name(e.target.value)}
                type="text"
                placeholder="Enter Product Name"
                id="Product_Name"
                name="Product_Name"
              />
              <span className="Text_reg">Product Price</span>
              <input
                className="Box2_p"
                value={Product_Price}
                onChange={(e) => setProduct_Price(e.target.value)}
                type="text"
                placeholder="Price"
                id="Product_Price"
                name="Product_Price"
              />
              <span className="Text_reg">Product Size</span>
              <input
                className="Box3_p"
                value={Product_Size}
                onChange={(e) => setProduct_Size(e.target.value)}
                type="text"
                placeholder="Size"
                id="Product_Size"
                name="Product_Size"
              />
              <span className="Text_reg">Number of Products</span>
              <input
                className="Box4"
                value={No_of_Products}
                onChange={(e) => setNo_of_Products(e.target.value)}
                type="text"
                placeholder="Number of Products"
                id="No_of_Products"
                name="No_of_Products"
              />
              <button className="SignupStaffBtn1" type="submit">Save</button>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
