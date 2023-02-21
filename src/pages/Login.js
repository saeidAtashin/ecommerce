import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const strengthText = getStrength(e.target.value);
    setStrength(strengthText);
  };

  const strengthMap = {
    1: "weak",
    2: "medium",
    3: "strong",
  };

  const getIndicator = (password, strengthValue) => {
    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!strengthValue.upper && char >= 65 && char <= 90) {
        strengthValue.upper = true;
      } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
        strengthValue.numbers = true;
      } else if (!strengthValue.lower && char >= 97 && char <= 122) {
        strengthValue.lower = true;
      }
    }

    let strengthIndicator = 0;

    for (let metric in strengthValue) {
      if (strengthValue[metric] === true) {
        strengthIndicator++;
      }
    }

    return strengthMap[strengthIndicator] ?? "";
  };

  const getStrength = (password) => {
    let strengthValue = {
      upper: false,
      numbers: false,
      lower: false,
    };

    return getIndicator(password, strengthValue);
  };

  return (
    <>
      <Meta title={"Login"} /> <BreadCrumb title="Login" />
      <div className="login-wrapper me-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card">
                <img src="images/account.webp" />
                <h2>Sign Up</h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="email"
                      placeholder="Email"
                    />
                    <div id="spinner" className="spinner"></div>
                  </div>
                  <input
                    className="control"
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                  <div id="bars"><div className={strength}></div></div>
                  
                  <div id="weak" className={`${strength} text-center`}>
                    {strength ? `${strength} Pass` : ""}
                  </div>
                  {/* <div className="weak"></div> */}
                  <button className="button" type="button">
                    JOIN NOW
                  </button>
                </form>
              </div>

              {/* <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Login</button>
                    <Link className="button signup">SignUp</Link>
                  </div>
                </div>
              </form>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
