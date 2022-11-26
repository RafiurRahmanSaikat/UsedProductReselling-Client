import React from "react";

const MyOrdersDashboard = () => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>Order</th>
              <th>Email</th>
              <th>Bike Model</th>
              <th>Status</th>
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
                        <img src="nai" alt="Wait" />
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
                <td>Yamaha</td>
                <td>Unpaid</td>
                <td>10tk</td>
                <th className="space-x-3">
                  <button className="btn btn-warning btn-xs">Pay Now</button>
                 
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="nai" alt="Wait" />
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
                <td>Yamaha</td>
                <td>Unpaid</td>
                <td>10tk</td>
                <th className="space-x-3">
                  <button className="btn btn-warning btn-xs">Pay Now</button>
                 
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="nai" alt="Wait" />
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
                <td>Yamaha</td>
                <td>Unpaid</td>
                <td>10tk</td>
                <th className="space-x-3">
                  <button className="btn btn-warning btn-xs">Pay Now</button>
                 
                </th>
              </tr>
            </tbody>
          }
        </table>
      </div>
    </>
  );
};

export default MyOrdersDashboard;
