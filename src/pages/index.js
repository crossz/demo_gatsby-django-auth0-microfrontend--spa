import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Router } from "@reach/router";
import { App } from "../app";
import { Auth0ProviderWithHistory } from "../auth0-provider-with-history";
import { EnvProvider } from "../context/env.context";
import "../styles/styles.css";

const Index = () => {
return (
      <EnvProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </EnvProvider>
)
}

export default Index;