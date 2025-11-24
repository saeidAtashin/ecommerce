import React from "react";

const ProductTags = ({ data, filterItem = "brand" }) => {
  const unique = [
    ...new Map(data?.map((item) => [item[filterItem], item])).values(),
  ];

  return (
    <div className="filter-card-modern mb-4">
      <h3 className="filter-title-modern">
        <span className="filter-icon">🏷️</span>
        Product Tags
      </h3>
      <div className="filter-content">
        <div className="product-tags-modern">
          {unique?.map((bannerData, index) => (
            <button
              key={index}
              className="tag-badge-modern"
              type="button"
            >
              {bannerData[filterItem]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTags;

