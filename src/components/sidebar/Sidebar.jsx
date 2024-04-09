import React, { useState } from "react";
import "./sidebar.css";
import { SidebarData } from "../../data/Data";
// import { UilHome } from "@iconscout/react-unicons";



const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src="./images/shop.jpg" alt="no re" />
        <span className="lizName">SHOP</span>
      </div>
      {/*  manu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index} onClick={()=>setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
