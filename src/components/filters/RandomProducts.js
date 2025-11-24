import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const RandomProducts = ({ products }) => {
  const navigate = useNavigate();

  const truncateString = (str, maxLength) => {
    if (!str) return "";
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="filter-card-modern">
      <h3 className="filter-title-modern">
        <span className="filter-icon">⭐</span>
        Random Products
      </h3>
      <div className="filter-content">
        {products?.map((item) => (
          <div
            key={item.id}
            className="random-product-modern"
            onClick={() => handleProductClick(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleProductClick(item.id);
              }
            }}
            aria-label={`View ${item.product_title || item.name}`}
          >
            <div className="random-product-image">
              <img
                src={item.def_img}
                alt={item.product_title || item.name}
                loading="lazy"
              />
            </div>
            <div className="random-product-details">
              <h5 className="random-product-title">
                {truncateString(item.product_title || item.name, 40)}
              </h5>
              <ReactStars
                classNames="ReactStars"
                count={5}
                value={item.avrage_stars || 3}
                edit={false}
                size={16}
                activeColor="#ffd700"
              />
              <p className="random-product-price">${item.org_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;

