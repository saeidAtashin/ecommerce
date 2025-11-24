import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastTypes } from "../utils/toastConfig";
const Signup = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("user");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    let registerObj = { id, email, password, phone, userType };

    fetch("https://apitest-lovat.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(registerObj),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Account created successfully! Please login.", toastTypes.success);
          navigate("/login");
        } else {
          toast.error("Registration failed. Please try again.", toastTypes.error);
        }
      })
      .catch((err) => {
        toast.error("An error occurred. Please try again.", toastTypes.error);
      });
  };
  return (
    <>
      <Meta title={"Sign up"} /> <BreadCrumb title="Sign up" />
      <div className="login-wrapper me-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card login-card2 login-card3 d-flex flex-column justify-content-around align-items-center">
                <img src="images/assignment-outline.webp" />
                <h2>Sign Up</h2>
                <h3 className="mb-0">Create A New Account</h3>
                <form
                  className="login-form  d-flex flex-column justify-content-center"
                  onSubmit={handlesubmit}
                >
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="text"
                      placeholder="Username"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      required
                    />
                  </div>
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="mobile"
                      placeholder="Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="username d-flex ">
                    <label className="controladmin">Type of USER: </label>
                    <input
                      autoComplete="off"
                      className="controlchekbox"
                      type="radio"
                      value="user"
                      name="usertype"
                      checked={userType === "user"}
                      onChange={(e) => setUserType(e.target.value)}
                    />

                    <label className="controladmin">User</label>
                    <input
                      autoComplete="off"
                      className="controlchekbox"
                      type="radio"
                      name="usertype"
                      value="admin"
                      checked={userType === "admin"}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <label className="controladmin">Admin</label>
                  </div>

                  <div className="d-flex  justify-content-between  align-items-center gap-15">
                    <a className="button back-btn border-0 px-5  mt-3">Back</a>
                    <button
                      className="button border-0 px-5  mt-3"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
