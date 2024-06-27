import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './Createaccuser.css';

const Createaccuser = () => {
  const navigate = useNavigate();

  const onSignupUserBtn1ButtonClick = useCallback(() => {
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
      const response = await fetch('http://localhost:5000/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      
      // Redirect to Welcome.js page after successful signup
      if (response.ok) {
        navigate("/Welcome");
      }
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
        <div className="signupheading">Sign Up For Users</div>
        <form onSubmit={handleSubmit}>
          <div className="inputArea">Full Name :
            <input type="text" name="fullname" placeholder="Enter Your Full Name" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Address :
            <input type="text" name="Address" placeholder="Enter Your Address" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Email :
            <input type="text" name="Email" placeholder="Enter Your Email Address" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Mobile Number :
            <input type="text" name="MobileNO" placeholder="Enter Your Mobile Number" />
            <i className="user"></i>
          </div>
          <div className="inputArea">User Name :
            <input type="text" name="UserName" placeholder="Enter a User Name" />
            <i className="user"></i>
          </div>
          <div className="inputArea">Password :
            <input type="password" name="password" placeholder="Enter a Password" />
            <i className="user"></i>
          </div>
          <div>
            <button className="SignupUserBtn1" onClick={onSignupUserBtn1ButtonClick}>Back to Login Page</button>
            <button className="SignupUserBtn2" type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Createaccuser;
