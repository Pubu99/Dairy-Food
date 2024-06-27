import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './StaffDetails.css';
import { Link } from 'react-router-dom';

const StaffDetails = () => {
  const navigate = useNavigate();
  const [staffList, setStaffList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/staff');
        if (!response.ok) {
          throw new Error('Failed to fetch staff list');
        }
        const data = await response.json();
        setStaffList(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStaffList();
  }, []);

  const onAddstaff1ButtonClick = () => {
    navigate("/Addemployee");
  };

  const onAddstaff2ButtonClick = () => {
    navigate("/Updatestaff");
  };

  const onBtncontactButtonClick = () => {
    navigate("/Contact");
  };

  const onproductBtn1ButtonClick = () => {
    navigate("/");
  };

  const onproductBtn2ButtonClick = () => {
    navigate("/OrderDetails");
  };

  return (
    <>
      <div className="ribbon">
        <button className="Btncontact" onClick={onBtncontactButtonClick}>
          Contact Us
        </button>
      </div>
      <div className="BackgroundProductDetails">
        <div className="PDetailtopic">Staff Details</div>
        <div className="AddDeleteProductBox1">
          {staffList.length === 0 && !error && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {staffList.length > 0 && (
            <table className="StaffTable">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Employee ID</th>
                </tr>
              </thead>
              <tbody>
                {staffList.map((staff) => (
                  <tr key={staff._id}>
                    <td>{staff.fullname}</td>
                    <td>{staff.userName}</td>
                    <td>{staff.email}</td>
                    <td>{staff.mobileNO}</td>
                    <td>{staff.employeeID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="GoToOrdersButton">
          <Link className="productBtn1" to="/">
            Go to Login
          </Link>
          <Link className="productBtn2" to="/OrderDetails">
            Go to Orders
          </Link>
        </div>
      </div>
    </>
  );
}

export default StaffDetails;
