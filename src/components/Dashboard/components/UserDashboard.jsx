import React from "react";

const UserDashboard = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Orders</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        {
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="nai"
                        alt="Wait"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Usr name</div>
                  
                  </div>
                </div>
              </td>
              <td>
                
               
                <span className="badge text-sm badge-outline badge-primary">
                  Email@gmai.com
                </span>
              </td>
              <td>Indigo</td>
              <td>10TAKA</td>
              <th className="space-x-3">
                <button className="btn btn-warning btn-xs">Pay Now</button>
                <button className="btn btn-error btn-xs">Delet</button>
              </th>
            </tr>
          </tbody>
        }
      </table>
    </div>
  );
};

export default UserDashboard;
