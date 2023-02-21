import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  // alert(location)
  return (
    <>
      <div
        className={`col-3 ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          className={`product-card position-relative ${
            grid === 12
              ? "d-flex align-items-center justify-content-around "
              : "d-block"
          } `}
        >
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image d-flex">
            <img
              src="images/watch.jpg"
              alt="product image"
              className="img-fluid"
            />

            <img
              src="images/smartwatch1.png"
              alt="product image"
              style={{ scale: "0.8", height: "275px"}}
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              classNames="ReactStars"
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid ===12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente nostrum nesciunt, qui nihil impedit minima </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="procdompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
