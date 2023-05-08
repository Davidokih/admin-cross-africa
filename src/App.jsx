import React, { useState } from "react";
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import PageRouting from "./Components/PageRouting";
import Private from "./Components/Private";
import SellerRouting from "./Components/SellerRouting";
import AdminRoutePage from "./Components/AdninRoutePage"
import SignInAdmin from "./Components/Admin/SignInAdmin"
import SignUpAdmin from "./Components/Admin/SignUpAdmin"
import AdminPrivate from "./Components/AdminPrivate"
import AdminOtp from "./Components/Admin/AdminOtp"

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={ <PageRouting />} /> */}
        <Route path="/admin-dashboard/*" element={ <AdminPrivate><AdminRoutePage /></AdminPrivate>} />
        {/* <Route path="/seller-page" element={ <LandingPage />} />
        <Route path="/seller-dashboard/*" element={ <Private><SellerRouting /></Private>} /> */}
        <Route path="/login-admin" element={ <SignInAdmin /> } />
        <Route path="/signup-admin" element={ <SignUpAdmin /> } />
        <Route path="/otp-admin" element={ <AdminOtp /> } />
      </Routes>
    </div>
  );
};

export default App;