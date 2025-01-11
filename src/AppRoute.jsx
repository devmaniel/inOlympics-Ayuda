import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Announcement_Page from "./views/Announcement_Page";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/sign_up" />} />
    <Route path="/sign_in" element={<SignIn />} />
    <Route path="/sign_up" element={<SignUp />} />

    <Route path="/home" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/announcement_page" element={<Announcement_Page />} />
    <Route path="*" />
  </Routes>
);

export default AppRoute;
