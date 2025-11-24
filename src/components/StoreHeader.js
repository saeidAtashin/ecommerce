import React from "react";

const StoreHeader = ({
  totalProducts,
  selectedValue,
  onSortChange,
  grid,
  onGridChange,
  windowSize,
  productPerPage,
}) => {
  const gridOptions = [
    {
      value: 3,
      icon: "images/gr4.svg",
      productsPerPage: 8,
      minWidth: 1560,
      label: "3 columns",
    },
    {
      value: 4,
      icon: "images/gr3.svg",
      productsPerPage: 9,
      minWidth: 1406,
      label: "4 columns",
    },
    {
      value: 6,
      icon: "images/gr2.svg",
      productsPerPage: 6,
      minWidth: 1205,
      label: "6 columns",
    },
    {
      value: 12,
      icon: "images/gr.svg",
      productsPerPage: 5,
      minWidth: 0,
      label: "12 columns",
    },
  ];

  const isGridDisabled = (minWidth) => {
    return windowSize.width < minWidth;
  };

  return (
    <div className="store-header-modern">
      <div className="store-header-content">
        <div className="sort-section">
          <p className="sort-label">Sort By:</p>
          <select
            className="sort-select-modern"
            value={selectedValue}
            onChange={(e) => onSortChange?.(e.target.value)}
            aria-label="Sort products"
          >
            <option value="best-selling">Best Selling</option>
            <option value="featured">Featured</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low-high</option>
            <option value="price-descending">Price, high-low</option>
            <option value="created-ascending">Date, old-new</option>
            <option value="created-descending">Date, new-old</option>
          </select>
        </div>

        <div className="header-right-section">
          <p className="product-count-modern">
            <span className="count-number">{totalProducts}</span> Products
          </p>
          {windowSize.width >= 1205 && (
            <div className="grid-controls-modern">
              {gridOptions.map((option) => {
                const disabled = isGridDisabled(option.minWidth);
                const isActive = grid === option.value;
                return (
                  <button
                    key={option.value}
                    className={`grid-btn-modern ${isActive ? "active" : ""} ${
                      disabled ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (!disabled) {
                        onGridChange?.(option.value, option.productsPerPage);
                      }
                    }}
                    disabled={disabled}
                    aria-label={option.label}
                    title={option.label}
                  >
                    <img
                      src={option.icon}
                      alt={option.label}
                      className="grid-icon"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;

