import React, { useState } from "react";

const PriceFilter = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handlePriceChange = (type, value) => {
    if (type === "min") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
    if (onPriceChange) {
      onPriceChange({ min: type === "min" ? value : minPrice, max: type === "max" ? value : maxPrice });
    }
  };

  return (
    <>
      <h5 className="sub-title-modern">Price</h5>
      <div className="price-filter-group">
        <div className="form-floating-modern">
          <input
            type="number"
            className="form-control-modern"
            id="priceFrom"
            placeholder="From"
            value={minPrice}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            min="0"
          />
          <label htmlFor="priceFrom">From ($)</label>
        </div>
        <div className="form-floating-modern">
          <input
            type="number"
            className="form-control-modern"
            id="priceTo"
            placeholder="To"
            value={maxPrice}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            min="0"
          />
          <label htmlFor="priceTo">To ($)</label>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;

