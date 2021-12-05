import React from "react";
import ContactCatch from "./ContactCatch";
import Dext from "./Dext";
import FeaturesSection from "./FeaturesSection";
import FocusCatch from "./FocusCatch";
import Hero from "./Hero";
import Intro from "./Intro";
import Qualifications from "./Qualifications";
import Services from "./Services";
import Testimonials from "./Testimonials";

import Navbar from "../Navbar";

export default function Home(props) {
  return (
    <div className="Home">
      <Navbar toggleNavbar={props.toggleNavbar} state={props.state} />
      <Hero />
      <Intro />
      <Services />
      <FocusCatch />
      <Testimonials />
      <Dext />
      <FeaturesSection />
      <ContactCatch />
      <Qualifications />
    </div>
  );
}
