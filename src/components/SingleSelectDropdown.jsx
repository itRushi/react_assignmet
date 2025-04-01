import React from "react";

const SingleSelectDropdown = ({ options, selected, onChange, disabledOptions }) => {
  return (
    <select value={selected || ""} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>Select an option</option>
      {options.map((option) => (
        <option key={option} value={option} disabled={disabledOptions.includes(option)}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SingleSelectDropdown;
