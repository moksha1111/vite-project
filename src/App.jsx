import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { About } from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main">
      <div className="routes">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
