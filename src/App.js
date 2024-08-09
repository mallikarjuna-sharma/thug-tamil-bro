import "./customTheme.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./AppLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Patient from "./Patient";
import Preference from "./Preference";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Doctor from "./Doctor";
import Doctordetails from "./Doctordetails";
import AboutDoctor from "./AboutDoctor";
import Appointment from "./Appointment";
import ParameterModal from "./ParameterModal";
import Basicdetailmodal from "./Basicdetailmodal";
import SearchPatient from "./SearchPatient";
import PatientBooking from "./PatientBooking";
import PastRecords from "./PastRecords";
import MedicalHistory from "./MedicalHistory";
import Patientnotes from "./Patientnotes";
import LabTest from "./LabTest";
import PateientTreatment from "./PateientTreatment";
import PatientConsents from "./PatientConsents";
import PatientFurthercare from "./PatientFurthercare";
import ClinecsRegistration from "./ClinecsRegistration";
import Clinecs from "./Clinecs";
import Lab from "./Lab";
import LabRegistration from "./LabRegistration";
import Pharmacy from "./Pharmacy";
import PharmacyRegistration from "./PharmacyRegistration";
import BranchRegistration from "./BranchRegistration";
import AddNewDoctor from "./AddNewDoctor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home/dashboard"
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/patient"
          element={
            <AppLayout>
              <Patient />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/preference"
          element={
            <AppLayout>
              <Preference />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
        <Route
          path="/home/clinics/registration"
          element={
            <AppLayout>
              <ClinecsRegistration />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/clinics"
          element={
            <AppLayout>
              <Clinecs />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/doctor"
          element={
            <AppLayout>
              <Doctor />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/doctor/details"
          element={
            <AppLayout>
              <Doctordetails />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/doctor/about"
          element={
            <AppLayout>
              <AboutDoctor />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/appointment"
          element={
            <AppLayout>
              <Appointment />
            </AppLayout>
          }
        ></Route>
        <Route path="/home/parameter" element={<ParameterModal />}></Route>
        <Route path="/home/basicdetail" element={<Basicdetailmodal />}></Route>
        <Route path="/home/searchpatient" element={<SearchPatient />}></Route>
        <Route path="/home/patientbooking" element={<PatientBooking />}></Route>
        <Route path="/home/addnewdoctor" element={<AddNewDoctor/>}></Route>
        <Route
          path="home/patient/pastrecords"
          element={
            <AppLayout>
              <PastRecords />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/patient/medicalhistory"
          element={
            <AppLayout>
              <MedicalHistory />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/patient/notes"
          element={
            <AppLayout>
              <Patientnotes />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/patient/labtest"
          element={
            <AppLayout>
              <LabTest />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/patient/treatment"
          element={
            <AppLayout>
              <PateientTreatment />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/patient/consents"
          element={
            <AppLayout>
              <PatientConsents />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/patient/furthercare"
          element={
            <AppLayout>
              <PatientFurthercare />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/lab"
          element={
            <AppLayout>
              <Lab />
            </AppLayout>
          }
        ></Route>
        <Route
          path="home/lab/registration"
          element={
            <AppLayout>
              <LabRegistration />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/pharmacy"
          element={
            <AppLayout>
              <Pharmacy />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/pharmacy/registration"
          element={
            <AppLayout>
              <PharmacyRegistration />
            </AppLayout>
          }
        ></Route>
        <Route
          path="/home/branch"
          element={
            <AppLayout>
              <BranchRegistration />
            </AppLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
