import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import SignupPic from "../assets/signup.gif";
const Signup = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl p-4 font-bold">Please Register !</h1>
          <img src={SignupPic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="text-sm ">
                  Already have an account  ! 
                  <Link to="/login">
                     <strong  className="text-sm ml-2 link-hover text-blue-800 ">
                      Please LOGIN
                    </strong>
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button  color="green" className="text-base">Register</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
