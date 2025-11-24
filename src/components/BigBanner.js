import React from "react";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import { Link, useNavigate } from "react-router-dom";

const BigBanner = ({ category = "" }) => {
  const { data, error, isLoading } = useGetAllProductsQuery();
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

  let filteredData = data.filter((item) => item.isBigBanner);

  // Filter by category if provided
  if (category) {
    filteredData = filteredData.filter((item) => item.category === category);
  }

  if (filteredData.length === 0) {
    return <p>No big banners available.</p>;
  }

  const bannerData = filteredData[0];

  const Openhandicraft = () => {
    console.log("object");
    navigate("/product/" + bannerData.id);
  };

  return (
    <div onClick={Openhandicraft} className="cursor-pointer">
      <div className="main-banner position-relative mt-3 ">
        <img
          src={bannerData.sec_img}
          className="img-fluid rounded-3 image-width"
          alt={bannerData.name}
        />
        <div className="main-banner-content position-absolute">
          <h6>These handmade sculptures are my own production.</h6>
          <h4>{bannerData.brand}</h4>
          <h5>{bannerData.name}</h5>
          <p className="dis-none-small">{bannerData.product_title}</p>
          <Link className="button buttonsmall change-buttom-place">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
