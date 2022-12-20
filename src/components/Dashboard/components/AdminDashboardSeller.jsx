import React from "react";
import { toast } from "react-toastify";
import Loading from "../../../common/Loading";
import useAdminData from "../../../Hooks/UseAdminData";
const AdminDashboardSeller = () => {
  const DATA = useAdminData("seller");

  const VERIFY = (id, email = null) => {
    fetch(
      `https://dream-bike-theta.vercel.app/updateuserstatus/?id=${id}&email=${email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ verified: true }),
      }
    )
      .then((res) => {
        toast.success("Seller Verified ");
      })
      .catch((error) => {
        toast.error(error, error.massage);
        console.error(error);
      });
  };
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
  <> 
   <section>
    {
      DATA?<>{DATA?.length === 0 ? (
        <p className="text-5xl text-red-700">No Data Found </p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {DATA &&
                DATA?.map((item) => (
                  <tr key={item?._id}>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>
                      <button
                        onClick={() => DELETE(item?._id)}
                        className="btn m-4 btn-error text-white btn-xs"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => VERIFY(item?._id, item?.email)}
                        className="btn btn-info text-white btn-xs"
                      >
                        Verify
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}</>: <Loading></Loading>
    }

      


      
    </section>
  </>

   
  );
};

export default AdminDashboardSeller;
