import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Samsung Galaxy Note 10+ Mobile Phone; Sim...
            </h6>
            <ReactStars
              classNames="ReactStars"
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p mb-0">$100</span>
              &nbsp; &nbsp;
              <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0 till-date">5 days</p>
              <div className="d-flex align-items-center gap-05 ">
                <span className="badge discount-badge p-3">1</span>:
                <span className="badge discount-badge p-3">1</span>:
                <span className="badge discount-badge p-3">1</span>
              </div>
 
            </div>
            <div className="pro-count my-4 position-relative">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "25%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button mb-2">
              Add to Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
