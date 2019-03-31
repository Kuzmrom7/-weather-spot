import React, {SFC} from 'react';
import Icon from './Icon';

interface IProps {
  data : any
}

const Weather : SFC<IProps> = ({ data }) => (
  <div className="container-weather">
    {data.cod !== 200 ? (
      <h2>Not found</h2>
    ) : (
      <>
        <div className="ico">
          <Icon iconType={data.weather[0].icon} />
        </div>
        <h2>
          {data.name} {Math.round(data.main.temp - 273.15)}°C
        </h2>
        {data.weather[0].description}
      </>
    )}
  </div>
);

export default Weather;