import React from "react";
import { Link } from "react-router-dom";
import UserDashboard from "./components/UserDashboard";

const Dashboard = () => {
  const menu = (
    <>
      <li className="btm-nav">
        <Link>My Orders</Link>
      </li>
      <li className="btm-nav">
        <Link>Add A Product</Link>
      </li>
      <li className="btm-nav">
        <Link>All Seller</Link>
      </li>
      <li className="btm-nav">
        <Link>All Buyers </Link>
      </li>
      <li className="btm-nav">
        <Link>Reported Items </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id=" DashboardDrawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content ">
          <section>
            <UserDashboard></UserDashboard>
          </section>
        </div>
        <div className="drawer-side">
          <label htmlFor=" DashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu  w-80 bg-base-100 text-base-content">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
