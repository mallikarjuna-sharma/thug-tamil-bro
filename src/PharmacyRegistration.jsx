import React from "react";
import "./PharmacyRegistration.css";
import { useNavigate } from "react-router-dom";

const PharmacyRegistration = () => {
 const cancelNavigate = useNavigate()
 const handleCancelNavigate =()=>{
  cancelNavigate("/home/pharmacy")
 }

  return (
    <div>
      <p className="pharamacy-registration-1stdiv-text">Pharmacy Registration</p>
      <div className=".pharmacyr-registration-main-div row bg">
        <div className="col pharmacy-registration-first-col">
          <div className="d-flex flex-column  mb-4">
            <label>Branch</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Pharmacy Name</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4 ">
            <label>Contact No</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column  mb-4">
            <label>Email Id </label>
            <input type="text"></input>
          </div>
          
        </div>
        <div className="col pharmacy-registration-second-col">
          <div className="d-flex flex-column mb-4">
            <label>Loction</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Added By</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Added On</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label> Status</label>
            <input type="text"></input>
          </div>
        
        </div>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button
           onClick={handleCancelNavigate}
            className="pharmacy-labregistration-cancel-button"
          >
            CANCEL
          </button>
          <button className="pharmacy-registration-add-button">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default PharmacyRegistration;
