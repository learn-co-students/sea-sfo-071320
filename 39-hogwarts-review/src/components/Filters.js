import React from 'react';

const Filters = (props) => {
  return (
    <div style={{ margin: '20px' }}>
      {/* Toggle Greased */}
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={props.showGreased}
          onChange={props.handleToggleGreased}
        />
        Toggle Greased
      </label>

      {/* Filter by name and weight */}
      <label>
        <select value={props.filterBy} onChange={props.handleFilterBy}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
