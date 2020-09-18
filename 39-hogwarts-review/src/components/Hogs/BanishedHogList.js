import React from 'react';
import HogCard from './HogCard';

const BanishedHogList = ({ banishedHogs, redeemHog }) => {
  return (
    <div className="ui grid container">
      {banishedHogs.map((hog) => (
        <HogCard
          key={hog.name}
          hog={hog}
          handleHogHideAndSeek={redeemHog}
          buttonText="Redeem Hog"
        />
      ))}
    </div>
  );
};

export default BanishedHogList;
