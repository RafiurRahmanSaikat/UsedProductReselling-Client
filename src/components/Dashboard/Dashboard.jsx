import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../common/NavBar";

const Dashboard = () => {
 

  return (
    <section>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="DashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

          <Outlet></Outlet>

          {/* <!-- Page content here --> */}

        </div>

        <div className="drawer-side">
          <label htmlFor="DashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-8  w-80 bg-base-100 text-center text-base-content">
            <li className="">
              <Link to='/dashboard/myorders'>My Orders</Link>
            </li>
            <li className="">
              <Link to="/dashboard/addproduct">Add A Product</Link>
            </li>
            <li className="">
              <Link to='/dashboard'>All Seller</Link>
            </li>
            <li className="">
              <Link to='/dashboard'>All Buyers </Link>
            </li>
            <li className="">
              <Link to='/dashboard'>Reported Items </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
