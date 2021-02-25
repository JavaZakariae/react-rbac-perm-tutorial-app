import React from "react";

import {AuthConsumer} from "../authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Permissions: {JSON.stringify(user.permissions)}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;