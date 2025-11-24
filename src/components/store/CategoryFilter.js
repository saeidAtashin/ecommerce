import React from "react";

const CategoryFilter = ({ data, filterItem = "brand" }) => {
  const unique = [
    ...new Map(data?.map((item) => [item[filterItem], item])).values(),
  ];

  return (
    <div className="filter-card-modern mb-4">
      <h3 className="filter-title-modern">
        <span className="filter-icon">📂</span>
        Shop By Categories
      </h3>
      <div className="filter-content">
        <ul className="category-list">
          {unique?.map((bannerData, index) => {
            const filteredData = data?.filter(
              (item) => item[filterItem] === bannerData[filterItem]
            );
            return (
              <li key={index} className="category-item">
                <button className="category-btn">
                  <span className="category-name">{bannerData[filterItem]}</span>
                  <span className="category-count">{filteredData?.length || 0}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;

