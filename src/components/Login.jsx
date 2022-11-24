import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import loginPic from "../assets/login.gif";

const Login = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl p-4 font-bold">Login now!</h1>
          <img src={loginPic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
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
                 Don't have an account  ! 
                  <Link to="/signup">
                     <strong  className="text-sm ml-2 link-hover text-blue-800 ">
                      Please SIGNUP
                    </strong>
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button className="text-base" color="amber">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
