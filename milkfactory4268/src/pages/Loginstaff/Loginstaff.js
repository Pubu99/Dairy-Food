import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Loginstaff.css';

const Loginstaff = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/staff/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

      localStorage.setItem('token', data.token);
      navigate("/Afterloginstaff");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="ribbon"><button className="Btncontact">Contact Us</button></div>
      <div className="Background">
        <div className="topic">Dairy Food Store Room</div>
        <div className="loginUser">
          <header>Login Page for Staff</header>
          <form onSubmit={handleLogin}>
            <div className="inputArea1">Staff UserName :
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
            <button type="submit" className="Btn3">Staff Login</button>
          </form>
          <Link to="/" className="stafflogin_link">Login as User</Link>
          <div>
            <p className="textposition">Don't Have an Account ? SIGNUP</p>
          </div>
          <div>
            <button className="Btn1">STAFF SIGNUP</button>
            <button className="Btn2">USER SIGNUP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginstaff;
