import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Updatestaff.css';

const Updatestaff = () => {
  const navigate = useNavigate();

  const onSignupStaffBtn1ButtonClick = useCallback(() => {
    navigate("/StaffDetails");
  },[navigate]);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  },[navigate]);
  
    return (
    <>
        <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
            <div className="Backgroundcreateacc"/>
            <div className="CreateHeading"/>
            <div class="Ctopic">Update Staff</div>
            <div class="createAccbox"> 
            <div class="signupheading">Update Staff</div>
            <form action="">
                <div class="inputArea">Full Name :
                    <input type="text" placeholder="Enter Your Full Name"/>
                    <i class="user"></i>
                </div>
                
                <div class="inputArea">Address :
                    <input type="text" placeholder="Enter Your Address"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Email :
                    <input type="text" placeholder="Enter Your Email Address"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Mobile Number :
                    <input type="text" placeholder="Enter Your Mobile Number"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Employee ID :
                    <input type="text" placeholder="Enter Your Employee ID"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">User Name :
                    <input type="text" placeholder="Enter a User Name "/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Password :
                    <input type="password" placeholder="Enter a Password"/>
                    <i class="user"></i>
                </div>
            </form>
            <div>
                <button className="SignupStaffBtn1" onClick={onSignupStaffBtn1ButtonClick}>Save</button>
            </div>
        </div>
    </>
    );
}

export default Updatestaff;