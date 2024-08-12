import React from 'react';

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      {/* Add more elements or functionality if needed */}
    </div>
  );
}

export default Filter;
