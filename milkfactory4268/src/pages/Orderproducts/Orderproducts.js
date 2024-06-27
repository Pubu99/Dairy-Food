import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Orderproducts.css';

const OrderProducts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    MobileNO: "",
    Address: "",
    productname: "",
    NOofproduct: "",
    Date: "",
    productsize: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/orders/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      // Redirect or show success message
      navigate("/OrderConfirm");
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  }, [navigate]);

  const onOrderBox_Button1ButtonClick = useCallback(() => {
    navigate("/UserProductDetails");
  }, [navigate]);

  return (
    <>
      <div className="ribbon">
        <button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button>
      </div>
      <div className="Backgroundwelcome" />
      <div className="CreateHeading" />
      <div className="Ctopic">Order Now ...!!!</div>
      <div className="createAccbox">
        <form onSubmit={handleSubmit}>
          <div className="inputArea">Full Name :
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Enter Your Full Name" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Mobile Number :
            <input type="text" name="MobileNO" value={formData.MobileNO} onChange={handleChange} placeholder="Enter Your Mobile Number" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Address :
            <input type="text" name="Address" value={formData.Address} onChange={handleChange} placeholder="Enter Your Address" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Product Name :
            <input type="text" name="productname" value={formData.productname} onChange={handleChange} placeholder="Enter Product Name" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Size of the Product :
            <input type="text" name="productsize" value={formData.productsize} onChange={handleChange} placeholder="Enter Product Size" />
            <i className="user"></i>
          </div>
          <div className="inputArea">No. of products :
            <input type="text" name="NOofproduct" value={formData.NOofproduct} onChange={handleChange} placeholder="Enter Number of products" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Date :
            <input type="date" name="Date" value={formData.Date} onChange={handleChange} />
            <i className="user"></i>
          </div>
          <div>
            <x2 className="OrderBox_Button">
              <button className="OrderBox_Button1" onClick={onOrderBox_Button1ButtonClick}>Back</button>
              <button className="OrderBox_Order_Button" type="submit">Order Now</button>
            </x2>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderProducts;
