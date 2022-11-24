import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
