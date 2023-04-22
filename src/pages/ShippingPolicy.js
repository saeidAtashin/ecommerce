import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <img
                src="/images/2build.gif"
                className="w-10000 img-fluid"
                alt="building"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
