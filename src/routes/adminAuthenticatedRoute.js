import React from "react";
import {Route} from "react-router-dom";
import UnAuthorizedPage from "../un-authorized";
export default function AdminAuthenticatedRoute({
  component: C,
  path_url,
  ...rest
}) {
  const canAccessPage = () => {
    const userType = sessionStorage.getItem('userType');
    return (userType === "admin") ? true : false;
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
