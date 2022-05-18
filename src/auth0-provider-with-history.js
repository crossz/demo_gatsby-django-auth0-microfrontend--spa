import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEnv } from "./context/env.context";
import { config } from "./config";

export const Auth0ProviderWithHistory = ({ children }) => {
  // const history = useHistory();
  const navigate = useNavigate();
  const { domain, clientId, audience } = useEnv();

  const onRedirectCallback = (appState) => {
    // console.log('----==== appState?.returnTo: ', appState?.returnTo)
    if(appState.returnTo){
      navigate(appState.returnTo.slice(config.ROUTER_BASE_URL.length));
    } else {
      navigate(window.location.pathname);
    }
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
    >
      {children}
    </Auth0Provider>
  );
};
