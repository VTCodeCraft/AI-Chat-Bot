import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";


const AppRoutes = () => {
  return (
    <Router>
      <div className="dark bg-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
