import React from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import FormGroup from "@material-ui/core/FormGroup";



const Moden = () =>
{ 
  //Material-ui Button Styles//
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 32,
      height: 20,
      padding: 0,
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
      transition: theme.transitions.create( ["background-color", "border"] ),
      
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
    <div>
      <div className="Account">
        <div>
          <p>Enable Dark Moden</p>
        </div>
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
  );
};

export default Moden;
