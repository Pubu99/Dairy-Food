import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const onBtnwelcome1ButtonClick = useCallback(() => {
    navigate("/");
  },[navigate]);

  const onBtnwelcome2ButtonClick = useCallback(() => {
    navigate("/OrderDetails");
  },[navigate]);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  },[navigate]);
    return (
    <>
        <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
        <div className="Backgroundwelcome">
            <form action="">
                <div class="Welcometopic">Account Create Successfully ....</div>
                <div class="WelcomeHeading">Welcome</div>
            </form>
            <div>
                  <x1 class="WelcomeLog">
                    <button className="Btnwelcome1" onClick={onBtnwelcome1ButtonClick}>Back to Login Page</button>
                    <button className="Btnwelcome2" onClick={onBtnwelcome2ButtonClick}>Order Details</button>
                  </x1>
            </div>
        </div> 
    </>
    );
}

export default Welcome;