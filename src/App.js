import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Spin from './components/Spin';
import Chips from './components/Chips';

const apikey = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(false);
  const [loader, setLoader] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position);
    });
  }

  async function getWeather(position) {
    await setLoader(true);
    const url =
      position && position.coords
        ? `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${
            position.coords.longitude
          }&appid=${apikey}`
        : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const data = await fetch(url, {
      mode: 'cors',
    });
    const weather = await data.json();
    await setWeather(weather);
    await setLoader(false);
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder={'Please enter a city or select below '}
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <input type="submit" value="Search" onClick={getWeather} />
      </div>

      <Chips onClick={city => setCity(city)} />

      {!loader ? <> {weather && <Weather {...weather} />}</> : <Spin />}
    </>
  );
}

export default App;
