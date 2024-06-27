import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Createaccstaff.css';

const Createaccstaff = () => {
  const navigate = useNavigate();

  const onSignupStaffBtn1ButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignupStaffBtn2ButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('http://localhost:5000/api/v1/staff/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      // Redirect to login page after successful signup
      navigate("/");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
      <div className="Backgroundcreateacc" />
      <div className="CreateHeading" />
      <div className="Ctopic">Create New Account</div>
      <div className="createAccbox">
        <div className="signupheading">Sign Up For Staff</div>
        <form onSubmit={handleSubmit}>
          <div className="inputArea">Full Name :
            <input type="text" name="fullname" placeholder="Enter Your Full Name" />
            <i className="user"></i>
          </div>

          <div className="inputArea">Address :
            <input type="text" name="address" placeholder="Enter Your Address" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Email :
            <input type="text" name="email" placeholder="Enter Your Email Address" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Mobile Number :
            <input type="text" name="mobileNO" placeholder="Enter Your Mobile Number" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Employee ID :
            <input type="text" name="employeeID" placeholder="Enter Your Employee ID" />
            <i className="user"></i>
          </div>
          <div className="inputArea">User Name :
            <input type="text" name="userName" placeholder="Enter a User Name " />
            <i className="user"></i>
          </div>
          <div className="inputArea">Password :
            <input type="password" name="password" placeholder="Enter a Password" />
            <i className="user"></i>
          </div>
          <div>
            <button className="SignupStaffBtn1" onClick={onSignupStaffBtn1ButtonClick}>Back to Login Page</button>
            <button className="SignupStaffBtn2" type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Createaccstaff;
