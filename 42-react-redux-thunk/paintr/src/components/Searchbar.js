import React from "react";

const Searchbar = props => (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);

export default Searchbar;
