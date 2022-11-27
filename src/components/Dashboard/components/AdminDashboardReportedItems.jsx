import React from "react";
import { toast } from "react-toastify";
import useRepotedData from "../../../Hooks/useRepotedData";

const AdminDashboardReportedItems = () => {
  const DATA = useRepotedData();

  const DELETE = (id) => {
    fetch(`https://dream-bike-theta.vercel.app/delete/?id=${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info("Delete Succsessful");
        window.location.reload();
      });
  };

  return (
    <section>
      {DATA?.length === 0 ? (
        <p className="text-5xl text-red-700">No Data Found </p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Bike Brand Name</th>
                <th>Bike Model</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Bike Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {DATA?.map((bikes) => (
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

                  <td>{bikes?.sellername}</td>
                  <td>{bikes?.email}</td>

                  <td>{bikes?.sellingPrice} /TK</td>
                  <th className="space-x-3">
                    <button
                      onClick={() => DELETE(bikes?._id)}
                      className="btn btn-error btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminDashboardReportedItems;
