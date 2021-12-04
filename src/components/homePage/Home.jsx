import React from "react";
import FocusCatch from "./FocusCatch";
import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Intro />
      <Services />
      <FocusCatch />
    </div>
  );
}
