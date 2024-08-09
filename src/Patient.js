import React from "react";
import "./Patient.css";
import { Patienttable } from "./Patienttable";

function Patient() {
  return (
    <div className="me-2 bg">
      <div className="d-flex patient-hearder-div ">
        <div className="d-flex flex-column ">
          <label className="patientbooking-input-label ms-3">From</label>
          <input className="paitent-date-input" type="date" />
        </div>
        <div className="d-flex flex-column ">
          <label className="patientbooking-input-label ms-3">To</label>
          <input className="paitent-date-input" type="date" />
        </div>
        <div className="d-flex flex-column">
          <label className="patientbooking-input-label ms-3">
            Select Hospital / Clinic
          </label>
          <select name="man" id="patient-doctor">
            <option value="volvo"></option>
            <option value="saab">MR</option>
            <option value="opel">MRS</option>
            <option value="audi">""</option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <label className="patientbooking-input-label ms-3">Select User</label>
          <select name="man" id="patient-doctor">
            <option value="volvo"></option>
            <option value="saab">MR</option>
            <option value="opel">MRS</option>
            <option value="audi">""</option>
          </select>
        </div>
      </div>
      <div className="patient-table-div">
        <Patienttable />
      </div>
    </div>
  );
}

export default Patient;
