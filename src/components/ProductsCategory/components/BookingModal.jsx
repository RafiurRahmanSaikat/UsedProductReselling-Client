import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";
const BookingModal = ({ data }) => {
  const { user, loading } = useContext(AuthContext);
  const {
    _id,
    used,
    sellingPrice,
    sellername,
    orginalPrice,
    model,
    location,
    condition,
    brand,
    email,
  } = data;

  const SUBMIT = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;

    const ConfrimBook = {
      customerName: user?.displayName,
      customerEmail: user?.email,
      customerPhone: phone,
      bikeID: _id,
      data,
      sellingPrice,
      paid: false,
    
    };
    fetch(`https://dream-bike-theta.vercel.app/updatestatus/?id=${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ booked: true }),
    })
      .catch((error) => console.error(error))
      .then((res) => {
        fetch("https://dream-bike-theta.vercel.app/bookbike", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ConfrimBook),
        }).then((res) => toast.success("Bike Booked !"));
      })
      form.reset()
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Model : {model}</h3>
          <form onSubmit={SUBMIT} className="flex flex-col">
            <input
              name="name"
              type="text"
              defaultValue={sellername}
              readOnly
              placeholder="Seller Name "
              className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
            />
            <input
              name="email"
              type="email"
              defaultValue={email}
              readOnly
              placeholder="Seller Email address"
              className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
            />
            <p className="flex justify-between font-semibold">
              <input
                name="brand"
                type="text"
                defaultValue={brand}
                readOnly
                placeholder="Brand "
                className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
              />
              <input
                name="model"
                type="text"
                defaultValue={model}
                readOnly
                placeholder="Bike Model Name "
                className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
              />
            </p>

            <p className="flex justify-between font-semibold">
              Bike Condition{" "}
              <input
                name="condition"
                type="text"
                defaultValue={condition}
                readOnly
                placeholder="Condition "
                className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
              />
            </p>

            <p className="flex justify-between font-semibold">
              Selling Price =
              <input
                name="sellingPrice"
                type="number"
                defaultValue={sellingPrice}
                readOnly
                placeholder="Bike Price "
                className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
              />
            </p>

            <p className="flex justify-between font-semibold">
              Your Mobile Number
              <input
                name="phone"
                type="number"
                placeholder="Your Mobile Number"
                className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
              />
            </p>
            <p className="flex justify-between font-semibold">
              Your Location
              <input
                name="location"
                type="text"
                placeholder="Your Location"
                className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800"
              />
            </p>

            <button type="submit" className="btn btn-warning mx-auto">
              Confrim Boking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
