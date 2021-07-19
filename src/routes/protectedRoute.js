import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
// import { token } from "../redux/selectors/auth.selector";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    return () => {
      console.log("StateUser: ", user);
    };
  }, [user]);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.currentUser && user.token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
