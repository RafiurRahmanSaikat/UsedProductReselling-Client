import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51M6z31Kmdh1q09CFlXwHxDE9SuNf5ccD7zB2lZgsGaqDeBzlWgaJKYscFsleovXCjsmZxog9vcxqVsODbYKq1Rxe00KuXjiCSg"
);

const Payment = () => {
  let { id } = useParams();
  const [payForBike,setPayForBike]=useState(null)
  console.log(id);


  const { data, refetch, isLoading } = useQuery({
    queryKey: ["payment",id ],
    queryFn: async () => {
      const res = await fetch(`https://dream-bike-theta.vercel.app/payment/${id}`);

      const data = await res.json();
      setPayForBike(data?.[0])
      return data;
    },
  });









  return payForBike &&  ( 
    <section className="">
      <Elements stripe={stripePromise}>
        <CheckOutForm data={payForBike}></CheckOutForm>
      </Elements>
    </section>
  );
};

export default Payment;
