import React from "react";

const CategoryFilter = ({ categories, onCategorySelect, selectedCategory }) => {

  return (
    <div className="filter-card-modern">
      <h3 className="filter-title-modern">
        <span className="filter-icon">🏷️</span>
        Shop By Categories
      </h3>
      <div className="filter-content">
        <ul className="category-list">
          {categories?.map((category, index) => (
            <li key={index} className="category-item">
              <button
                className={`category-btn ${
                  selectedCategory === category.name ? "active" : ""
                }`}
                onClick={() => onCategorySelect?.(category.name)}
                aria-label={`Filter by ${category.name}`}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;

