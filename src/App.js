import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { pick, cloneDeep } from "lodash";

import "./App.css";
import { colors } from "./components/Syles/styles";
import AppRoute from "./routes/route";
import { getProfileAction } from "./store/user/user.action";

function App({ user, getProfile }) {
  const [isLoading, setIsLoading] = useState(true);
  const {
    location: { pathname, host, protocol, href },
  } = window;
  const unProtectedPages = [
    "/",
    "/services",
    "/AboutUs",
    "/contact-us",
    "/marketing",
    "/consulting",
    "/signin",
    "/signup",
  ];
  const isProtectedPage = unProtectedPages.every((page) => page !== pathname);
  const isNotLoggedIn = !user;

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        if (isNotLoggedIn) {
          console.log("getting user profile");
          await getProfile();
        }
      } catch (error) {
        // do nothing
      } finally {
        setIsLoading(false);
      }
    })();
  }, [getProfile, isNotLoggedIn]);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="ThreeDots"
          color={colors.primary}
          height={100}
          width={100}
          timeout={1e10}
        />
      </div>
    );
  }

  if (isProtectedPage && isNotLoggedIn) {
    const base = `${protocol}//${host}`;
    const continueTo = `?continue_to=${encodeURIComponent(href)}`;
    window.location = `${base}/signin${continueTo}`;

    return null;
  }

  return <AppRoute />;
}

const mapStateToProps = (state) => pick(cloneDeep(state), ["user"]);
const mapDispatchToProps = { getProfile: getProfileAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
