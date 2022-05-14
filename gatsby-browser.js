import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import { useEnv } from "./src/context/env.context";

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || "/", { replace: true });
};

const Auth0BaseApp = ({ element }) => {
  const { domain, clientId, audience } = useEnv();
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};

// In order to use React hooks in wrapRootElement.
const Wrapper = ({ element }) => {
  return <Auth0BaseApp element={element} />;
};

export const wrapRootElement = Wrapper;
