import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <img
                src="/images/2build.gif"
                alt="building"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
