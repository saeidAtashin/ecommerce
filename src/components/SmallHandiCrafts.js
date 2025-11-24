import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import { Link, useNavigate } from "react-router-dom";

const SmallHandiCrafts = ({ category = "" }) => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const [numberOfShow, setNumberOfShow] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 990 || window.innerWidth > 1560) {
        setNumberOfShow(4);
      } else if (window.innerWidth > 990 && window.innerWidth < 1560) {
        setNumberOfShow(1);
      }
    };

    handleResize();

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  let filteredData = data.filter((item) => item.isBanner);
  
  // Filter by category if provided
  if (category) {
    filteredData = filteredData.filter((item) => item.category === category);
  }
  
  if (filteredData.length === 0) {
    return <p>No banners available for this category.</p>;
  }

  filteredData = filteredData.slice(0, numberOfShow);




  const Openhandicraft = (id) => {
    console.log("object");
    navigate("/product/" + (id));

  };

  return (
    <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
      {filteredData.map((bannerData) => (
          <div
            className="small-banner position-relative mt-2"
            key={bannerData.id}
            onClick={(id) => Openhandicraft(bannerData.id)}
          >
            <img
              src={bannerData.def_img}
              className="img-fluid rounded-3 img-flip"
              alt={bannerData.name}
            />
            <div className="small-banner-content">
              <h5>{bannerData.name}</h5>
              <h4>{bannerData.brand}</h4>
              <p>
                From {bannerData.org_price}
                <br />
                to<span className="to-price"> {bannerData.new_price} $ </span>.
              </p>
              <Link className="button buttonsmall chane-gbuttom-place change-buttom-opacity">
                More Details
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SmallHandiCrafts;
