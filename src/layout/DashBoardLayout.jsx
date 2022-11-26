import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AdminDashboardSeller from "../components/Dashboard/components/AdminDashboardSeller";
import MyOrdersDashboard from "../components/Dashboard/components/MyOrdersDashboard";
import MyProductDashboard from "../components/Dashboard/components/MyProductDashboard";

import { AuthContext } from "../context/AuthProvider";

const DashBoardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
const [ReLoadData,setReLoadData]=useState(true)
  const [MyOrders, setMyOrders] = React.useState(null);
  const [ProductData, setProductData] = React.useState(null);

  const MyOrdersData = () =>{
    useEffect(() => {
      axios
        .get(`https://dream-bike-theta.vercel.app/myorders/?search=${email}`,{
          headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      })
        .then((res) => {
          setMyOrders(res.data);
        });
    }, []);
  }

  const MyProductData = () =>{
    useEffect(() => {
      axios
        .get(`https://dream-bike-theta.vercel.app/myproducts/?search=${email}`)
        .then((res) => {
          setProductData(res.data);
        });
    }, [email,ReLoadData]);
  }


  const AdminData = (role) =>{
    useEffect(() => {
      axios
        .get(`https://dream-bike-theta.vercel.app/admindata/?search=${role}`)
        .then((res) => {
          setProductData(res.data);
        });
    }, [ReLoadData]);
  }

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["category", email],
    queryFn: async () => {
      const res = await fetch(`https://dream-bike-theta.vercel.app/users/?search=${email}`);
      const data = await res.json();
      return data;
    },
  });

  if (data?.[0]?.role === "seller") {

    return (<MyProductDashboard  MyProductData={MyProductData()} ReLoadData={ReLoadData} setReLoadData={setReLoadData} ProductData={ProductData}></MyProductDashboard>);
  }
  if (data?.[0]?.role === "buyer") {
   
    return (<MyOrdersDashboard MyOrdersData={MyOrdersData()}  ReLoadData={ReLoadData} setReLoadData={setReLoadData} MyOrders={MyOrders}></MyOrdersDashboard>);
  } else {
   
    return <AdminDashboardSeller AdminData={AdminData()}></AdminDashboardSeller>;
  }
};

export default DashBoardLayout;
