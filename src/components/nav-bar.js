import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "@reach/router";
import { AuthenticationButton } from "./buttons/authentication-button";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <Link to="/">
            <img
              className="nav-bar__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="Auth0 shield logo"
              width="35.98"
              height="40"
            />
          </Link>
        </div>
        <div className="nav-bar__tabs">
          <Link
            to="/profile"
            
            className="nav-bar__tab"
            
          >
            Profile
          </Link>
          <Link
            to="/external-api"
            
            className="nav-bar__tab"
            
          >
            External API
          </Link>
        </div>
        <div className="nav-bar__actions">
          <AuthenticationButton />
        </div>
      </nav>
    </div>
  );
};
