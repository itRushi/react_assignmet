import React, { useState } from "react";

const MultiSelectDropdown = ({ options, selectedOptions, setSelectedOptions, setOptions }) => {
  const [newOption, setNewOption] = useState("");

  const handleSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleAddNewOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  return (
    <div className="multi-select">
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <span key={option} onClick={() => handleRemove(option)}>
            {option} ❌
          </span>
        ))}
      </div>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Select Options</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Add New Item Input Inside Dropdown */}
      <div className="add-new-item">
        <input
          type="text"
          value={newOption}
          placeholder="Add new item"
          onChange={(e) => setNewOption(e.target.value)}
        />
        <button onClick={handleAddNewOption}>+ Add</button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
