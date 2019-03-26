import React from 'react';
import Icon from './Icon';

const Weather = ({ cod, name, main, weather }) => (
  <div className="container-weather">
    {cod !== 200 ? (
      <h2>Not found</h2>
    ) : (
      <>
        <div className="ico">
          <Icon iconType={weather[0].icon} />
        </div>
        <h2>
          {name} {Math.round(main.temp - 273.15)}°C
        </h2>
        {weather[0].description}
      </>
    )}
  </div>
);

export default Weather;
