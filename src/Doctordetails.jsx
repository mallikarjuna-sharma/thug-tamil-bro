import React from "react";
import "./Doctordetail.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import { MdCancel } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Doctordetails = () => {
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];
  const docpageNavigate = useNavigate();
  const handlecanceldoc = () => {
    docpageNavigate("/home/doctor");
  };
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");
  return (
    <div className="doctor-detail-container ">
      {" "}
      <div className="row d-flex justify-content-center">
        <div className="col-5 docdetail-1col">
          <p className="doctor-detail-text">Doctor details</p>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Doctor Name</label>
            <input className="docdetail-input" type="email" />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Experience</label>
            <input className="docdetail-input" type="email" />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">E Mail ID</label>
            <input className="docdetail-input" type="email" />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Date Of Birth</label>
            <input
              className="docdetail-input"
              type="text"
              placeholder="DD//MM//YYYY"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Location</label>
            <input className="docdetail-input" type="text" />
          </div>
          <div className="d-flex flex-column">
            <label className="docdetail-input-label">Doctor Fees</label>
            <div className="input-wrapper">
              <span className="docdetail-rs"> Rs.</span>
              <input type="text" className="docdetail-rs-input" />
            </div>
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Achievements</label>
            <input className="docdetail-input" type="text" />
          </div>
        </div>
        <div className="col-5 docdetail-2col">
          <div className="d-flex justify-content-end align-items-center">
            <div className="docdetail-docimg-pencil">
              <img
                className=" profile-doc-image m-2"
                src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "75px", height: "75px" }}
              ></img>
              <FaPencil className="docdetail-penicl-icon" />
            </div>
            <MdCancel
              onClick={handlecanceldoc}
              className="docdetail-cancel-icon"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Specialist</label>
            <input className="docdetail-input" type="text" />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Medical Registration No
            </label>
            <input className="docdetail-input" type="email" />
          </div>

          <div className="d-flex flex-column">
            <label className="docdetail-input-label">Mobile No</label>
            <div className="input-wrapper">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="country-selector"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
              <input
                //   className="profile-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Gender</label>
            <div className="d-flex justify-content-evenly align-items-center docdetail-gender-registration">
              <div className="d-flex">
                <input type="checkbox" id="Gender" name="Gender" value="male" />
                <label for="Gender" className="ms-2">
                  Male
                </label>
              </div>
              <div className="docdetail-vertical-line"></div>
              <div className="d-flex">
                <input
                  type="checkbox"
                  id="Gender"
                  name="Gender"
                  value="female"
                />
                <label for="Gender" className="ms-2">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column ">
            <label className="docdetail-input-label" for="Education">
              Education
            </label>
            <select name="Education" id="education">
              <option value="volvo">M.B.B.S, Md,</option>
              <option value="saab">""</option>
              <option value="opel">""</option>
              <option value="audi">""</option>
            </select>
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label" for="Clinic">
              Clinic Name
            </label>
            <select name="clinic" id="clinic">
              <option value="volvo">Spine Clinics</option>
              <option value="saab">""</option>
              <option value="opel">""</option>
              <option value="audi">""</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column doctordetail-days-div mt-3 ">
        <label className="docdetail-input-label">Days</label>
        <div className="d-flex justify-content-evenly align-items-center docdetail-days">
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Sunday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="female" />
            <label for="Gender">Monday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Tuesday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Wednesday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Thursday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Friday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Saturday</label>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column doctordetail-time-div mt-3">
        <label className="docdetail-input-label">Time</label>
        <div className="d-flex justify-content-evenly align-items-center docdetail-medical-registration py-1">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Gender" className="me-1">
                Sunday
              </label>
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Gender" className="me-1">
                Monday
              </label>
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Tuesday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Wednesday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Thursday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Friday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Saturday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 me-1 docdetail-am-to">AM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="me-1 docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-1 docdetail-time">00:00</p>
                <div>
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">PM</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="docdetail-save-button">Save</button>
      </div>
    </div>
  );
};

export default Doctordetails;
