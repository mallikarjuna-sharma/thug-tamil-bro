import React, { useState } from "react";

import "./Pharmacy.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PharmacyTable } from "./PharmacyTable";
import { useNavigate } from "react-router-dom";

const Pharmacy = () => {
  const [checked, setChecked] = useState(false);

  const registrationPageNav = useNavigate();
  const handleRegistration = () => {
    registrationPageNav("/home/pharmacy/registration");
  };
  const handleclick = () => {
    setChecked(!checked);

    console.log(checked);
  };
  return (
    <div>
      <p className="clinecs-1stdiv-text">Pharmacy</p>
      <div className="pharmacy-1st-div d-flex gap-5">
        <div className=" d-flex align-items-center Pharmacy-search-div">
          <input
            type="search"
            className="pharmacy-1st-search-input-div"
          ></input>
          <span className="pharmacy-search-icon-span">
            <FaMagnifyingGlass className="pharmacy-search-icon" />
          </span>
        </div>
        <div className=" d-flex justify-content-center">
          <button
            onClick={handleRegistration}
            className="pharmacy-add-pharmacy-button"
          >
            ADD PHARMACY
          </button>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <p className="mb-0">Pharmacy Inventory Setting</p>
            <span className="pharmacy-1st-div-span">( What is this?)</span>

            <p
              onClick={handleclick}
              className="pharmacy-3rd-col-yes mb-0"
              style={{ backgroundColor: checked ? "green" : "gray" }}
            >
              YES
            </p>
            <p
              onClick={handleclick}
              className="pharmacy-3rd-col-no mb-0"
              style={{ backgroundColor: checked ? "gray" : "green" }}
            >
              NO
            </p>
          </div>
        </div>
      </div>
      <div className="pharmacy-table-div">
        <PharmacyTable />
      </div>
    </div>
  );
};

export default Pharmacy;
