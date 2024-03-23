import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLayout from "./components/layout/HostLayout";
import Login from "./components/login_register/Login";
import Register from "./components/login_register/Register";
import Section from "./components/mainContent/Section";
import ForgotPassword from "./components/login_register/ForgotPassword";

function App() {
  return (
    <ForgotPassword />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<HostLayout/>}>
    //       <Route path='login' element={<Login/>}/>
    //       <Route path='register' element={<Register/>}/>
    //       <Route path='section' element={<Section/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
