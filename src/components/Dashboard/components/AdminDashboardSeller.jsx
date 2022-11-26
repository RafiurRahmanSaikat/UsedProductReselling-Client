import React from "react";
import { toast } from "react-toastify";
import useAdminData from "../../../Hooks/UseAdminData";
const AdminDashboardSeller = () => {
  const DATA = useAdminData("seller");

  console.log("Sell", DATA);

  const VERIFY = (id,email=null) => {
    fetch(`http://localhost:5000/updateuserstatus/?id=${id}&email=${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verified: true }),
    })
      .then((res) => {
        
        
        
        
        toast.success("Seller Verified ")
      
      
      
      })
      .catch((error) => {
        toast.error(error, error.massage);
        console.error(error);
      });
  };
  const DELETE = (id) => {
    fetch(`http://localhost:5000/deleteuser/?id=${id}`, {
      method: "DELETE",
      headers: {
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info("Delete Succsessful");
      });
  };

  return (
    <>
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
                      onClick={() => VERIFY(item?._id,item?.email)}
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
    </>
  );
};

export default AdminDashboardSeller;
