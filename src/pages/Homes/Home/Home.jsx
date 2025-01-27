import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HeroSetion from "../HeroSetion/HeroSetion";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import Services from "../Service/Services";
import Featured from "../../../shared/Featured/Featured";
import Testimonials from "../../../shared/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <HeroSetion />
      <Menu />
      <Contact />
      <Services />
      <Featured />
      <Testimonials />
      
    </>
  );
};

export default Home;
