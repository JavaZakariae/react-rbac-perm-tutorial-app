import React, { Component } from "react";
import auth0 from "auth0-js";

import { AUTH_CONFIG } from "../auth0-variables";
import { AuthProvider } from "../authContext";
import rbac_rules from "../rbac-rules";

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: "token id_token"
});

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      permissions: rbac_rules.visitor.static
    },
    accessToken: ""
  };

  initiateLogin = () => {
    auth.authorize();
  };

  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        permissions: rbac_rules.visitor.static
      },
      accessToken: ""
    });
  };

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error);
        console.log(`Error ${error.error} occured`);
        return;
      }

      this.setSession(authResult.idTokenPayload);
    });
  };

  setSession(data) {
    const user = {
      id: data.sub,
      email: data.email,
      permissions: data[AUTH_CONFIG.permissionUrl]
    };
    this.setState({
      authenticated: true,
      accessToken: data.accessToken,
      user
    });
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;