import "./Basicdetailmodal.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { BsCake } from "react-icons/bs";
import { FaDroplet } from "react-icons/fa6";
// import React from 'react';
import { Collapse, Input } from "antd";

const Basicdetailmodal = ({
  basicisModalOpen,
  basichandleOk,
  basichandleCancel,
}) => {
  const { Panel } = Collapse;
  return (
    <div>
      <Modal open={basicisModalOpen} onOk={basichandleOk}>
        <div className="d-flex align-items-end parameter-1st-container">
          <p className="mb-0 parameter-parameter-text">Basic Details</p>
          <div className="parameter-img-pencil">
            <img
              className=" docimage ms-2"
              src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ width: "60px", height: "60px" }}
            ></img>
            <TiPencil className="basicmodal-tipencil " />
          </div>

          <span
            onClick={basichandleCancel}
            className="parameter-1stdiv-cancelspan"
          >
            <MdCancel className="parameter-1st-div-cancel" />
          </span>
        </div>
        <div className="row">
          <div className="col basicdetail-1st-col">
            <div className="d-flex flex-column me-3">
              <div
                className="d-flex align-items-center"
                style={{ padding: " 2px 0px 2px 33px" }}
              >
                <label className="docdetail-input-label">PATIENT NAME*</label>
                <input
                  className="basicdetail-input-checkbox me-1"
                  type="checkbox"
                />
                <label>VIP</label>
              </div>
              <div>
                <BsCake
                  className="me-2"
                  style={{ width: "20px", height: "20px" }}
                />
                <select name="man" id="patient">
                  <option value="volvo"></option>
                  <option value="saab">MR</option>
                  <option value="opel">MRS</option>
                  <option value="audi">""</option>
                </select>
                <input className="basicdetail-double-input" type="text" />
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    DATE OF BIRTH*
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />

                  <input
                    className="basicdetail-double-inputfield"
                    type="date"
                  />
                  <span className="ms-2">(or)</span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">AGE*</label>
                  <select name="man" id="age">
                    <option value="volvo"> 0 Years</option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>
                </div>
              </div>
              <div className="d-flex align-items-end">
                <select name="man" id="age">
                  <option value="volvo">0 Months</option>
                  <option value="saab">MR</option>
                  <option value="opel">MRS</option>
                  <option value="audi">""</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">GENDER*</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <select name="man" id="gender">
                    <option value="volvo">0 Months</option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">Blood Group*</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    CONTACTNUMBER*
                  </label>
                </div>

                <div className="d-flex basicdetail-mobile-div">
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="d-flex bg-white basicdetail-mobile-landline align-items-center">
                    <p className="bascidetail-mobile-text">Mobile</p>

                    <span className="basicdetail-mobile-91">+91</span>
                    <input className="basicdetail-mobile-input" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                ></div>
              </div>
            </div>
            <div className="d-flex flex-row ">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">EMAIL ID</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">
                    AADHAAR CARD NUMBER
                  </label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">PAN NUMBER</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">NATIONALITY</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    PASSPORT NUMBER*
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1 ">
                  <label className="docdetail-input-label">VISA STATUS</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-end">
              <p className="me-5">*Mandatory fields</p>
            </div>
          </div>
          <div className="col">
            <div className="bascidetail-2ndcol-div">
              <div className="mb-2">
                <Collapse
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                  defaultActiveKey={["1"]}
                >
                  <Panel header="CONTACT ADDRESS" key="1">
                    <div>
                      <div className="d-flex flex-column">
                        <Input
                          type="text"
                          className="basicdetail-collape-input"
                        ></Input>
                        <input
                          type="text"
                          className="basicdetail-collape-input"
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                        ></input>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
              <div className="mb-2">
                <Collapse
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                  defaultActiveKey={["1"]}
                >
                  <Panel header="ADDITIONAL DETAILS*" key="1"></Panel>
                </Collapse>
              </div>
              <div className="mb-2">
                <Collapse
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                  defaultActiveKey={["1"]}
                >
                  <Panel header="EMERGENCY CONTACT" key="1"></Panel>
                </Collapse>
              </div>
              <div className="mb-2">
                <Collapse
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                  defaultActiveKey={["1"]}
                >
                  <Panel header="MEMBERSHIP DETAILS" key="1"></Panel>
                </Collapse>
              </div>
              <div className="d-flex justify-content-end basicdetail-button-div">
                <button className="basicdetail-cancel-button">CANCEL</button>
                <button className=" basicdetail-register-button">
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Basicdetailmodal;
