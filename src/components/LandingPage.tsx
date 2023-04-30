import React from "react";
import Layout from "./common/Layout";
import Hero from "./home/Hero";
import ThreeAnys from "./home/ThreeAnys";

const LandingPage = () => {
  return (
    <Layout>
          <Hero />
          <ThreeAnys />
    </Layout>
  );
};

export default LandingPage;
