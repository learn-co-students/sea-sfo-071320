import React from "react";
import PaintingListItem from "./PaintingListItem";

const PaintingsList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          selectPainting={props.selectPainting}
          painting={painting}
        />
      ))}
    </div>
  </div>
);

export default PaintingsList;
