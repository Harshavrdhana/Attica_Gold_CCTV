<<<<<<< HEAD
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
=======
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HostLayout from './components/layout/HostLayout';
import Login from './components/login_register/Login';
import Register from './components/login_register/Register';
import Section from './components/mainContent/Section';
import AuthRequired from './components/authentication/AuthRequired';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route element={<AuthRequired />}>
          <Route path='/' element={<HostLayout />}>
            <Route path='section' element={<Section />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
>>>>>>> b4120d03eab90e5631f457f5ffd3570bd08f0c25
  );
}

export default App;