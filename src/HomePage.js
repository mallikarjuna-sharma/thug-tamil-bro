import React from "react";

import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { AppointmentTable } from "./AppointmentTable";

const HomePage = () => {
  return (
    <div>
      <div className="d-flex dasboard-header ">
        <div className="d-flex flex-column ">
          <label className="dashboard-input-label ms-3">From</label>
          <input className="dashboard-date-input" type="date" />
        </div>
        <div className="d-flex flex-column ">
          <label className="dashboard-input-label ms-3">To</label>
          <input className="dashboard-date-input" type="date" />
        </div>
        <div className="d-flex flex-column">
          <label className="dashboard-input-label ms-3">Search Hospital / Clinic</label>
          <select name="man" id="dashboard-doctor-input">
            <option value="volvo"></option>
            <option value="saab">MR</option>
            <option value="opel">MRS</option>
            <option value="audi">""</option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <label className="dashboard-input-label ms-3">Select User</label>
          <select name="man" id="dashboard-doctor-input">
            <option value="volvo"></option>
            <option value="saab">MR</option>
            <option value="opel">MRS</option>
            <option value="audi">""</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="bg">
        <p className="mb-0 statsword mt-1">Stats</p>
        <div className="d-flex flex-row justify-content-evenly">
          <div className="stats  ">
            <div className="roundborder d-flex justify-content-center align-items-center">
              <div className="schedulenum">
                <RiCalendarScheduleLine className="schedule" />
                <br></br>
                <p className="statsnum d-inline px-3 ">74</p>
              </div>
            </div>
            <p className="spaninside mb-0">
              Overall <br></br>Appointment
            </p>
          </div>
          <div className="statscenter  ">
            <div className="roundborder d-flex justify-content-center align-items-center">
              <div className="schedulenum">
                <RiCalendarScheduleLine className="schedule" />
                <br></br>
                <p className="statsnum d-inline px-3 ">74</p>
              </div>
            </div>
            <div className="d-flex flex-row centerstats">
              <div className="roundbordercenter d-flex justify-content-center align-items-center me-5">
                <div className="schedulenumcenter">
                  <span className="schedulecenterfirst  ">IN</span>
                  <br></br>
                  <p className="statsnumcenter d-inline px-2  ">74</p>
                </div>
              </div>
              <div className="roundbordercenter d-flex justify-content-center align-items-center ">
                <div className="schedulenumcenter">
                  <span className="schedulecenterfirst">OUT</span>
                  <br></br>
                  <p className="statsnumcenter d-inline px-2 ">74</p>
                </div>
              </div>
            </div>
            <p className="spaninside mb-0">Patient Visit</p>
          </div>
          <div className="stats  ">
            <div className="roundborder d-flex justify-content-center align-items-center">
              <div className="schedulenum">
                <RiCalendarScheduleLine className="schedule" />
                <br></br>
                <p className="statsnum d-inline px-3 ">74</p>
              </div>
            </div>
            <p className="spaninside mb-0">
              Patient <br></br>Not Visit
            </p>
          </div>
        </div>

        <div className="table-bg">
          <div className="d-flex">
            <p className="w-25 todayappointments">Today Appointments </p>
            <div className="w-100 text-end ">
              <p className="mb-0 ">
                <input className="todayinput"></input>
                <FaMagnifyingGlass className="searchmag" />
              </p>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <AppointmentTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
