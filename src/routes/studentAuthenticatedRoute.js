import React from "react";
import {Route} from "react-router-dom";
import UnAuthorizedPage from "../un-authorized";
export default function StudentAuthenticatedRoute({
  component: C,
  path_url,
  ...rest
}) {
  const canAccessPage = () => {
    const userType = sessionStorage.getItem('userType');
    return (userType === "student") ? true : false;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        canAccessPage() ? <C {...props} /> : <UnAuthorizedPage />
      }
    />
  );
}
