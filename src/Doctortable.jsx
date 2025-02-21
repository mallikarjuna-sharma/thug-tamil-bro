import Table from "react-bootstrap/Table";

import { Link, useNavigate } from "react-router-dom";

export function Doctortable() {
  const doctorAboutNavigate = useNavigate();

  const handlenavigate = () => {
    console.log("treem");
    doctorAboutNavigate("about");
  };
  const tableContent = [
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
    {
      name: "DR. Karuakaran S",
      role: "Spine Surgeon",
      sex: "Male",
      dob: "23-jan-1995",
      mobileno: "90445669771",
      button: "",
    },
  ];

  //   const Inbutton = () => {
  //     return <div>IN</div>;
  //   };
  const DocImg = () => {
    return (
      <div>
        <div>
          <img
            className="doc-docimage ms-1"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "40px", height: "40px" }}
          ></img>
        </div>
      </div>
    );
  };

  const RefreshIcons = () => {
    return (
      <div onClick={handlenavigate} className="doc-refresh-icons-container">
        <div className="doc-refresh-icons-div ">
          <p className="doc-more mb-0">More</p>
          <p className="doc-details">Details...</p>
        </div>
      </div>
    );
  };
  // console.log(...tableHeader);

  return (
    <Table responsive>
      <tbody>
        {tableContent.map((element, rowIndex) => {
          return (
            <tr key={rowIndex} className="doc-table-body-row-container">
              {Object.keys(element).map((rowData, colIndex) => {
                if (colIndex === Object.keys(element).length - 1) {
                  return <RefreshIcons key={rowData + colIndex} />;
                }
                // if (index === Object.keys(element).length - 9) {
                //   return <Inbutton />;
                // }

                return (
                  <td className="table-body-row-doc" key={rowData + colIndex}>
                    {rowData === "name" && <DocImg />}
                    {rowData === "name" || rowData === "mobileno" ? (
                      <b>{element[rowData]}</b>
                    ) : (
                      element[rowData]
                    )}
                    <div className="table-header-div"></div>
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
