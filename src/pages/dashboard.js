import React from "react";
import { Redirect } from "react-router-dom";

import CanUser from "../components/CanUser";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import PostsList from "../components/PostsList";

const DashboardPage = () => (
  <CanUser
    perform="dashboard-page:visit"
    yes={() => (
      <div>
        <h1>Dashboard</h1>
        <Logout />
        <Profile />
        <PostsList />
      </div>
    )}
    no={() => <Redirect to="/" />}
  />
);

export default DashboardPage;