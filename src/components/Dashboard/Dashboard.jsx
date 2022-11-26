import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../common/Loading";
import Navbar from "../../common/NavBar";
import { AuthContext } from "../../context/AuthProvider";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["category", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/?search=${email}`);
      const data = await res.json();
      return data;
    },
  });
  return loading || isLoading ? (
    <Loading></Loading>
  ) : (
    <>
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
            {data?.[0]?.role === "seller" ? (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard">My Product</Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {data?.[0]?.role === "admin" ? (
              <>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">All Buyers </Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {data?.[0]?.role === "buyer" ? (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
