import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
  <Auth0Provider
    domain="dev-uw288gvy.us.auth0.com"
    clientId="fHE15mB4kNx4VhtgCWKp881B2gKCrCsv"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </AppProvider>
  
);
