import React, { useState } from "react";
import "./App.css";
import Home from "./components/homePage/Home";
import Packages from "./components/packagePage/Packages";
import Contact from "./components/Contact";
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
      <ScrollToTop />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home state={state} toggleNavbar={toggleNavbar} />}
        />
        <Route
          exact
          path="Packages"
          element={<Packages state={state} toggleNavbar={toggleNavbar} />}
        />
        <Route
          exact
          path="Contact"
          element={<Contact state={state} toggleNavbar={toggleNavbar} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
