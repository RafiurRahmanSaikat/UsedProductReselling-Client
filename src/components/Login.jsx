import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginPic from "../assets/login.gif";
import { AuthContext } from "../context/AuthProvider";
const Login = () => {
  const { login, GoogleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const SUBMIT = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const genarateUserToken = {
      email,
    };
    login(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        toast.success(" User Log in Successfull!");
      })
      .then(
        fetch("https://dream-bike-theta.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(genarateUserToken),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("accessToken", data.token);
          })
      )
      .catch((error) => {
        toast.error(error.code);
      });
    form.reset();
  };
  const GoogleLogIn = () => {
    GoogleSignIn()
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const role = "buyer";
        const genarateUserToken = {
          email,
        };

        fetch("https://dream-bike-theta.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(genarateUserToken),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("accessToken", data.token);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            toast.error(error.code);
            console.log(error);
          });

        navigate("/");
        toast.success(" User Created  Successfull!");
      })
      .catch((error) => {
        toast.error(error.code);
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl p-4 font-bold">Login now!</h1>

          <img src={loginPic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={SUBMIT} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="text-sm ">
                  Don't have an account !
                  <Link to="/signup">
                    <strong className="text-sm ml-2 link-hover text-blue-800 ">
                      Please SIGNUP
                    </strong>
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button type="submit" className="text-base" color="amber">
                Login
              </Button>
            </div>
            <Button
              onClick={GoogleLogIn}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full   border rounded-md  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
