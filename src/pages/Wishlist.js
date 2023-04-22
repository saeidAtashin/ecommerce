import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Whishlists = () => {
  return (
    <>
      <Meta title={"Whishlists"} />
      <BreadCrumb title="Whishlists" />
      <div className="whishlist-wrapper home-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray
                    </h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray
                    </h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray
                    </h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray
                    </h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whishlists;
