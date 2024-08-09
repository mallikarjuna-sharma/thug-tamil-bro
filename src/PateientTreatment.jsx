import React from "react";
import "./PatientTreatment.css";
import { FaNotesMedical } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { MdOutlineNoteAlt } from "react-icons/md";

const PateientTreatment = () => {
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

      <div className="d-flex  justify-content-center medicalhistory-3rd-div  gap-2 ">
        <span className="mt-2">Perscription</span>
        <span className="mt-2">Treatment</span>
      </div>
      <div className="patientnotes-main-div">
        <div className="row">
          <div className=" col d-flex flex-column labtest-first-col gap-2">
            {" "}
            <div className="d-flex flex-column   ">
              <div>
                <select name="Education" id="patientdesignation">
                  <option value="volvo">M.B.B.S, Md,</option>
                  <option value="saab"></option>
                  <option value="opel"></option>
                  <option value="audi"></option>
                </select>
              </div>
              <div className="d-flex align-items-center mt-1">
                <label className=" ms-3 me-2">(or) Search by typing</label>
                <input type="radio" className="patienttreatment-radio"></input>
                <label className="me-4">Medicine Name</label>
                <input type="radio" className="patienttreatment-radio"></input>
                <label>Cenric Name</label>
              </div>
            </div>
            <div className="d-flex flex-column  ">
              <label className="medicalhistory-input-label ms-3 me-2">
                Type Medicine Name
              </label>
              <div>
                <input className="labtest-1stcol-input" type="text" />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column  ">
                <label className="medicalhistory-input-label ms-3 me-2">
                  Select Medicine Type
                </label>
                <div>
                  <input
                    className="patienttreatment-1stcol-smallinput"
                    type="text"
                  />
                </div>
              </div>
              <div className="d-flex flex-column  ">
                <label className="medicalhistory-input-label ms-3 me-2">
                  Generic Name
                </label>
                <div>
                  <select name="Education" id="patienttreatment">
                    <option value="volvo">M.B.B.S, Md,</option>
                    <option value="saab"></option>
                    <option value="opel"></option>
                    <option value="audi"></option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex   ">
                <div className="d-flex flex-column   ">
                  <div>
                    <label className="medicalhistory-input-label ms-3 me-2">
                      Duration
                    </label>
                    <div>
                      <input
                        className="patienttreatment-1stcol-toosmallinput"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex      align-items-end patienttreatment-day-week-month">
                  <span className="bg-success text-white">Days</span>
                  <span>Weeks</span>
                  <span>Months</span>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4">
              <div className="d-flex flex-column">
                <div>
                  <label className="medicalhistory-input-label ms-3 me-2">
                    Morning
                  </label>
                </div>
                <div className="d-flex align-items-center gap-3 patienttreatment-plusminus-div">
                  <FaPlus className="patienttreatment-plus-minus" />
                  <span>0</span>
                  <FaMinus className="patienttreatment-plus-minus" />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <label className="medicalhistory-input-label ms-3 me-2">
                    Afternoon
                  </label>
                </div>
                <div className="d-flex align-items-center gap-3 patienttreatment-plusminus-div">
                  <FaPlus className="patienttreatment-plus-minus" />
                  <span>0</span>
                  <FaMinus className="patienttreatment-plus-minus" />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <label className="medicalhistory-input-label ms-3 me-2">
                    Evening
                  </label>
                </div>
                <div className="d-flex align-items-center gap-3 patienttreatment-plusminus-div">
                  <FaPlus className="patienttreatment-plus-minus" />
                  <span>0</span>
                  <FaMinus className="patienttreatment-plus-minus" />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <label className="medicalhistory-input-label ms-3 me-2">
                    Night
                  </label>
                </div>
                <div className="d-flex align-items-center gap-3 patienttreatment-plusminus-div">
                  <FaPlus className="patienttreatment-plus-minus" />
                  <span>0</span>
                  <FaMinus className="patienttreatment-plus-minus" />
                </div>
              </div>
            </div>
            <div className="d-flex patienttreatment-meal align-items-center mt-2">
              <span className="bg-success text-white">Before Meal</span>
              <span>After Meal</span>
            </div>
            <div className="d-flex flex-column  ">
              <label className="medicalhistory-input-label ms-3 me-2">
                Additional Test Instruction
              </label>
              <div>
                <input className="labtest-1stcol-input" type="text" />
              </div>
            </div>
          </div>
          <div className=" col d-flex flex-column labtest-2ndcol-outer">
            {" "}
            <div className="labtest-2nd-col">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex w-75 mb-1">
                  Search & Add medicines, duration, dosage information,
                  additional notes and click "Add Medicine". Added medicine will
                  appear here.
                </div>
                <div className="d-flex justify-content-center">
                  Medicines are dropped here
                </div>

                <MdOutlineNoteAlt className="pastrecords-main-div-notes" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex ms-5 my-3 patienttreatment-buttons">
        <button className="patienttest-addtest-button">Add Test</button>

        <button className="patienttreatment-next-button  ">NEXT</button>
      </div>
    </div>
  );
};

export default PateientTreatment;
