import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Footer } from "./components/footer";
import { Loader } from "./components/loader";
import { NavBar } from "./components/nav-bar";
// import { ProtectedRoute } from "./components/protected-route";
import { ExternalApi } from "./pages/external-api";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";

const ProfileElement = withAuthenticationRequired(Profile, { onRedirecting: () => <Loader />,})
const ExternalApiElement = withAuthenticationRequired(ExternalApi, { onRedirecting: () => <Loader />,})

export const App = () => {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileElement />} />
          <Route path="/external-api" element={<ExternalApiElement />} />
          <Route path="/" exact element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
