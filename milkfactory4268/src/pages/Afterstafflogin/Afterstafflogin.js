import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Afterstafflogin.css';

const Afterloginstaff = () => {
  const navigate = useNavigate();

  const onStaffDetailButton1ButtonClick = useCallback(() => {
    navigate("/StaffDetails");
  },[navigate]);

  const onProductDetailButton1ButtonClick = useCallback(() => {
    navigate("/ProductDetails");
  },[navigate]);

  const onBackToLoginButton1ButtonClick = useCallback(() => {
    navigate("/");
  },[navigate]);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  },[navigate]);
  
    return (
    <>
        <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
        <div className="BackgroundAfterLoginStaff">
            <form action=""> 
                <div class="loginUser"> 
                    <button className="StaffDetailButton1" onClick={onStaffDetailButton1ButtonClick}>Staff Details</button>
                    <button className="ProductDetailButton1" onClick={onProductDetailButton1ButtonClick}>Product Details</button>
                    <button className="BackToLoginButton1" onClick={onBackToLoginButton1ButtonClick}>Back to Login</button>
                </div>
                    
              </form>
        </div> 
    </>
    );
}

export default Afterloginstaff;