import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLayout from "./components/layout/HostLayout";
import Login from "./components/login_register/Login";
import Register from "./components/login_register/Register";
import Section from "./components/mainContent/Section";
import AuthRequired from "./components/authentication/AuthRequired";
import ForgotPassword from "./components/login_register/ForgotPassword";
import HomePage from "./components/homepage/HomePage";
import HomeLayout from "./components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IntroPage from "./components/homepage/IntroPage";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route element={<AuthRequired />}>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="homepage" element={<HostLayout />}>
                <Route index element={<IntroPage/>}/> 
                <Route path="section" element={<Section />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
