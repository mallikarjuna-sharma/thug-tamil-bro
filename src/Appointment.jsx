import React, { useState } from "react";
import "./Appointment.css";
import { FaSearch } from "react-icons/fa";
import { AppointmentTable } from "./AppointmentTable";
import Basicdetailmodal from "./Basicdetailmodal";

import ParameterModal from "./ParameterModal";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [basicisModalOpen, basicsetIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const basicshowModal = () => {
    basicsetIsModalOpen(true);
  };
  const basichandleOk = () => {
    basicsetIsModalOpen(false);
  };
  const basichandleCancel = () => {
    basicsetIsModalOpen(false);
  };
  return (
    <div className="bg">
      <div className="appointment-servicelist">
        <p className="mb-0 appointment-servicelist-text">Service List</p>
        <div className="d-flex align-items-center ">
          <div className="d-flex align-items-center appointment-1st-div">
            <span className="appointment-appointmentlist-text">
              Appointment List
            </span>
            <span className="appointment-span">Day</span>
            <span className="appointment-span">Week</span>
            <span className="appointment-span">Month</span>
          </div>
          <div className="d-flex align-items-center appointment-input-register">
            <input
              className="appointment-1stdiv-input"
              type="search"
              placeholder="Search"
            ></input>
            <p
              onClick={basicshowModal}
              className="mb-0 appointment-1stdiv-register"
            >
              REGISTER PATIENT
            </p>
          </div>
        </div>
      </div>
      <div className="appointment-servicelist">
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label" for="Education">
              Hospital / Clinic
            </label>
            <select name="Education" id="hospital">
              <option value="volvo">M.B.B.S, Md,</option>
              <option value="saab">""</option>
              <option value="opel">""</option>
              <option value="audi">""</option>
            </select>
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label" for="Education">
              Date
            </label>
            <input className="appintment-date-input" type="date" />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label" for="Education">
              Doctors
            </label>
            <select name="Education" id="doctors">
              <option value="volvo">M.B.B.S, Md,</option>
              <option value="saab">""</option>
              <option value="opel">""</option>
              <option value="audi">""</option>
            </select>
          </div>
          <div className="d-flex align-items-end">
            <p className="mb-0 appointment-2div-walk">WALK-IN CONSULTATION</p>
          </div>
        </div>
      </div>
      <div className="appointment-table-part">
        <div
          className="d-flex justify-content-between  "
          style={{ padding: "0px 30px" }}
        >
          <div>
            <div className="appointment-appointmnet-text-abovetable">
              Appointment List
            </div>
          </div>
          <div className="appointment-search-bar">
            <div className="appointment-search-input-div">
              <span className="appointmnet-search-icon">
                {" "}
                <FaSearch />
              </span>
              <input type="text" className="appointment-search-input" />
            </div>
          </div>
        </div>
        <AppointmentTable showModal={showModal}></AppointmentTable>
      </div>
      <ParameterModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></ParameterModal>
      <Basicdetailmodal
        basicisModalOpen={basicisModalOpen}
        basichandleOk={basichandleOk}
        basichandleCancel={basichandleCancel}
      />
    </div>
  );
};

export default Appointment;
