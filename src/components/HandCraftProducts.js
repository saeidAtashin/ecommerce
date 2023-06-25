import React from "react";
import { useGetAllProducts2Query } from "../toolkit/features/productApi";
import { Link, useNavigate } from "react-router-dom";

const HandCraftProducts = () => {
  const { data, error, isLoading } = useGetAllProducts2Query();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const Openhandicraft = () => {
    console.log("object");

    // navigate('/handi1/1')
  };

  return (
    <div onClick={Openhandicraft}>
      <div className="main-banner position-relative p-3">
        <img
          src={data[0].sec_img}
          className="img-fluid rounded-3 image-width"
          alt={data[0].name}
        />
        <div className="main-banner-content position-absolute">
          <h6>These handmade sculptures, are my own production.</h6>
          <h4>{data[0].brand}</h4>
          <h5>{data[0].name}</h5>
          <p>{data[0].product_title} </p>
          <Link className="button buttonsmall">BUY NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default HandCraftProducts;
