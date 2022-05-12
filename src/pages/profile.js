import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../components/code-snippet";


// import { BrowserRouter } from "react-router-dom";

import { Auth0ProviderWithHistory } from "../auth0-provider-with-history";
import { EnvProvider } from "../context/env.context";
import "../styles/styles.css";
// import { NavBar } from "../components/nav-bar";


const Profile1 = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <>
    {/* <NavBar /> */}
    <div className="content-layout">
      <h1 className="content__title">Profile</h1>
      <div className="content__body">
        <p>
          You can use the ID Token to get the profile information of an
          authenticated user.
          <br />
          <strong>Only authenticated users can access this page.</strong>
        </p>
        <div className="profile-grid">
          <div className="profile__header">
            <img src={user.picture} alt="Profile" className="profile__avatar" />
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          <div className="profile__details">
            <CodeSnippet
              title="Decoded ID Token"
              code={JSON.stringify(user, null, 2)}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


const Profile = () => {
  return (
    <React.StrictMode>
    {/* <BrowserRouter> */}
    <EnvProvider>
        <Auth0ProviderWithHistory>
        <Profile1 />
        </Auth0ProviderWithHistory>
      </EnvProvider>
    
    {/* </BrowserRouter> */}
  </React.StrictMode>
  )
  }

export default Profile;




