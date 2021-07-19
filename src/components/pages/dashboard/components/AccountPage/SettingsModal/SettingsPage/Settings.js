import React from 'react'
import ProfileImage from "../../../../assets/Profileimage.svg";
import Arrowright from "../../../../assets/Arrowright.svg";
import "../SettingsModal.css";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import FormGroup from "@material-ui/core/FormGroup";

const Settings = ({setSection}) =>
{
  //Material-ui Button Styles//
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 32,
      height: 20,
      padding: 0,
      position: "relative",
      left: "12px",
      top: "2px",
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: "white",

        "& + $track": {
          backgroundColor: "#FD740E",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#ffffff",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 14,
      height: 17,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[500],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="settings-section">
      <div className="settings-header">
        <h1>Account Settings</h1>
        <img src={ProfileImage} alt="" className="settings-image" />
      </div>
      <div className="settings-page">
        <div
          className="settings-details"
          onClick={() => {
            setSection(1);
          }}
        >
          <p>Personal Information</p>
          <img src={Arrowright} alt="" className="legal-arrow" />
        </div>
      </div>
      <div className="setting-page">
        <div
          className="settings-details "onClick={() =>
          {
            setSection( 4 );
          }}
        >
          <p>Security </p>
          <img src={Arrowright} alt="" className="legal-arrow" />
        </div>
      </div>
      <div className="setting-page">
        <div
          className="settings-details"
          onClick={() => {
            setSection(3);
          }}
        >
          <p>Next of Kin</p>
          <img src={Arrowright} alt="" className="legal-arrow" />
        </div>
      </div>
      <div className="setting-page">
        <div className="settings-details">
          <p>Hide Balance</p>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                  />
                }
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings
