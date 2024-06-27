import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

const Loginuser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e, userType) => {
    e.preventDefault();

    try {
      let url = '';
      if (userType === 'staff') {
        url = 'http://localhost:5000/api/v1/staff/login';
      } else {
        url = 'http://localhost:5000/api/v1/user/login';
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserName: userName, password: password }),
      });

      const data = await response.json();
      if (response.status === 404) {
        setError(`${userType === 'staff' ? 'Staff' : 'User'} not found. Please sign up first.`);
        return;
      } else if (!response.ok) {
        setError("Invalid credentials. Please try again.");
        return;
      }
      
      localStorage.setItem('token', data.token);
      navigate(userType === 'staff' ? "/Afterloginstaff" : "/UserProductDetails");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const onBtn1ButtonClick = useCallback(() => {
    navigate("/Createaccstaff");
  }, [navigate]);

  const onBtn2ButtonClick = useCallback(() => {
    navigate("/Createaccuser");
  }, [navigate]);

  const onBtncontactButtonClick = useCallback(() => {
    navigate("/Contact");
  }, [navigate]);

  return (
    <>
      <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
      <div className="Background">
        <div className="topic">Dairy Food Store</div>
        <div className="loginUser">
          <header>Login Page</header>
          <form onSubmit={(e) => handleLogin(e, 'user')}>
            <div className="inputArea1">User Name :
              <input type="text" placeholder="Enter Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
              <i className="user"></i>
            </div>
            <div className="password">password:
              <div className="inputArea1">
                <input type="password" placeholder="*************" value={password} onChange={(e) => setPassword(e.target.value)} />
                <i className="user"></i>
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" className="Btn3">User Login</button>
          </form>
          <Link to="/Loginstaff" className="stafflogin_link">Login as Staff</Link>
          <div>
            <p className="textposition">Don't Have an Account ? SIGNUP</p>
          </div>
          <div>
            <button className="Btn1login" onClick={onBtn1ButtonClick}>STAFF SIGNUP</button>
            <button className="Btn2login" onClick={onBtn2ButtonClick}>USER SIGNUP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginuser;
