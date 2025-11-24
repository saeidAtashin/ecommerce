import React, { useState } from "react";

const PriceFilter = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handlePriceChange = (type, value) => {
    if (type === "min") {
      setMinPrice(value);
      onPriceChange?.({ min: value, max: maxPrice });
    } else {
      setMaxPrice(value);
      onPriceChange?.({ min: minPrice, max: value });
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
            id="price-from"
            placeholder="From"
            value={minPrice}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            min="0"
          />
          <label htmlFor="price-from">From</label>
        </div>
        <div className="form-floating-modern">
          <input
            type="number"
            className="form-control-modern"
            id="price-to"
            placeholder="To"
            value={maxPrice}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            min="0"
          />
          <label htmlFor="price-to">To</label>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;

