
import React ,{SFC} from 'react';

const citys : Array<string>= ['Moscow', 'Sankt-Peterburg', 'Kaliningrad', 'Orsk'];

interface IProps {
    onClick: Function
}

const Chips: SFC<IProps> = ({ onClick }) => (
  <div className="chip-container">
    {citys.map((item, index) => (
      <div className="chip" key={index} onClick={() => onClick(item)}>
        {item}
      </div>
    ))}
  </div>
);

export default Chips;
