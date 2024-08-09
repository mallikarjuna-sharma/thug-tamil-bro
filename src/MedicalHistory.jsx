import React, { useState } from "react";
import { FaNotesMedical } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import "./MedicalHistory.css";

import MedicHistoryParameter from "./MedicHistoryParameter";

const MedicalHistory = () => {
  const [isParameter, setIsParameter] = useState(false);
  const [isMedicalHistory, setMedicalHistory] = useState(true);

  const handleParameter = () => {
    setIsParameter(true);
    setMedicalHistory(false);
  };

  const handleMedicalHistory = () => {
    setIsParameter(false);
    setMedicalHistory(true);
  };

  return (
    <div className="bg">
      <div className="d-flex pastrecords-header-div">
        <div
          className="d-flex pastrecords-monica"
          style={{ margin: "4px 0px" }}
        >
          <img
            className="docimage ms-2 me-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "45px", height: "45px" }}
          ></img>
          <div style={{ padding: "0px 18px 0px 0px" }}>
            <p className="mb-0 pastrecords-header-name">Monica</p>
            <p className="mb-0 pastrecords-header-age">24 Year - Female</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center bg-white "
          style={{ height: "63px" }}
        >
          <div className="me-4 ms-4 pastrecord-contact-patient">
            <p className="mb-0">Contact No:</p>
            <p className="mb-0 pastrecords-phone-id">944445 58756</p>
          </div>
          <div className="docdetail-days-vertical-line me-4"></div>
          <div className="me-4 pastrecord-contact-patient">
            <p className="mb-0">Patient ID:</p>
            <p className="mb-0 pastrecords-phone-id">UHID - 287</p>
          </div>
          <div className="d-flex gap-2 me-3 pastrecords-header-icons-div ">
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
          </div>
        </div>
        <div className="text-center ms-auto me-4">
          <p className="mb-0">Consulting Time</p>
          <p className="mb-0 pastrecords-timer">00 : 00 : 00</p>
        </div>
      </div>
      <div className="d-flex medicalhistory-2nd-div">
        <div className="d-flex align-items-center me-5 medicalhistory-visitreason-div">
          <label className="medicalhistory-input-label ms-3 me-2">
            Visit Reason
          </label>
          <input className="medicalhistory-visit-input" type="text" />
          <FaCirclePlus className="medicalhistory-2nddiv-plus" />
        </div>
        <div className="d-flex align-items-center ms-5 medicalhistory-master-div">
          <label className="medicalhistory-input-label me-2" for="Education">
            Master Templates
          </label>
          <select name="Education" id="templates">
            <option value="volvo">M.B.B.S, Md,</option>
            <option value="saab"></option>
            <option value="opel"></option>
            <option value="audi"></option>
          </select>
        </div>
      </div>
      <div className="d-flex  justify-content-center medicalhistory-3rd-div mt-2 gap-2">
        <span
          style={{
            backgroundColor: isMedicalHistory ? "gray" : "white",
            color: isMedicalHistory ? "white" : "black",
          }}
          onClick={handleMedicalHistory}
        >
          Medical History
        </span>
        <span
          style={{
            backgroundColor: isParameter ? "gray" : "white",
            color: isParameter ? "white" : "black",
          }}
          onClick={handleParameter}
        >
          {" "}
          Parameters
        </span>
        <span>Past Medical History</span>
      </div>
      <div className="medicalhistory-main-div">
        <MedicHistoryParameter isParameter={isParameter} />
        <div style={{ display: isMedicalHistory ? "block" : "none" }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <MdOutlineNoteAlt className="pastrecords-main-div-notes" />
            No Previous visit by this patient
          </div>
        </div>
      </div>
      <div className="text-end m-4">
        <button className="medicalhistory-nex-button ">NEXT</button>
      </div>
    </div>
  );
};

export default MedicalHistory;
