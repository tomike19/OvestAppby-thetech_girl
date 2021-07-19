/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import profile from "../../assets/profile.png";
import caret from "../../assets/caret.svg";
import notification from "../../assets/Notification.svg";
import { ReactComponent as ArrowIcon } from "./assests/caret.svg";
import navlogout from "../../assets/navlogout.svg";
import navprofile from "../../assets/navprofile.svg";
import "./navleft.css";
import { useUser } from "../../../../../hooks/use-user";
import { Util } from "../../../../../helpers/util";

function NavRight(props) {
  return (
    <ul className="navright-nav">
      {/* {props.children} */}
      <NavItem icon={<ArrowIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </ul>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  // const [activeMenu, setActiveMenu] = useState("main");
  const user = useUser();
  const { lastname, firstname } = user;

  return (
    <>
      <li className="nav-item">
        <img
          width="30"
          className="notification"
          src={notification}
          alt="avatar"
        />
      </li>
      <li className="nav-item">
        <Avatar
          alt="Travis Howard"
          src={profile}
          style={{
            border: "5px solid #fec59a",
            // padding: "px",
          }}
        />
      </li>

      <li className="nav-item" onClick={() => setOpen(!open)}>
        <a className="ml-3">
          {firstname} {lastname}
          <img width="10" className="ml-2" src={caret} alt="avatar" />
        </a>
        {open && props.children}
      </li>
    </>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [, /* menuHeight */ setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props) {
    const handleClick = (...args) => {
      if (props.gotoMenu) {
        setActiveMenu(props.goToMenu);
      }

      if (props.onClick) {
        props.onClick(...args);
      }
    };
    return (
      <a href="#" className="menu-item" onClick={handleClick}>
        {/* <span className="icon-button">{props.leftIcon}</span> */}
        {props.children}
        {/* <span className="icon-right">{props.rightIcon}</span> */}
      </a>
    );
  }
  return (
    <div
      className="dashboarddropdown"
      style={{ height: "128px" }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem style={{ color: "" }}>
            <Link to="/dashboard/account" className="menu-item">
              <img
                src={navprofile}
                alt="nav-profile-logo"
                className="icon-button  pr-3"
              />
              <p
                style={{
                  color: "#666666",
                  marginTop: "8px",
                }}
              >
                Profile
              </p>
            </Link>
          </DropdownItem>

          <DropdownItem onClick={Util.dispatchLogoutUser}>
            <img
              src={navlogout}
              alt="nav-logout-logo"
              className="icon-button pr-3"
            />
            <p
              style={{
                color: "#DD0707",
                marginTop: "8px",
              }}
            >
              Logout
            </p>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavRight;
