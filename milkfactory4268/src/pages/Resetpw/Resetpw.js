import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Resetpw.css';

const Resetpw = () => {
  const navigate = useNavigate();

  const onresetBtn1ButtonClick = useCallback(() => {
    navigate("/");
  },[navigate]);

  const onresetBtn2ButtonClick = useCallback(() => {
    navigate("/");
  },[navigate]);
  
  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  },[navigate]);

    return (
        <>
        <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
        <div className="Backgroundpw">
            <div class="topic">Reset Password</div>
            <div class="loginUser"> 
            <form action=""> 
                <div class="UserName">User Name:
                  <div class="inputArea">
                    <input type="text" placeholder="Enter your User Name"/>
                    <i class="user"></i>
                  </div>
                </div>
                <div class="newpw">New Password:
                  <div class="inputArea">
                    <input type="password" placeholder="Enter a New Password"/>
                    <i class="user"></i>
                  </div>
                </div>
                <div class="confirm">Confirm Password:
                  <div class="inputArea">
                    <input type="password" placeholder="Confirm Your New Password"/>
                    <i class="user"></i>
                  </div>
                </div>
                <div><button className="resetBtn2" onClick={onresetBtn1ButtonClick}>Reset Password Now !</button></div>
                <div><button className="resetBtn1" onClick={onresetBtn2ButtonClick}>Back To Login Page</button></div>
              </form>
            </div>
            
        </div>
        </>
    );
}

export default Resetpw;