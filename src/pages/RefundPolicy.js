import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <img src="/images/2build.gif" className="w-100 img-fluid" alt="building" />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
