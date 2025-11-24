import React from "react";

const AvailabilityFilter = ({ inStockCount, outOfStockCount, onAvailabilityChange, selectedAvailability }) => {
  return (
    <div className="filter-card-modern">
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
              checked={selectedAvailability?.includes("in-stock") || false}
              onChange={(e) => onAvailabilityChange?.("in-stock", e.target.checked)}
            />
            <label className="form-check-label-modern" htmlFor="in-stock">
              In Stock
              <span className="count-badge">{inStockCount}</span>
            </label>
          </div>
          <div className="form-check-modern">
            <input
              className="form-check-input-modern"
              type="checkbox"
              id="out-of-stock"
              checked={selectedAvailability?.includes("out-of-stock") || false}
              onChange={(e) => onAvailabilityChange?.("out-of-stock", e.target.checked)}
            />
            <label className="form-check-label-modern" htmlFor="out-of-stock">
              Out of Stock
              <span className="count-badge">{outOfStockCount}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityFilter;

