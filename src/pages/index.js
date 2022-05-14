import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Auth0ProviderWithHistory } from "../auth0-provider-with-history";
// import { EnvProvider } from "../context/env.context";
// import { Router } from "@reach/router";
import { Footer } from "../components/footer";
import { Loader } from "../components/loader";
import { NavBar } from "../components/nav-bar";
// import { ProtectedRoute } from "./components/protected-route";
// import ExternalApi from "./pages/external-api";
// import NotFound from "./pages/404";
import Home from "../components/home";

import "../styles/styles.css";


// const Index = () => {
// return (
//       <EnvProvider>
//         <Auth0ProviderWithHistory>
//           <App />
//         </Auth0ProviderWithHistory>
//       </EnvProvider>
// )
// }

const Index = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
