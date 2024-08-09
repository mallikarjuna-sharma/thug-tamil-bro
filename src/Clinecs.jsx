import React from "react";
import { Link } from "react-router-dom";

import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Clinecs.css";
import { ClinecsTable } from "./ClinecsTable";

const Clinecs = () => {
  return (
    <div className="bg">
      <p className="clinic-title">Clinics</p>
      <div>
        <div className="d-flex w-100   pe-5 align-items-center">
          <div className="clinec-search-container ">
            <p>
              Search Clinics <FaMagnifyingGlass className="text-danger" />
            </p>
            <input
              type="text"
              className="clinecs-header-div-input"
              placeholder="Search by Clinic Name or Location"
            ></input>
          </div>
          <div>
            <Link to="/home/clinics/registration">
              <button className="clinecs-addclinecs-button"> ADD CLINIC</button>
            </Link>
          </div>
        </div>
        <div className="clinecs-table-div">
          <ClinecsTable></ClinecsTable>
        </div>
      </div>
    </div>
  );
};

export default Clinecs;
