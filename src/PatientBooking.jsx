import "./PatientBooking.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";

const PatientBooking = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk}>
        <div className="row">
          <div className="col-3 patientbooking-1st-col ">
            <div>
              <div className="patientbooking-img-pencil d-flex justify-content-center">
                <img
                  className=" docimage ms-2"
                  src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ width: "90px", height: "90px" }}
                ></img>
                <TiPencil className="patientbooking-tipencil" />
              </div>
            </div>
            <span
              onClick={handleCancel}
              className="patientbooking-1stdiv-cancelspan"
            >
              <MdCancel className="patientbooking-1st-div-cancel" />
            </span>
            <p className="text-center mb-0 patientbooking-searchpatient-text">
              Search Patient
            </p>
            <p className="text-center mb-0 patientbooking-dot-text">
              ....................
            </p>
            <p className="text-center mb-0 patientbooking-datetime-appointment">
              Selected Date & Time
            </p>
            <p className="text-center mb-0 patientbooking-date-text">
              Jan 30, 2024
            </p>
            <p className="text-center mb-0 patientbookin-time-text">
              09:45Hrs To 10:00 Hrs
            </p>
            <p className="text-center mb-0 patientbooking-dot-text">
              ....................
            </p>
            <p className="text-center mb-0 patientbooking-datetime-appointment">
              Appointment with
            </p>
            <p className="text-center mb-0 patientbooking-dr-text">
              Dr. Karunakaran S
            </p>
          </div>
          <div className="col-8 ms-4">
            <div className="d-flex mt-4">
              <p className="patientbooking-bookingappointment-text">
                {" "}
                You are{" "}
                <span className="patientbooking-book-span">Booking</span> an
                appointment
              </p>
              <p className="mb-0 patientbooking-createevent-text">
                {" "}
                Create Event
              </p>
            </div>
            <div className="d-flex flex-column me-3 mt-2">
              <div
                className="d-flex align-items-center"
                style={{ padding: " 2px 0px 2px 10px" }}
              >
                <label className="patientbooking-input-label">
                  Search Patients:
                </label>
                <input
                  className="patientbooking-input-checkbox me-1"
                  type="checkbox"
                />
                <label>My Patient</label>
              </div>
              <div>
                <input
                  className="patientbooking-2col-patient-input"
                  type="text"
                />
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="d-flex flex-column ">
                <label className="patientbooking-input-label ms-3">Date</label>
                <input className="paitenbooking-date-input" type="date" />
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column ms-5">
                  <div className="d-flex justify-content-center">
                    <label className="patientbooking-input-label">
                      Start Time (Hrs)
                    </label>
                  </div>
                  <div>
                    <select name="man" id="time">
                      <option value="volvo"></option>
                      <option value="saab">MR</option>
                      <option value="opel">MRS</option>
                      <option value="audi">""</option>
                    </select>
                    <select name="man" id="time">
                      <option value="volvo"></option>
                      <option value="saab">MR</option>
                      <option value="opel">MRS</option>
                      <option value="audi">""</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-column mx-5">
                  <div className="d-flex justify-content-center">
                    <label className="patientbooking-input-label">
                      End Time (Hrs)
                    </label>
                  </div>

                  <div>
                    <select name="man" id="time">
                      <option value="volvo"></option>
                      <option value="saab">MR</option>
                      <option value="opel">MRS</option>
                      <option value="audi">""</option>
                    </select>
                    <select name="man" id="time">
                      <option value="volvo"></option>
                      <option value="saab">MR</option>
                      <option value="opel">MRS</option>
                      <option value="audi">""</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3"></div>
            <div className="d-flex mt-2">
              <div className="d-flex flex-column">
                <label className="patientbooking-input-label ms-3">
                  Choose Doctor
                </label>
                <select name="man" id="doctor">
                  <option value="volvo"></option>
                  <option value="saab">MR</option>
                  <option value="opel">MRS</option>
                  <option value="audi">""</option>
                </select>
              </div>
              <div>
                <div className="d-flex flex-column">
                  <label className="patientbooking-input-label ms-3">
                    Appointment Type
                  </label>
                  <select name="man" id="appointment">
                    <option value="volvo"></option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 10px" }}
                >
                  <label className="patientbooking-input-label">
                    Visit Reason
                  </label>
                </div>
                <div>
                  <input
                    className="patientbooking-2col-patient-input"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-column mt-2">
              <label className="patientbooking-input-label ms-3">
                Referal Source
              </label>
              <select name="man" id="referal">
                <option value="volvo"></option>
                <option value="saab">MR</option>
                <option value="opel">MRS</option>
                <option value="audi">""</option>
              </select>
            </div>
            <div className="d-flex mt-3 gap-2">
              <div className="d-flex align-items-center patientbooking-checkbox-input">
                <input
                  className="patientbooking-input-checkbox me-1"
                  type="checkbox"
                />
                <label>Send SMS</label>
              </div>
              <div className="d-flex align-items-center patientbooking-checkbox-input">
                <input
                  className="patientbooking-input-checkbox me-1"
                  type="checkbox"
                />
                <label>Send Email</label>
              </div>
              <div className="d-flex align-items-center patientbooking-checkbox-input">
                <input
                  className="patientbooking-input-checkbox me-1"
                  type="checkbox"
                />
                <label>Send Whatsapp</label>
              </div>
            </div>
            <div className="mt-5">
              <button className="patientbooking-addpatient-button">
                {" "}
                + ADD PATIENT
              </button>
              <button className="patientbooking-bookappointment-button">
                {" "}
                BOOK APOINTMENT
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PatientBooking;
