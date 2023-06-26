import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../toolkit/features/cartSlice";

const SpecialProduct = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const THREE_DAYS_IN_MS = 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const filteredData = data?.filter((item) => item.timer).slice(0, 4);

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const navigate = useNavigate();

  const OpenSpecial = (id) => {
    console.log("object");
    navigate("/product/" + id);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item));
    navigate("/cart");
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred...</p>
      ) : (
        filteredData.map((item) => (
          <div className="col-sm-12 col-lg-6 " key={item.id}>
            <div className="col-lg-12 col-sm-12 mb-3">
              <div className="special-product-card">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    src={item.def_img}
                    alt={item.name}
                    className="img-fluid special-img cursor-pointer"
                    onClick={() => OpenSpecial(item.id)}
                  />
                  <div
                    className="special-product-content cursor-pointer"
                    onClick={() => OpenSpecial(item.id)}
                  >
                    <h5 className="brand">{item.name}</h5>
                    <h6 className="title">
                      {truncateString(item.product_title, 60)}
                    </h6>
                    <ReactStars
                      classNames="ReactStars"
                      count={5}
                      value={4}
                      // value={item.reviews.rev_stars}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p mb-0">${item.new_price}</span>
                      &nbsp; &nbsp;
                      <strike>${item.org_price}</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <CountdownTimer
                        targetDate={NOW_IN_MS + parseFloat(item.offerTime)}
                      />
                    </div>
                    <div className="pro-count my-4 position-relative">
                      <p>Products: 5</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <Link
                      className="button mb-2"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      Add to Card
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default SpecialProduct;