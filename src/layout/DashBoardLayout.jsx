import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AdminDashboard from "../components/Dashboard/components/AdminDashboard";
import MyOrdersDashboard from "../components/Dashboard/components/MyOrdersDashboard";
import MyProductDashboard from "../components/Dashboard/components/MyProductDashboard";

import { AuthContext } from "../context/AuthProvider";

const DashBoardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
const [ReLoadData,setReLoadData]=useState(true)
  const [Orders, setOrders] = React.useState(null);
  const [ProductData, setProductData] = React.useState(null);

  const OrdersData = () =>{
    useEffect(() => {
      axios
        .get(`http://localhost:5000/myproducts/?search=${email}`)
        .then((res) => {
          setOrders(res.data);
        });
    }, []);
  }

  const MyProductData = () =>{
    useEffect(() => {
      axios
        .get(`http://localhost:5000/myproducts/?search=${email}`)
        .then((res) => {
          setProductData(res.data);
        });
    }, [email,ReLoadData]);
  }

// console.log("Order",Orders,"ProductData",ProductData);
 

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["category", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/?search=${email}`);
      const data = await res.json();
      return data;
    },
  });

  if (data?.[0]?.role === "seller") {

    return (<MyProductDashboard  MyProductData={MyProductData()} ReLoadData={ReLoadData} setReLoadData={setReLoadData} ProductData={ProductData}></MyProductDashboard>);
  }
  if (data?.[0]?.role === "buyer") {
    OrdersData()
    return <MyOrdersDashboard></MyOrdersDashboard>;
  } else {
   
    return <AdminDashboard></AdminDashboard>;
  }
};

export default DashBoardLayout;
