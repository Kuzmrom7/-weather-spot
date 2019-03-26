import React from 'react';
import {
  WiDaySunny,
  WiDayCloudyHigh,
  WiFog,
  WiCloudy,
  WiHail,
  WiDayHail,
  WiLightning,
  WiSnow,
  WiCloud,
  WiThermometer,
} from 'weather-icons-react';

const Icon = ({ iconType }) => {
  const size = 200;
  switch (iconType) {
    case '01d':
    case '01n':
      return <WiDaySunny size={size} color="yellow" />;

    case '02d':
    case '02n':
      return <WiDayCloudyHigh size={size} color="#000" />;

    case '03d':
    case '03n':
      return <WiCloud size={size} color="#000" />;

    case '04d':
    case '04n':
      return <WiCloudy size={size} color="#000" />;

    case '09d':
    case '09n':
      return <WiHail size={size} color="#000" />;

    case '10d':
    case '10n':
      return <WiDayHail size={size} color="#000" />;

    case '11d':
    case '11n':
      return <WiLightning size={size} color="#000" />;

    case '13d':
    case '13n':
      return <WiSnow size={size} color="#000" />;

    case '50d':
    case '50n':
      return <WiFog size={size} color="#000" />;

    default:
      return <WiThermometer size={size} color="#000" />;
  }
};

export default Icon;
