import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLayout from "./components/layout/HostLayout";
import Login from "./components/login_register/Login";
import Register from "./components/login_register/Register";
import Section from "./components/mainContent/Section";
import AuthRequired from "./components/authentication/AuthRequired";
import ForgotPassword from "./components/login_register/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />s
        <Route element={<AuthRequired />}>
          <Route path="/" element={<HostLayout />}>
            <Route path="section" element={<Section />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
