import React from "react";

import { AuthConsumer } from "../authContext";
import CanUser from "./CanUser";

const Profile = () => (
  <AuthConsumer>
    {({ user }) => (
      <CanUser
        perform="users:getSelf"
        yes={() => (
          <div>
            <h2>User Profile</h2>
            <ul>
              <li>ID: {user.id}</li>
              <li>Email: {user.email}</li>
              <li>Permissions: {JSON.stringify(user.permissions)}</li>
            </ul>
          </div>
        )}
        no={() => (
          <div>
            <h2>User Profile</h2>
            <ul>
              <li>Email: {user.email}</li>
            </ul>
          </div>
        )}
      />
    )}
  </AuthConsumer>


);

export default Profile;