import React from 'react';

const SortDropdown = ({ sortOption, sortOrder, onSortChange }) => {
  return (
    <div>
        Sort by:
        <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="higherPrice">High to Low - Price</option>
          <option value="lowerPrice">Low to High - Price</option>
        </select>
    </div>
  );
};

export default SortDropdown;