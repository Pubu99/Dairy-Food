import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import'./Addemployee.css';

const Addemployee = () => {
  const navigate = useNavigate();

    const onAddEButtonButtonClick = useCallback(() => {
        navigate("/StaffDetails");
      },[navigate]);
    
      const onBtncontactButtonClick = useCallback(() => {
        navigate("/Contact");
      },[navigate]);

    return (
        <>
        <div className="ribbon"><button className="Btncontact" onClick={onBtncontactButtonClick}>Contact Us</button></div>
        <div className="Background">
            <div class="topic">Add Employee</div>
            <div class="createAccbox"> 
            <div className="PDetails">
            <form action="">
                <div class="inputArea">Employee ID :
                    <input type="text" placeholder="Enter Employee ID"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Employee Name :
                    <input type="text" placeholder="Enter Employee Name"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Mobile No :
                    <input type="text" placeholder="Enter Mobile Number"/>
                    <i class="user"></i>
                </div>
                <div class="inputArea">Address :
                    <input type="text" placeholder="Enter Employee Address"/>
                    <i class="user"></i>
                </div>
                <div>
                  <button className="AddEButton" onClick={onAddEButtonButtonClick}>Add Employee</button>
                </div>
            </form>
            </div>
            <div>
            </div>
        </div>
            
        </div>
        </>
    );
}

export default Addemployee;