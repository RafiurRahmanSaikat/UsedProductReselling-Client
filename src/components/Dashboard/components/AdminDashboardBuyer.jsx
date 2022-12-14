import React from "react";
import { toast } from "react-toastify";
import Loading from "../../../common/Loading";
import useAdminData from "../../../Hooks/UseAdminData";
const AdminDashboardBuyer = () => {
  const DATA = useAdminData("buyer");

  const DELETE = (id) => {
    fetch(`https://dream-bike-theta.vercel.app/deleteuser/?id=${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        toast.info("Delete Succsessful");
        
      });
  };

  return (
    <section>

     { DATA ? 
      <>
      {DATA?.length === 0 ? (
        <p className="text-5xl text-red-700">No Data Found </p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {DATA &&
                DATA?.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        onClick={() => DELETE(item._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete User
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      </>
      :<Loading></Loading>}
    </section>
  );
};

export default AdminDashboardBuyer;
