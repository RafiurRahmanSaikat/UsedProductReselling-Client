import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/NavBar";

const DashBoardLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default DashBoardLayout;
