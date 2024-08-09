import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import HomeHeader from "./HomeHeader";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import { PiTableBold } from "react-icons/pi";
import { FaMinusCircle } from "react-icons/fa";

export default function AppLayout({ children }) {
  const navigate = useNavigate();
  const { Header, Content, Sider, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hanlesidebar = () => {
    console.log("team beam");
    setSidebar(!sidebar);
  };

  function getItem(label, key, visible, children) {
    const isSubMenuOpen = openKeys.includes(key);
    
    return {
      key,
      children,
      label: (
        <div className="menu-item-label">
          <span>{label}</span>
          {visible && (
            <div className="menu-icon-container">
              {isSubMenuOpen ?(
                <FaMinusCircle className="menu-plus-icon" />
              ):( <FaPlusCircle className="menu-plus-icon" />)}
            </div>
          )}
        </div>
      ),
    };
  }

  const val = [
    {
      menu_name: "Dashboard",
      menu_url: "home/dashboard",
      menu_icon: "dashboard-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Profile",
      menu_url: "home/profile",
      menu_icon: "settings-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Clinics",
      menu_url: "home/clinics",
      menu_icon: "settings-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Doctor",
      menu_url: "home/doctor",
      menu_icon: "account-icon.png",
      submenuservice: [
        {
          menu_name: "Doctor",
          menu_url: "home/doctor",

          visible: false,
        },
        {
          menu_name: "Fees",
          menu_url: "home/doctor/fees",
          visible: false,
        },
      ],
      visible: true,
    },
    {
      menu_name: "Appointment",
      menu_url: "home/appointment",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Patients",
      menu_url: "",
      menu_icon: "account-icon.png",
      submenuservice: [
        {
          menu_name: "Patient",
          menu_url: "home/patient",

          visible: false,
        },
        {
          menu_name: "Past Records",
          menu_url: "home/patient/pastrecords",
          visible: false,
        },
        {
          menu_name: "Medical History",
          menu_url: "home/patient/medicalhistory",
          visible: false,
        },
        {
          menu_name: "Notes",
          menu_url: "home/patient/notes",
          visible: false,
        },
        {
          menu_name: "Lab Test",
          menu_url: "home/patient/labtest",
          visible: false,
        },
        {
          menu_name: "Consents",
          menu_url: "home/patient/consents",
          visible: false,
        },
        {
          menu_name: "treatment",
          menu_url: "home/patient/treatment",
          visible: false,
        },
        {
          menu_name: "Further Care",
          menu_url: "home/patient/furthercare",
          visible: false,
        },
      ],
      visible: true,
    },
    {
      menu_name: "Treatment",
      menu_url: "home/treatment",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Employee",
      menu_url: "home/employee",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Inventory",
      menu_url: "home/inventory",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Lab",
      menu_url: "home/lab",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Pharmacy",
      menu_url: "home/pharmacy",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Security",
      menu_url: "home/security",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Canteen",
      menu_url: "home/canteenn",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Taxi",
      menu_url: "home/taxi",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "HouseKeeping",
      menu_url: "home/housekeeping",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "Ambulance",
      menu_url: "home/ambulance",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
    {
      menu_name: "History",
      menu_url: "home/history",
      menu_icon: "account-icon.png",
      submenuservice: [],
      visible: true,
    },
  ];

  const items1 = val.map((item) => {
    if (item.submenuservice.length === 0) {
      return getItem(item.menu_name, `/${item.menu_url}`, item.visible);
    } else {
      return getItem(
        item.menu_name,
        `/${item.menu_url}`,
        item.visible,
        item.submenuservice.map((submenu) =>
          getItem(submenu.menu_name, `/${submenu.menu_url}`, submenu.visible)
        )
      );
    }
  });

  const location = useLocation();
  const locationUrl = location.pathname;
  const checklocation = locationUrl
    .slice(6)
    .split("")
    .map((team, index) => (index === 0 ? team.toUpperCase() : team))
    .join("");

    const handleOpenChange = (keys) => {
      // Determine if the clicked menu is already open
      const latestOpenKey = keys.find(key => !openKeys.includes(key));
    
      // Open the clicked submenu and close all others
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    };
  return (
    <div>
      <Layout>
        <Header className="bg-light">
          <HomeHeader></HomeHeader>
        </Header>
        <div className="d-flex" onClick={hanlesidebar}>
          {sidebar ? (
            <PiTableBold className="closetab" />
          ) : (
            <MdTableRows className="opentab" />
          )}
        </div>

        <Layout>
          <Sider
            className="applayout-ant-sider"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{
              height: "auto",
              width: "50px",
              // overflowY: "scroll",
              boxShadow: "0px 1px 5px gray",
              transition: " display 3s",
              display: isMobile ? (sidebar ? "inline-block" : "none") : null,
            }}
          >
            <div className="d-flex justify-content-end menuhead align-items-center ms-3">
              <img
                className="docimage ms-2"
                src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "40px", height: "40px" }}
              ></img>
              <div className="vertical-line"></div>
              <div className="d-flex flex-column w-100">
                <p className="m-0 p-0 docname"> Dr.Karunakaran S</p>
                <p className="mb-0 d-flex welcome text-black">Spine center</p>
              </div>
            </div>
            <Menu
             style={{ marginTop: "3px" }}
             onClick={({ key }) =>{ navigate(key);
          
             }}
             openKeys={openKeys}
             onOpenChange={handleOpenChange}
             mode="inline"
             items={items1}
            ></Menu>
          </Sider>
          <Layout>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <FaHome className="me-1" />
                {checklocation}
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content>
              <div className=" content-wrapper mb-3 ms-0  ">{children}</div>
            </Content>
          </Layout>
        </Layout>
        <Layout>
          <Footer
            className="antfooter"
            style={{
              textAlign: "center",
            }}
          >
            ©{new Date().getFullYear()}.prami.com
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
