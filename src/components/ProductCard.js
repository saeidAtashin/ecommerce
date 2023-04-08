import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const [first, setFirst] = useState(null);
  // const [isOffer, setIsOffer] = useState(true)
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setFirst(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const { grid } = props;
  let location = useLocation();
  // alert(location)
  return (
    <>


  
           
          {first &&
            first.map((item) => (
              <>
                  <div
        className={`col-3 ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to="/product/:id"
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

              
<div className="product-list py-4 ">
              <div className="d-flex gap-10 flex-wrap flex-fill align-items-center w-100">
              
                <div key={item.id} className="product-image d-flex">
                  <img
                    src={item.def_img}
                    alt={item.name}
                    className="img-fluid"
                  />

                  <img
                    src={item.sec_img}
                    alt={item.name}
                    style={{ scale: "0.8", height: "275px" }}
                    className="img-fluid"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item.brand}</h6>
                  <h5 className="product-title">{item.product_title}</h5>
                  <ReactStars
                    classNames="ReactStars"
                    count={5}
                    value={item.avrage_stars}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sapiente nostrum nesciunt, qui nihil impedit minima{" "}
                  </p>
                  <div className="d-flex align-items-center gap-10">
                  <p className={`price ${item.isOffer ? "text-decoration-line-through" : ""}`}>${item.org_price}</p>
                  {item.isOffer === "true" && (
                    <p className="text-danger fw-bold fs-5">${item.new_price}</p>
                  )}
                  </div>
                </div>
                </div>
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
            ))}

   

    </>
  );
};

export default ProductCard;
