import React from "react";

const StoreHeader = ({
  totalProducts,
  selectedValue,
  onSortChange,
  grid,
  onGridChange,
  productPerPage,
  onProductPerPageChange,
  windowSize,
}) => {
  const gridOptions = [
    {
      value: 3,
      icon: "images/gr4.svg",
      perPage: 8,
      minWidth: 1560,
      label: "3 columns",
    },
    {
      value: 4,
      icon: "images/gr3.svg",
      perPage: 9,
      minWidth: 1406,
      label: "4 columns",
    },
    {
      value: 6,
      icon: "images/gr2.svg",
      perPage: 6,
      minWidth: 1205,
      label: "6 columns",
    },
    {
      value: 12,
      icon: "images/gr.svg",
      perPage: 5,
      minWidth: 0,
      label: "List view",
    },
  ];

  const handleSortChange = (e) => {
    const value = e.target.value;
    
    // Map display values to sort values
    const sortMap = {
      "best-selling": "numberOfSell",
      featured: "isOffer",
      "title-ascending": "name",
      "title-descending": "-name",
      "price-ascending": "org_price",
      "price-descending": "-org_price",
      "created-ascending": "id",
      "created-descending": "-id",
    };

    const sortValue = sortMap[value] || value;
    if (onSortChange) {
      onSortChange(value); // Pass the display value to maintain consistency
    }
  };

  const handleGridChange = (gridOption) => {
    if (windowSize.width >= gridOption.minWidth || gridOption.minWidth === 0) {
      onGridChange(gridOption.value);
      onProductPerPageChange(gridOption.perPage);
    }
  };

  return (
    <div className="store-header-modern">
      <div className="store-header-content">
        <div className="sort-section">
          <label htmlFor="sortSelect" className="sort-label">
            Sort By:
          </label>
          <select
            id="sortSelect"
            className="sort-select-modern"
            value={selectedValue}
            onChange={handleSortChange}
            aria-label="Sort products"
          >
            <option value="best-selling">Best Selling</option>
            <option value="featured">Featured</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
            <option value="created-ascending">Date, old to new</option>
            <option value="created-descending">Date, new to old</option>
          </select>
        </div>

        <div className="header-right-section">
          <p className="product-count-modern">
            <span className="count-number">{totalProducts}</span> Products
          </p>
          {windowSize.width >= 1205 && (
            <div className="grid-controls-modern" role="group" aria-label="Grid view options">
              {gridOptions.map((option) => {
                const isDisabled = windowSize.width < option.minWidth && option.minWidth > 0;
                const isActive = grid === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`grid-btn-modern ${isActive ? "active" : ""} ${
                      isDisabled ? "disabled" : ""
                    }`}
                    onClick={() => handleGridChange(option)}
                    disabled={isDisabled}
                    aria-label={option.label}
                    aria-pressed={isActive}
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

