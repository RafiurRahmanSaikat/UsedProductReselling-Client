import React from "react";

const MyOrdersDashboard = ({MyOrders}) => {
  console.log(MyOrders);
  return (
    <>
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

              



{
  MyOrders && MyOrders?.map(order=> <tr key={order._id}>
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
   { order.paid ? <td>Paid</td>: <td>UnPaid</td>}
    <th className="space-x-3">
      <button className="btn btn-warning btn-xs">Pay Now</button>
    </th>
  </tr>)
}

            </tbody>
          
        </table>
      </div>
    </>
  );
};

export default MyOrdersDashboard;
