import React, { useState } from "react";
import Color from "../Color";

const ColorFilter = ({ onColorChange, selectedColors }) => {
  const colors = [
    { name: "Red", value: "red", hex: "#FF0000" },
    { name: "Blue", value: "blue", hex: "#0000FF" },
    { name: "Green", value: "green", hex: "#00FF00" },
    { name: "Yellow", value: "yellow", hex: "#FFFF00" },
    { name: "Black", value: "black", hex: "#000000" },
  ];

  const handleColorClick = (colorValue) => {
    const isSelected = selectedColors?.includes(colorValue);
    if (isSelected) {
      onColorChange?.(selectedColors.filter((c) => c !== colorValue));
    } else {
      onColorChange?.([...(selectedColors || []), colorValue]);
    }
  };

  return (
    <>
      <h5 className="sub-title-modern">Colors</h5>
      <div className="color-filter-group">
        <ul className="colors-modern">
          {colors.map((color, index) => (
            <li
              key={index}
              className={`color-item-modern ${
                selectedColors?.includes(color.value) ? "active" : ""
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorClick(color.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleColorClick(color.value);
                }
              }}
              aria-label={`Select ${color.name} color`}
              title={color.name}
            >
              {selectedColors?.includes(color.value) && (
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

