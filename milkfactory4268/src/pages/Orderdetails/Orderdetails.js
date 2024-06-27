import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Orderdetails.css';

const OrderDetails = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/orders/all');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  },[navigate]);

  const onOrder_Update_Back1ButtonClick = useCallback(() => {
    navigate("/OrderDetails");
  },[navigate]);

  const onOrder_Update_Back2ButtonClick = useCallback(() => {
    navigate("/ProductDetails");
  },[navigate]);
  
  return (
    <>
      <div className="ribbon">
        <button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button>
      </div>
      <div className="BackgroundAfterLoginStaff">
        <div className="PDetailtopic">Order Details</div>
        <div className="orderbackground">
        <table className="OrderTable">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Product Name</th>
              <th>Number of Products</th>
              <th>Date</th>
              <th>Product Size</th>
              
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.fullname}</td>
                <td>{order.MobileNO}</td>
                <td>{order.Address}</td>
                <td>{order.productname}</td>
                <td>{order.NOofproduct}</td>
                <td>{order.Date}</td>
                <td>{order.productsize}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="OrderButtons">
          <button className="Order_Update_Back1" onClick={onOrder_Update_Back1ButtonClick}>Update</button>
          <button className="Order_Update_Back2" onClick={onOrder_Update_Back2ButtonClick}>Back</button>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
