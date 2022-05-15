import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from "./nav-bar";
import { Loader } from "./loader";
import { Footer } from "./footer";

const Layout = ({ children }) => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="page-layout">
        <div className="page-layout__content">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Layout;