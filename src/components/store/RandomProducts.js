import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const RandomProducts = ({ data }) => {
  const navigate = useNavigate();
  const randomProduct = data?.sort(() => Math.random() - 0.5).slice(0, 2);

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
    <div className="filter-card-modern mb-4">
      <h3 className="filter-title-modern">
        <span className="filter-icon">⭐</span>
        Random Product
      </h3>
      <div className="filter-content">
        {randomProduct?.map((item, index) => (
          <div
            key={item.id || index}
            className={`random-product-modern ${
              index !== randomProduct.length - 1 ? "mb-3 pb-3" : ""
            }`}
            onClick={() => handleProductClick(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleProductClick(item.id);
              }
            }}
          >
            <div className="random-product-image">
              <img
                src={item.def_img}
                alt={item.name || item.product_title}
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div className="random-product-details">
              <h6 className="random-product-title">
                {truncateString(item.product_title || item.name, 40)}
              </h6>
              <ReactStars
                classNames="ReactStars"
                count={5}
                value={item.avrage_stars || 3}
                edit={false}
                size={18}
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

