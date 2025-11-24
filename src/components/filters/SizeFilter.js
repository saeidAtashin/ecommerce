import React from "react";

const SizeFilter = ({ sizes, onSizeChange, selectedSizes }) => {
  return (
    <>
      <h5 className="sub-title-modern">Size</h5>
      <div className="size-filter-group">
        {sizes?.map((size, index) => (
          <div key={index} className="form-check-modern">
            <input
              className="form-check-input-modern"
              type="checkbox"
              id={`size-${size.value}`}
              checked={selectedSizes?.includes(size.value) || false}
              onChange={(e) => onSizeChange?.(size.value, e.target.checked)}
            />
            <label
              className="form-check-label-modern"
              htmlFor={`size-${size.value}`}
            >
              {size.value}
              <span className="count-badge">{size.count}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default SizeFilter;

