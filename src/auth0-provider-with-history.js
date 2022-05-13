import { Auth0Provider } from "@auth0/auth0-react";
// import { navigate } from "@reach/router";
import { navigate } from 'gatsby';
import React from "react";
// import { useHistory } from "react-router-dom";
import { useEnv } from "./context/env.context";

export const Auth0ProviderWithHistory = ({ children }) => {
  const { domain, clientId, audience } = useEnv();
  
  // const history = useHistory();
  // const onRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  // ## https://github.com/auth0/auth0-react/blob/master/EXAMPLES.md#2-protecting-a-route-in-a-gatsby-app
  const onRedirectCallback = (appState) => {
    // Use Gatsby's navigate method to replace the url
    // console.log(appState)
    navigate(appState?.returnTo || '/', { replace: true });
  };


  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      // redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};
