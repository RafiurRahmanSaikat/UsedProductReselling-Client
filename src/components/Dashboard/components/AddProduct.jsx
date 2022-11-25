import { Button } from "@material-tailwind/react";
import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const posted = new Date(Date.now()).toString().slice(0,16)


  const SUBMIT = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const sellername = form.sellername.value;
    const model = form.model.value;
    const sellingPrice = form.sellingPrice.value;
    const orginalPrice = form.orginalPrice.value;
    const category = form.category.value;
    const condition = form.condition.value;
    const location = form.location.value;
    const bikePic = form.bikePic.value;
    const used = form.used.value;

    const addBike = {
      posted,
      bikePic,
      sellername,
      email,
      model,
      category,
      used,
      condition,
      orginalPrice,
      sellingPrice,
      location,
    };

    

    fetch("http://localhost:5000/addbike", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBike),
    }).then(res=>{
      console.log(res)
      toast.success("Product Added !")
    })
      .catch((error) => {
        console.error("Faild  To Add  ", error);
        toast.error("Faild  To Add  Added Product !")
      })



  };
  return (
    <>
      <div>
        <section className="p-6  text-gray-900">
          <form
            onSubmit={SUBMIT}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <section className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-center text-2xl">
                  Personal Inormation
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="sellername"
                    placeholder="Full Name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>
              </div>
            </section>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Add A Product</p>
                <p className="text-2xl">Select Bike Brand</p>
                <select
                  id="category"
                  className="select select-info w-full max-w-xs"
                >
                  <option value="HONDA">HONDA</option>
                  <option value="SUZUKI">SUZUKI</option>
                  <option value="YAMAHA">YAMAHA</option>
                </select>
                <p className="text-2xl">Select Bike Condition</p>
                <select
                  id="condition"
                  className="select select-info w-full max-w-xs"
                >
                  <option value="Good">Good</option>
                  <option value="Excelent">Excelent</option>
                  <option value="Use Like New">Use Like New</option>
                </select>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Bike Model</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="  Bike Model"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    Selling Price
                  </label>
                  <input
                    type="number"
                    name="sellingPrice"
                    placeholder="$ Selling Price"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    Orginal Price
                  </label>
                  <input
                    type="number"
                    name="orginalPrice"
                    placeholder="$ Orginal Price"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    How many years Used
                  </label>
                  <input
                    type="number"
                    name="used"
                    placeholder="     How many years Used"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full ">
                  <label htmlFor="website" className="text-sm">
                    Upload A Image (PhotoURL)
                  </label>
                  <input
                    type="text"
                    name="bikePic"
                    placeholder="    Upload A Image (PhotoURL)"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    Location
                  </label>
                  <textarea
                    placeholder="location"
                    name="location"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <Button type="submit" className="w-80 mx-auto" size="lg">
              Add This Bike
            </Button>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProduct;
