import { Auth0Provider } from "@auth0/auth0-react";
import { navigate } from "@reach/router";
import React from "react";
// import { useHistory } from "react-router-dom";
import { useEnv } from "./context/env.context";

export const Auth0ProviderWithHistory = ({ children }) => {
  const { domain, clientId, audience, redirectUri } = useEnv();
  
  // const history = useHistory();
  const onRedirectCallback = (appState) => {
    // history.push(appState?.returnTo || window.location.pathname);
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
