import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastTypes } from "../utils/toastConfig";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();
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
          toast.success(t("account_created"), toastTypes.success);
          navigate("/login");
        } else {
          toast.error(t("registration_failed"), toastTypes.error);
        }
      })
      .catch((err) => {
        toast.error(t("login_error"), toastTypes.error);
      });
  };
  return (
    <>
      <Meta title={t("signup_title")} /> <BreadCrumb title={t("signup_title")} />
      <div className="login-wrapper me-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card login-card2 login-card3 d-flex flex-column justify-content-around align-items-center">
                <img src="images/assignment-outline.webp" />
                <h2>{t("signup_title")}</h2>
                <h3 className="mb-0">{t("create_account")}</h3>
                <form
                  className="login-form  d-flex flex-column justify-content-center"
                  onSubmit={handlesubmit}
                >
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="text"
                      placeholder={t("username")}
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
                      placeholder={t("email")}
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
                      placeholder={t("password")}
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
                      placeholder={t("mobile_number")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="username d-flex ">
                    <label className="controladmin">{t("user_type")} </label>
                    <input
                      autoComplete="off"
                      className="controlchekbox"
                      type="radio"
                      value="user"
                      name="usertype"
                      checked={userType === "user"}
                      onChange={(e) => setUserType(e.target.value)}
                    />

                    <label className="controladmin">{t("user")}</label>
                    <input
                      autoComplete="off"
                      className="controlchekbox"
                      type="radio"
                      name="usertype"
                      value="admin"
                      checked={userType === "admin"}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <label className="controladmin">{t("admin")}</label>
                  </div>

                  <div className="d-flex  justify-content-between  align-items-center gap-15">
                    <a className="button back-btn border-0 px-5  mt-3">{t("back")}</a>
                    <button
                      className="button border-0 px-5  mt-3"
                      type="submit"
                    >
                      {t("signup_title")}
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
