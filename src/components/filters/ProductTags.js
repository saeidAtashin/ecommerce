import React from "react";

const ProductTags = ({ tags, onTagSelect, selectedTag }) => {
  return (
    <div className="filter-card-modern">
      <h3 className="filter-title-modern">
        <span className="filter-icon">🏷️</span>
        Product Tags
      </h3>
      <div className="filter-content">
        <div className="product-tags-modern">
          {tags?.map((tag, index) => (
            <button
              key={index}
              className={`tag-badge-modern ${
                selectedTag === tag ? "active" : ""
              }`}
              onClick={() => onTagSelect?.(tag)}
              aria-label={`Filter by tag ${tag}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTags;

