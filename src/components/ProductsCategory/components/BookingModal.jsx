import React from "react";

const BookingModal = ({ data }) => {
    const {used,sellingPrice,sellername,orginalPrice,model,location,condition,brand,email}=data
  console.log(data);

  const SUBMIT =(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value
    console.log(name);
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           {model}
          </h3>
          <form onSubmit={SUBMIT} className="flex flex-col">        
                <input name="name" type="text" defaultValue={sellername} readOnly placeholder="Seller Name " className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="email" type="email" defaultValue={email} readOnly placeholder="Seller Email address" className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="model" type="text" placeholder="Bike Model Name " className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="model" type="text" placeholder="Brand " className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="model" type="text" placeholder="Condition " className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="price" type="number" placeholder="Bike Price " className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="phone" type="number" placeholder="Enter Your Phone Number +000000" className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />
                <input name="phone" type="text" placeholder="Your Location" className="rounded-md m-2 border-gray-400 bg-gray-50 text-gray-800" />

                <button type="submit" className="btn btn-warning mx-auto">Confrim Boking</button>
			
		</form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
