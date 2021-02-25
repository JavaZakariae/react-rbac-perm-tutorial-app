# Goal

This project is used as a POC for implementing RBAC in a React application with permissions coming from authO.
It is a small modification of https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/ where roles have been replaced by permissions coming from the auth server.

# Setup

Before you can start you have to register an application on auth0 and copy the secrets in src/auth0-variables.js
export const AUTH_CONFIG = {
	domain: "dev-xxxxxxxxx.eu.auth0.com",
	permissionUrl: "https://rbac-tutorial-app/permissions",
	clientId: "xxxxxxxx",
	callbackUrl: "http://localhost:3001/callback"
};

# Start app
npm init
npm start 