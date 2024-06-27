import {BrowserRouter as Router,Route,Routes, useNavigate} from "react-router-dom";
import { useState } from 'react';
import Addemployee from './pages/Addemployee/Addemployee.js';
import Addproduct from './pages/Addproduct/Addproduct.js';
import Afterloginstaff from './pages/Afterstafflogin/Afterstafflogin.js';
import Contact from './pages/Contact/Contact.js';
import Createaccstaff from './pages/Createaccstaff/Createaccstaff.js';
import Createaccuser from './pages/Createaccuser/Createaccuser.js';
import Loginuser from './pages/Loginuser/Loginuser.js';
import Loginstaff from './pages/Loginstaff/Loginstaff.js';
import OrderConfirm from './pages/Orderconfirm/Orderconfirm.js';
import OrderDetails from './pages/Orderdetails/Orderdetails.js';
import OrderProducts from './pages/Orderproducts/Orderproducts.js';
import ProductDetails from './pages/Productdetails/Productdetails.js';
import Resetpw from './pages/Resetpw/Resetpw.js';
import StaffDetails from './pages/StaffDetails/StaffDetails.js';
import UserProductDetails from './pages/Userproductdetails/Userproductdetails.js';
import Welcome from './pages/Welcome/Welcome.js';
import Updatestaff from './pages/Updatestaff/Updatestaff.js';
import Updateproduct from './pages/Updateproduct/Updateproduct.js';


function App() {
  const [formToShow, setFormToShow] = useState('Login');
  const handleFormSwitch = (form) => {
  setFormToShow(form);
 };
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Loginuser/>}/>
            <Route path="/Loginstaff" element={<Loginstaff/>}/>
            <Route path="/Addemployee" element={<Addemployee/>}/>
            <Route path="/Addproduct" element={<Addproduct/>}/>
            <Route path="/Afterloginstaff" element={<Afterloginstaff/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Createaccstaff" element={<Createaccstaff/>}/>
            <Route path="/Createaccuser" element={<Createaccuser/>}/>
            <Route path="/OrderConfirm" element={<OrderConfirm/>}/>
            <Route path="/OrderDetails" element={<OrderDetails/>}/>
            <Route path="/OrderProducts" element={<OrderProducts/>}/>
            <Route path="/ProductDetails" element={<ProductDetails/>}/>
            <Route path="/Resetpw" element={<Resetpw/>}/>
            <Route path="/StaffDetails" element={<StaffDetails/>}/>
            <Route path="/UserProductDetails" element={<UserProductDetails/>}/>
            <Route path="/Welcome" element={<Welcome/>}/>
            <Route path="/Updatestaff" element={<Updatestaff/>}/>
            <Route path="/Updateproduct" element={<Updateproduct/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
