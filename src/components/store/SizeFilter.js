import React, { useState } from "react";

const SizeFilter = ({ data }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const sizes = [
    { id: "S", count: 2 },
    { id: "M", count: 2 },
    { id: "L", count: 1 },
    { id: "XL", count: 1 },
  ];

  const toggleSize = (sizeId) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeId)
        ? prev.filter((id) => id !== sizeId)
        : [...prev, sizeId]
    );
  };

  return (
    <>
      <h5 className="sub-title-modern">Size</h5>
      <div className="size-filter-group">
        {sizes.map((size) => (
          <div key={size.id} className="form-check-modern">
            <input
              className="form-check-input-modern"
              type="checkbox"
              id={`size-${size.id}`}
              checked={selectedSizes.includes(size.id)}
              onChange={() => toggleSize(size.id)}
            />
            <label
              className="form-check-label-modern"
              htmlFor={`size-${size.id}`}
            >
              {size.id} <span className="count-badge">({size.count})</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default SizeFilter;

