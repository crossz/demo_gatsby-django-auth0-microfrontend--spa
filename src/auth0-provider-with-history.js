import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
// import { useHistory } from "react-router-dom";
import { useEnv } from "./context/env.context";

export const Auth0ProviderWithHistory = ({ children }) => {
  const { domain, clientId, audience, redirectUri } = useEnv();
  
  // const history = useHistory();
  // const redirectUrionRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      // onRedirectCallback={onRedirectCallback}
      onRedirectCallback={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};
