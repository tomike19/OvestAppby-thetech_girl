import React from 'react';
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BankAccount from './BankAccount';
import Crypto from "../Crypto/Crypto";
import BankCards from '../Card/BankCards';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1030px",
    backgroundColor: "#fff",
    height: "663px",
    marginTop: "27px",
  },
  indicator: {
    backgroundColor: "#0768F6",
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: "1030px",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="red"
        variant="50px"
        aria-label=""
        classes={{ indicator: classes.indicator }}
        className={classes.tabs}
      >
        <Tab
          label="Bank Accounts"
          {...a11yProps(0)}
          style={{
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "500",
            // fontSize: '18px',
            paddingTop: "30px",
            paddingLeft: "25px",
          }}
        />
        <Tab
          label="Crypto Wallet"
          {...a11yProps(1)}
          style={{
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "500",
            // fontSize: '18px',
            paddingTop: "30px",
          }}
        />
        <Tab
          label="Cards"
          {...a11yProps(2)}
          style={{
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "500",
            // fontSize: '18px',
            paddingTop: "30px",
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0} style={{}}>
        <BankAccount/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Crypto/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <BankCards/>
      </TabPanel>
    </div>
  );
}
