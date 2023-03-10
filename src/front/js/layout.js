import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { AboutUs } from "./pages/aboutUs";
import { ContactUs } from "./pages/contactUs";
import { MyHome } from "./pages/myHome";
import { Messages } from "./pages/messages";
import { ShuddleVisit } from "./pages/schuddleVisit";
import { ExitPermit } from "./pages/exitPermit";

import { MeetPage } from "./pages/MeetPage";
import { StartupPage } from "./pages/StartupPage";
import { ThankYou } from "./pages/ThankYouPage";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<AboutUs />} path="/aboutUs" />
            <Route element={<ContactUs />} path="/contactUs" />
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<MyHome />} path="/myHome" />
            <Route element={<Messages />} path="/messages" />
            <Route element={<ShuddleVisit />} path="/schuddleVisit" />
            <Route element={<ExitPermit />} path="/exitPermit" />
            <Route element={<StartupPage />} path="/startmeet" exact />
            <Route element={<MeetPage />} path="/meet/:id" exact />
            <Route element={<ThankYou />} path="/meet-thank-you" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
