import React from 'react';

const citys = ['Moscow', 'Sankt-Peterburg', 'Kaliningrad', 'Orsk'];

const Chips = ({ onClick }) => (
  <div className="chip-container">
    {citys.map((item, index) => (
      <div className="chip" key={index} onClick={() => onClick(item)}>
        {item}
      </div>
    ))}
  </div>
);

export default Chips;
