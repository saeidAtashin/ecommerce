import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Forgotpassword = () => {
  const { t } = useTranslation();

  return (
    <>
      <Meta title={t("reset_password")} />
      <BreadCrumb title={t("reset_password")} />
      <div className="login-wrapper me-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card login-card2 d-flex flex-column justify-content-around align-items-center">
                <img src="images/email-outline.webp" />
                <h2>{t("reset_password")}</h2>
                <h3 className="mb-0">
                  {t("reset_email_message")}
                </h3>
                <form className="login-form ">
                  <div className="username">
                    <input
                      autoComplete="off"
                      className="control"
                      type="email"
                      placeholder={t("email")}
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-between  align-items-center gap-15">
                    <button
                      className="button border-0 px-5  mt-3"
                      type="submit"
                    >
                      {t("submit")}
                    </button>
                    <Link to="/login" className="text-white ">
                      {t("cancel")}
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
