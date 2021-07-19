import React, { useState } from "react";
import { NavLink, Nav } from "react-router-dom";

import "./Sidebar.css";
// import { useRouteMatch } from "react-router-dom";
import logo from "../../assets/logo.svg";
import dashboard from "../../assets/home-icon-whitr.png";
import invest from "../../assets/2.svg";
import savest from "../../assets/3.svg";
import transcations from "../../assets/4.svg";
import refferals from "../../assets/5.svg";
import accounts from "../../assets/6.svg";
import logout from "../../../../Assets/Logout.svg";
import activedashbaordicon from "../../../../Assets/activedashboardicon.svg";
import activeinvesticon from "../../../../Assets/activeinvesticon.svg";
import activeaccounticon from "../../../../Assets/activeaccounticon.svg";
import activereferalicon from "../../../../Assets/activerefferalicon.svg";
import activesavesticon from "../../../../Assets/activesavesticon.svg";
import activetransactionicon from "../../../../Assets/activetransactrionicon.svg";

import SidebarContent from "./SidebarContent";
import { Util } from "../../../../../helpers/util";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [url, setUrl] = useState("");

  // let match = useRouteMatch();
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>OVest</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <NavLink
          activeClassName="sidebar-menu-active"
          to="/dashboard"
          isActive={(match) => match && setUrl(match.url)}
          className={url === "/dashboard" ? "sidebar-menu-active" : ""}
        >
          <SidebarContent
            isActive={url === "/dashboard"}
            image={dashboard}
            imageActive={activedashbaordicon}
            title="Dashboard"
          />
        </NavLink>
        <NavLink
          activeClassName="sidebar-menu-active"
          to="/dashboard/invest"
          isActive={(match) => match && setUrl(match.url)}
          className={url === "/dashboard/invest" ? "sidebar-menu-active" : ""}
        >
          <SidebarContent
            isActive={url === "/dashboard/invest"}
            image={invest}
            imageActive={activeinvesticon}
            title="Invest"
          />
        </NavLink>{" "}
        <NavLink
          activeClassName="sidebar-menu-active"
          to="/dashboard/savest"
          isActive={(match) => match && setUrl(match.url)}
          className={url === "/dashboard/savest" ? "sidebar-menu-active" : ""}
        >
          <SidebarContent
            isActive={url === "/dashboard/savest"}
            image={savest}
            imageActive={activesavesticon}
            title="Savest"
          />
        </NavLink>{" "}
        <NavLink
          activeClassName="sidebar-menu-active"
          to="/dashboard/transaction"
          isActive={(match) => match && setUrl(match.url)}
          className={
            url === "/dashboard/transaction" ? "sidebar-menu-active" : ""
          }
        >
          <SidebarContent
            isActive={url === "/dashboard/transaction"}
            image={transcations}
            imageActive={activetransactionicon}
            title="Transactions"
          />
        </NavLink>{" "}
        <NavLink
          activeClassName="sidebar-menu-active"
          to="/dashboard/referral"
          isActive={(match) => match && setUrl(match.url)}
          className={url === "/dashboard/referral" ? "sidebar-menu-active" : ""}
        >
          <SidebarContent
            isActive={url === "/dashboard/referral"}
            image={refferals}
            imageActive={activereferalicon}
            title="Referrals"
          />
        </NavLink>{" "}
        <NavLink
          activeClassName="sidebar-menu-active"
          to="/dashboard/account"
          isActive={(match) => match && setUrl(match.url)}
          className={url === "/dashboard/account" ? "sidebar-menu-active" : ""}
        >
          <SidebarContent
            isActive={url === "/dashboard/account"}
            image={accounts}
            imageActive={activeaccounticon}
            title="Account"
          />
        </NavLink>
        <div className="sidebar__logout">
          <NavLink to="#">
            {" "}
            <img src={logout} alt="logout" />
            <p onClick={Util.dispatchLogoutUser}>Logout</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
