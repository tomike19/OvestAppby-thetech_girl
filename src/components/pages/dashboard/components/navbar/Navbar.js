import React, { useState } from "react";
import "./Navbar.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
import profile from "../../assets/profile.png";
import caret from "../../assets/caret.svg";

import notification from "../../assets/Notification.svg";
import useAuth from "../../../../../hooks/useAuth";
import NavLeft from "./NavbarRight";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const Navbar = ({ sidebarOpen, openSidebar }) => {
  // const [acountOpen, setAccountOpen] = useState(false);
  // const { user } = useAuth();
  // const { lastname, firstname } = user.currentUser;
  return (
    <nav
      className="Navbar"
      style={
        {
          // background: "black",
        }
      }
    >
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      {/* <div className="nav"> */}
      <div className="navbar__left">
        <h1>ACCOUNT OVERVIEW</h1>
      </div>

      {/* </div> */}

      <div className="navbar__right ml-2">
        <NavLeft />
      </div>
    </nav>
  );
};

export default Navbar;
