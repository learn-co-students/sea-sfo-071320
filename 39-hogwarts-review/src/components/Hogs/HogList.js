import React from 'react';
import HogCard from './HogCard';

const HogList = ({ hogs, handleHideHog }) => {
  // const { hogs } = props;

  const renderHogs = () => {
    return hogs.map((hog) => (
      <HogCard
        key={hog.name}
        hog={hog}
        handleHogHideAndSeek={handleHideHog}
        buttonText="Banish Hog"
      />
    ));
  };

  return (
    <div className="ui grid container">
      {/* {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
      ))} */}

      {renderHogs()}
    </div>
  );
};

export default HogList;
