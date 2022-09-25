import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
  <Auth0Provider
    domain="dev-wk73ll3k.us.auth0.com"
    clientId="9C2F6Ghita6SonmgnNAQfI4VBytYaTUi"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </AppProvider>
  
);
