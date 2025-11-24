import React, { useState } from "react";

const AvailabilityFilter = ({ data }) => {
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  const inStockCount = data?.filter((item) => item.stock > 0).length || 0;
  const outOfStockCount = data?.filter((item) => !item.stock || item.stock === 0).length || 0;

  return (
    <div className="filter-card-modern mb-4">
      <h3 className="filter-title-modern">
        <span className="filter-icon">🔍</span>
        Filter by
      </h3>
      <div className="filter-content">
        <h5 className="sub-title-modern">Availability</h5>
        <div className="checkbox-group">
          <div className="form-check-modern">
            <input
              className="form-check-input-modern"
              type="checkbox"
              id="in-stock"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            <label className="form-check-label-modern" htmlFor="in-stock">
              In Stock <span className="count-badge">({inStockCount})</span>
            </label>
          </div>
          <div className="form-check-modern">
            <input
              className="form-check-input-modern"
              type="checkbox"
              id="out-of-stock"
              checked={outOfStock}
              onChange={(e) => setOutOfStock(e.target.checked)}
            />
            <label className="form-check-label-modern" htmlFor="out-of-stock">
              Out of Stock <span className="count-badge">({outOfStockCount})</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityFilter;

