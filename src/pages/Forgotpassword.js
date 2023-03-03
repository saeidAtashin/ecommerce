import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper me-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card login-card2 d-flex flex-column justify-content-around align-items-center">
                <img src="images/email-outline.webp" />
                <h2>Reset Your Password</h2>
                <h3 className="mb-0">
                  We will send you an email to reset your password
                </h3>
                <form className="login-form ">
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-between  align-items-center gap-15">
                    <button
                      className="button border-0 px-5  mt-3"
                      type="submit"
                    >
                      Submit
                    </button>
                    <Link to="/login" className="text-white ">
                      Cancel
                    </Link>
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

export default Forgotpassword;
