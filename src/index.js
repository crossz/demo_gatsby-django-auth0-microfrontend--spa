import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
// import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
// import { EnvProvider } from "./context/env.context";
import "./styles/styles.css";

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/spa1"> */}
    <BrowserRouter>
      {/* <EnvProvider> */}
        <Auth0ProviderWithNavigate>
          <App />
        </Auth0ProviderWithNavigate>
        {/* <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory> */}
      {/* </EnvProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
