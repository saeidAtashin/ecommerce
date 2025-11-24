import React, { useState, useMemo } from "react";
import CategoryFilter from "../filters/CategoryFilter";
import AvailabilityFilter from "../filters/AvailabilityFilter";
import PriceFilter from "../filters/PriceFilter";
import ColorFilter from "../filters/ColorFilter";
import SizeFilter from "../filters/SizeFilter";
import ProductTags from "../filters/ProductTags";
import RandomProducts from "../filters/RandomProducts";

const FilterSidebar = ({ data, filterItem = "brand", onFilterChange, isMobile = false }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isExpanded, setIsExpanded] = useState(!isMobile);

  // Get unique categories with counts
  const categories = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    const unique = [
      ...new Map(data.map((item) => [item[filterItem], item])).values(),
    ];
    return unique.map((item) => ({
      name: item[filterItem],
      count: data.filter((d) => d[filterItem] === item[filterItem]).length,
    }));
  }, [data, filterItem]);

  // Get product tags
  const tags = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    return [...new Set(data.map((item) => item[filterItem]))];
  }, [data, filterItem]);

  // Get random products
  const randomProducts = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    return data.sort(() => Math.random() - 0.5).slice(0, 2);
  }, [data]);

  // Calculate availability counts
  const availabilityCounts = useMemo(() => {
    if (!data || !Array.isArray(data)) {
      return { inStock: 0, outOfStock: 0 };
    }
    const inStock = data.filter((item) => item.quantity > 0 || item.inStock !== false).length;
    return {
      inStock,
      outOfStock: data.length - inStock,
    };
  }, [data]);

  // Get size options (mock data - you can replace with actual size data from your products)
  const sizes = useMemo(() => {
    return [
      { value: "S", count: 2 },
      { value: "M", count: 2 },
      { value: "L", count: 3 },
      { value: "XL", count: 1 },
    ];
  }, []);

  // Handle filter changes
  const handleCategorySelect = (category) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    onFilterChange?.({ category: newCategory });
  };

  const handleAvailabilityChange = (type, checked) => {
    let newAvailability = [...selectedAvailability];
    if (checked) {
      newAvailability.push(type);
    } else {
      newAvailability = newAvailability.filter((a) => a !== type);
    }
    setSelectedAvailability(newAvailability);
    onFilterChange?.({ availability: newAvailability });
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
    onFilterChange?.({ priceRange: range });
  };

  const handleColorChange = (colors) => {
    setSelectedColors(colors);
    onFilterChange?.({ colors });
  };

  const handleSizeChange = (size, checked) => {
    let newSizes = [...(selectedSizes || [])];
    if (checked) {
      newSizes.push(size);
    } else {
      newSizes = newSizes.filter((s) => s !== size);
    }
    setSelectedSizes(newSizes);
    onFilterChange?.({ sizes: newSizes });
  };

  const handleTagSelect = (tag) => {
    const newTag = selectedTag === tag ? null : tag;
    setSelectedTag(newTag);
    onFilterChange?.({ tag: newTag });
  };

  const sidebarContent = (
    <div className={`filter-sidebar ${isMobile ? "filter-sidebar-mobile" : ""}`}>
      <CategoryFilter
        categories={categories}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      <div className="filter-card-modern">
        <h3 className="filter-title-modern">
          <span className="filter-icon">🔍</span>
          Filter by
        </h3>
        <div className="filter-content">
          <AvailabilityFilter
            inStockCount={availabilityCounts.inStock}
            outOfStockCount={availabilityCounts.outOfStock}
            onAvailabilityChange={handleAvailabilityChange}
            selectedAvailability={selectedAvailability}
          />
          <PriceFilter onPriceChange={handlePriceChange} />
          <ColorFilter
            onColorChange={handleColorChange}
            selectedColors={selectedColors}
          />
          <SizeFilter
            sizes={sizes}
            onSizeChange={handleSizeChange}
            selectedSizes={selectedSizes}
          />
        </div>
      </div>

      <ProductTags
        tags={tags}
        onTagSelect={handleTagSelect}
        selectedTag={selectedTag}
      />

      <RandomProducts products={randomProducts} />
    </div>
  );

  if (isMobile) {
    return (
      <div className="filter-sidebar-mobile">
        <button
          className="filter-toggle-btn w-100 d-flex align-items-center justify-content-between p-3 mb-3"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label="Toggle filters"
        >
          <span>Filters</span>
          <span className="filter-toggle-icon">{isExpanded ? "−" : "+"}</span>
        </button>
        {isExpanded && (
          <div className="filter-content-mobile">{sidebarContent}</div>
        )}
      </div>
    );
  }

  return sidebarContent;
};

export default FilterSidebar;

