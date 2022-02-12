import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/InfoSection/Data";
import { Maandalizi, Aina, Matunzo } from "../components/Services";
import Aboutus from "../components/About";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <Aina />
      <Maandalizi />
      <Matunzo />
      <Aboutus />
      <Footer />
    </>
  );
};

export default Home;
