import React from "react";
import { toast } from "react-toastify";
import useAdminData from '../../../Hooks/UseAdminData';
const AdminDashboardBuyer = () => {
  const DATA=useAdminData("buyer")
 
  
  const DELETE=(id)=>{
    fetch(`https://dream-bike-theta.vercel.app/deleteuser/?id=${id}`, {
      method: 'DELETE',
      headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  })
      .then(res => res.json())
      .then(data => {       
            toast.info("Delete Succsessful")
      })
  }

  return (
    <>
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
{
DATA && DATA?.map(item=> <tr key={item._id}>
  <td>{item.name}</td>
  <td>{item.email}</td>
  <td>
    <button onClick={()=>DELETE(item._id)} className="btn btn-error btn-xs">Delete User</button>
  </td>
</tr>)
}
          
        </tbody>
      </table>
    </div>
  </>
  );
};

export default AdminDashboardBuyer;