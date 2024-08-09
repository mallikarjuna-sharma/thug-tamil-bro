import Table from "react-bootstrap/Table";
import "./Patienttable.css";
export function Patienttable() {
  const tableHeader = [
    {
      name: "Consultaion Date",
    },
    {
      name: "Patient Id",
    },
    {
      name: "Patient Name",
    },
    {
      name: "Gender",
    },
    {
      name: "D.O.B",
    },
    {
      name: "Contact Number",
    },
    {
      name: "Referal Source",
    },
    {
      name: "Sub-Referral Source",
    },
    {
      name: "Patient Type",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Treatment",
    },
    {
      name: "Hospital / Clinic",
    },
    {
      name: "Amount Recieved (INR)",
    },
  ];

  const tableContent = [
    {
      date: "30-Jan 2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",
      subReferal: "Others",
      patientType: "Follow Up",
      doctorName: "Dr.Karunakaran",
      treatment: "-",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "30-Jan 2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",
      subReferal: "Others",
      patientType: "Follow Up",
      doctorName: "Dr.Karunakaran",
      treatment: "-",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "30-Jan 2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",
      subReferal: "Others",
      patientType: "Follow Up",
      doctorName: "Dr.Karunakaran",
      treatment: "-",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "30-Jan 2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",
      subReferal: "Others",
      patientType: "Follow Up",
      doctorName: "Dr.Karunakaran",
      treatment: "-",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "30-Jan 2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",
      subReferal: "Others",
      patientType: "Follow Up",
      doctorName: "Dr.Karunakaran",
      treatment: "-",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "30-Jan 2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",
      subReferal: "Others",
      patientType: "Follow Up",
      doctorName: "Dr.Karunakaran",
      treatment: "-",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
  ];

  return (
    <Table responsive>
      <thead className="patienttable-head-container">
      <tr>
          {[...tableHeader].map((ele, index) => (
          <th className="patienttable-header-col" key={index}>
          {ele.name}
          {index < tableHeader.length - 1 && (
            <>
              <div className="patienttable-header-div"></div>
            </>
          )}
        </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((element,index) => {
          return (
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
             
                return (
                  <td className="patienttable-body-row" key={cellIndex}>
                  {cellIndex < Object.keys(element).length - 1 ? (
                    <>
                      {element[rowData]}
                      <div className="patienttable-header-div"></div>
                    </>
                  ) : (
                    element[rowData]
                  )}
                </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
