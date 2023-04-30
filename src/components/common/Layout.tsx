import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
