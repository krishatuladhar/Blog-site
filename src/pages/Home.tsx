import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Card/>
    </div>
  );
};

export default Home;
