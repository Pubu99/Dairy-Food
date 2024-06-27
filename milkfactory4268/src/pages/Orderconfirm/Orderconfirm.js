import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Orderconfirm.css';

const OrderConfirm = () => {
  const navigate = useNavigate();

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  },[navigate]);

  const onOrderConfirm_Button1ButtonClick = useCallback(() => {
    navigate("/UserProductDetails");
  },[navigate]);

  const onOrderConfirm_Button2ButtonClick = useCallback(() => {
    navigate("/");
  },[navigate]);

    return (
    <>
        <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
            <div className="Backgroundcreateacc">
            <div className="CreateHeading"/>
            <div class="Confitmtopic">Order Confirmed ...!!!</div>
            <div className="confirmBody">Thank You ...!!!</div>
            <div className="confirmBody2">You will recieved your order soon...</div>
            <div>
                <button className="OrderConfirm_Button1" onClick={onOrderConfirm_Button1ButtonClick}>Back to Product Details</button>
                <button className="OrderConfirm_Button2" onClick={onOrderConfirm_Button2ButtonClick}>Back to Login Page</button>
            </div>
        </div>
    </>
    );
}

export default OrderConfirm;