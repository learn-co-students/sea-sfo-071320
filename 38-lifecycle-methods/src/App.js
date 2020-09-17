import React from 'react';
import Parent from './lifecycle/Parent';
import TickerContainer from './ticker/TickerContainer';

function App() {
  return (
    <div className="App">
      <TickerContainer />
      {/* <Parent /> */}
    </div>
  );
}

export default App;
