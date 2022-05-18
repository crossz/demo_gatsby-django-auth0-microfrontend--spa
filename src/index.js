import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { EnvProvider } from "./context/env.context";
import "./styles/styles.css";
import { config } from "./config";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// console.log('--== window.location: ', window.location)
// console.log('--== window.location.pathname: ', window.location.pathname)
// console.log('--== window.location.?: ', window.location.href)
// console.log('--== window.history: ', window.history)

const params = window.location.href.slice(window.location.origin.length)
// console.log(params)
const new_url = window.location.origin + config.ROUTER_BASE_URL + params
// console.log(new_url)

if (!window.location.pathname.includes(config.ROUTER_BASE_URL)) {
  window.history.replaceState('', '', new_url);
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename={config.ROUTER_BASE_URL} >
    {/* <BrowserRouter> */}
      <EnvProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </EnvProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
