import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} /> <BreadCrumb title="Reset Password" />
      <div className="login-wrapper me-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card login-card2 d-flex flex-column justify-content-around align-items-center">
                <img src="images/password.gif" />
                <h2>Reset Your Password</h2>
                <h3 className="mb-0">
                  We will send you an email to reset your password
                </h3>
                <form className="login-form ">
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-between  align-items-center gap-15">
                    <button
                      className="button border-0 px-5  mt-3"
                      type="submit"
                    >
                      OK
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

export default Resetpassword;
