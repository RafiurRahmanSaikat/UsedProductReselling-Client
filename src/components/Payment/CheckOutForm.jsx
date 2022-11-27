import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckOutForm = ({ data }) => {
  const [successOrErrorInfo, setSuccessOrErrorInfo] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const price = +data?.sellingPrice;
  const { customerName, bikeID, _id } = data;

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://dream-bike-theta.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const UpdateDB = async (id) => {
    console.log(id);

    fetch(`https://dream-bike-theta.vercel.app/updatebookedstatus/?id=${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ paid: true }),
    })
      .then((res) => toast.success("Paymeny  Done "))
      .catch((error) => {
        toast.error(error, error.massage);
        console.error(error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Error", error);
      setSuccessOrErrorInfo(error.message);
    } else {
      setSuccessOrErrorInfo("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
          },
        },
      });
    if (confirmError) {
      setSuccessOrErrorInfo(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // ........................Update Info................ Start

      fetch(`https://dream-bike-theta.vercel.app/updatestatus/?id=${bikeID}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ advertise: false, sold: true, paid: true }),
      })
        .then((res) => {
          UpdateDB(_id);
        })
        .catch((error) => {
          toast.error(error, error.massage);
          console.error(error);
        });

      // ........................Update Info................ End

      // ........................Update Booked DB Info................ Start

      // ........................Update Booked DB Info................ End

      console.log("paymentIntent", paymentIntent);
      setSuccessOrErrorInfo(
        `${paymentIntent.status}  TranjectionID= ${paymentIntent.id}`
      );
    }
  };

  console.log("Hlw from Checkout", data);

  return (
    <section className="flex-col flex  flex-wrap m-8 mx-auto justify-center items-center ">
      <div className="w-1/2 mb-8 p-4 outline outline-4 rounded-2xl bg-white">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "20px",
                  color: "#34d399",
                  "::placeholder": {
                    color: "#aab7n4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-primary btn-circle"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
      </div>

      <p className="text-2xl text-orange-800 p-2">{successOrErrorInfo}</p>

      <div className="max-w-md p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
        <img
          src={data.data.bikePic}
          alt={data.data.bikePic}
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-red-600">
            {data.data.brand}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {data.data.model}
          </h2>
        </div>
        <p className="text-gray-800">{data.data.description}</p>
      </div>
    </section>
  );
};

export default CheckOutForm;
