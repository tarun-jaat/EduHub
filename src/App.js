import React from "react";
import Home from "./Pages/Home/Home";
import {  Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import "./App.css"
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Main/Dashboard";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import VerifyEmail from "./Components/Core/Auth/VerifyEmail";
import ForgotPassword from "./Components/Core/Auth/ForgotPassword";
// import Interface from "./Pages/Bhaiya/Interface";
// import Navbar from "./Components/Common/NavBar.js/Navbar";
function App() {
  return (
    <div className="">
      {/* <BrowserRouter> */}
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="signup" element = { <OpenRoute> <Signup /> </OpenRoute> } />
          <Route path="login" element = { <OpenRoute> <Login /> </OpenRoute> } />
          <Route path="forgot-password" element = { <OpenRoute> <ForgotPassword /> </OpenRoute> } />
          <Route path="verify-email" element = { <OpenRoute> <VerifyEmail /> </OpenRoute> } />

          <Route path="/dashboard" element = { <Dashboard />} />

        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
