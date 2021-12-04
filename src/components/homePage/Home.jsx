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

export default function Home() {
  return (
    <div className="Home">
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
