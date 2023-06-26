import React from "react";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";

const Brands = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const filterItem = "brand";
  
  if (!data) {
    return <p>Loading...</p>;
  }

  if (data.length === 0) {
    return <p>No banners available.</p>;
  }

  const unique = [
    ...new Map(data.map((item) => [item[filterItem], item])).values(),
  ];

  return (
    <div>
      <div className="categories d-flex justify-content-between flex-wrap align-items-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurred...</p>
        ) : (
          unique?.map((bannerData) => {
            const filteredData = data.filter(
              (item) => item[filterItem] === bannerData[filterItem]
            );
            return (
              <div
                className="d-flex gap-30 align-items-center justify-content-center"
                key={bannerData.id}
              >
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <h6>{bannerData[filterItem]}</h6>
                  <p>{filteredData.length} Items</p>
                </div>
                <img
                  src={bannerData.sec_img}
                  className="uniqe-banner"
                  alt={bannerData[filterItem]}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Brands;