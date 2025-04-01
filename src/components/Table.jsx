import React, { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Table = () => {
  const [rows, setRows] = useState([{ id: 1, selectedSingle: "", selectedMultiple: [] }]);
  const [multiSelectOptions, setMultiSelectOptions] = useState(["Option 1", "Option 2", "Option 3"]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, selectedSingle: "", selectedMultiple: [] }]);
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Label 1 (Single Select)</th>
            <th>Label 2 (Multi Select)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>
                <select
                  value={row.selectedSingle}
                  onChange={(e) => {
                    const newRows = [...rows];
                    newRows[index].selectedSingle = e.target.value;
                    setRows(newRows);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Item 1">Item 1</option>
                  <option value="Item 2">Item 2</option>
                </select>
              </td>
              <td>
                <MultiSelectDropdown
                  options={multiSelectOptions}
                  selectedOptions={row.selectedMultiple}  // Fix: Matching prop name
                  setSelectedOptions={(selected) => {
                    const newRows = [...rows];
                    newRows[index].selectedMultiple = selected;
                    setRows(newRows);
                  }}
                  setOptions={setMultiSelectOptions} // Fix: Properly passing setOptions
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add New Row</button>
    </div>
  );
};

export default Table;
