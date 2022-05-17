import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { EnvProvider } from "./context/env.context";
import "./styles/styles.css";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/spa1">
      <EnvProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </EnvProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
