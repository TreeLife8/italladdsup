import React, { useState } from "react";
import "./App.css";
import Home from "./components/homePage/Home";
import Packages from "./components/packagePage/Packages";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [state, toggle] = useState(false);
  function toggleNavbar() {
    toggle(!state);
  }
  function handleTouch() {
    if (state) {
      toggleNavbar();
    }
  }
  return (
    <div className="App" onClick={handleTouch}>
      <Navbar toggleNavbar={toggleNavbar} state={state} />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Packages" element={<Packages />} />
      </Routes>
      <Footer />
    </div>
  );
}
