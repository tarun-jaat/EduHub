import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Main/Dashboard";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import VerifyEmail from "./Components/Core/Auth/VerifyEmail";
import ForgotPassword from "./Components/Core/Auth/ForgotPassword";
import LiveClasses from "./Pages/Main/LiveClasses";
import { useLocation } from 'react-router-dom';

// import { SocketProvider } from "./Context/SocketProvider";
import SideBar from "./Components/Core/Main/SideBar";
import Chat from "./Pages/Messages/Chat";
import Insights from "./Pages/Main/Insights";
import Profile from "./Pages/Main/Profile";
import Setting from "./Pages/Main/Setting";
import Broadcastemail from "./Pages/Main/Email/Broadcastemail";
// import Interface from "./Pages/Bhaiya/Interface";
// import Navbar from "./Components/Common/NavBar.js/Navbar";
function App() {
  const location = useLocation();

  return (
    <div className="flex bg-primary justify-between">
      {location.pathname!== "/" && location.pathname!=="/dashboard/insights"? (
        <PrivateRoute>
          <SideBar />
        </PrivateRoute>
      ) : null}
        <Routes >
        <Route path="/" element={<Home />} />
        
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/Live-Classes"
          element={
            <PrivateRoute>
              <LiveClasses />
            </PrivateRoute>
          }
        />
      <Route
          path="/dashboard/Messages"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/insights"
          element={
            <PrivateRoute>
              <Insights/>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/Profile"
          element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }
        />
        <Route
        path="/dashboard/settings"
        element={
          <PrivateRoute>
            <Setting/>
          </PrivateRoute>
        }/>
        <Route
        path="/dashboard/Email"
        element={
          <PrivateRoute>
            <Broadcastemail/>
          </PrivateRoute>
        }/>
      </Routes> 
      
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
