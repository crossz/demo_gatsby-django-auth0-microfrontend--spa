import React, { Fragment } from "react";
import { HeroBanner } from "./hero-banner";
import { Auth0Features } from "./auth0-features";

const Home = () => (
  <Fragment>
    <HeroBanner />
    <Auth0Features />
  </Fragment>
);

export default Home;
