import { Switch, Redirect, Route } from "react-router-dom";
import React from "react";
import AdminAuthenticatedRoute from "./adminAuthenticatedRoute";
import StudentAuthenticatedRoute from "./studentAuthenticatedRoute";
import SubscriptionPage from "../admin/subscription";
import AttendancePage from "../student/attendance";
import Login from "../login";

export default function Routes(props) {
  return (
    <>
      <Switch>
        <AdminAuthenticatedRoute
          component={SubscriptionPage}
          path="/subscription"
          exact
        />
        <StudentAuthenticatedRoute
          component={AttendancePage}
          path="/attendance"
          exact
        />
        <Route component={Login} path="/login" exact />
        <Redirect from="/" to="/login" />
      </Switch>
    </>
  );
}
