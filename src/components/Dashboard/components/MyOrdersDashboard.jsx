import React from "react";
import { Link } from "react-router-dom";

const MyOrdersDashboard = ({ MyOrders }) => {
  return (
    <section>
      {MyOrders?.length === 0 ? (
        <p className="text-5xl text-red-700">No Data Found </p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Bike Model</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {MyOrders &&
                MyOrders?.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={order?.data?.bikePic} alt="Wait" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{order?.data?.brand}</div>
                        </div>
                      </div>
                    </td>
                    <td>{order?.data?.model}</td>
                    <td>
                      <span className="badge text-sm badge-outline badge-primary">
                        {order?.data?.sellingPrice}
                      </span>
                    </td>
                    {order.paid ? <td>Paid</td> : <td>UnPaid</td>}

                    {order.paid ? (
                      <td>
                        <button className="btn disabled: btn-success btn-xs">
                          Payment Done
                        </button>
                      </td>
                    ) : (
                      <th className="space-x-3">
                        <Link to={`/dashboard/payment/${order._id}`}>
                          <button className="btn btn-warning btn-xs">
                            Pay Now
                          </button>
                        </Link>
                      </th>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MyOrdersDashboard;
