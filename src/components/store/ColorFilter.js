import React, { useState } from "react";
import Color from "../Color";

const ColorFilter = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = [
    { id: 1, name: "Red", value: "#ff0000" },
    { id: 2, name: "Blue", value: "#0000ff" },
    { id: 3, name: "Green", value: "#00ff00" },
    { id: 4, name: "Yellow", value: "#ffff00" },
    { id: 5, name: "Black", value: "#000000" },
  ];

  const toggleColor = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  return (
    <>
      <h5 className="sub-title-modern">Colors</h5>
      <div className="color-filter-group">
        <ul className="colors-modern">
          {colors.map((color) => (
            <li
              key={color.id}
              className={`color-item-modern ${
                selectedColors.includes(color.id) ? "active" : ""
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => toggleColor(color.id)}
              title={color.name}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleColor(color.id);
                }
              }}
            >
              {selectedColors.includes(color.id) && (
                <span className="color-check">✓</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ColorFilter;

