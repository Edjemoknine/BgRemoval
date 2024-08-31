import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Preview />
      <About />
      <Showcase />
      <Features />
      <Services />
      <Blogs />
    </>
  );
};

export default Home;
