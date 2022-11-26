import React from "react";
import { toast } from "react-toastify";

const MyProductDashboard = ({ ProductData, ReLoadData, setReLoadData }) => {
  
  const Advertise = (id) => {
    fetch(`https://dream-bike-theta.vercel.app/updatestatus/?id=${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ advertise: true }),
    })
      .then((res) => toast.success("Advertising Items"))
      .catch((error) => {
        toast.error(error, error.massage);
        console.error(error);
      });
  };

  const DeletBike = (id) => {
    fetch(`https://dream-bike-theta.vercel.app/delete/?id=${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReLoadData(!ReLoadData);

        toast.info("Delete Succsessful");
      });
  };


  return (
    ProductData && (
      <>
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Bike Model</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {ProductData?.map((bikes) => (
                <tr key={bikes._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={bikes?.bikePic} alt="Wait" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bikes?.brand}</div>
                      </div>
                    </div>
                  </td>

                  <td>{bikes?.model}</td>

                  {bikes?.sold ? <td>Sold</td> : <td>UnSold</td>}

                  <td>{bikes?.sellingPrice} /TK</td>

                  {bikes?.sold || (
                    <th className="space-x-3">
                      <button
                        onClick={() => Advertise(bikes?._id)}
                        className="btn btn-primary btn-xs"
                      >
                        Advertise
                      </button>
                      <button
                        onClick={() => DeletBike(bikes?._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete
                      </button>
                    </th>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  );
};

export default MyProductDashboard;
