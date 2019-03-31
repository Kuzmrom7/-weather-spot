import React, { FC, useEffect, useState } from "react";
import Weather from './components/Weather';
import Spin from './components/Spin';
import Chips from './components/Chips';

const apikey: string | undefined = process.env.REACT_APP_API_KEY;



const apiBaseUrl = `http://api.openweathermap.org/data/2.5/weather`;


const App: FC = () => {

  const [weather, setWeather] = useState<Array<Object>>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  function getLocation() :void {
    navigator.geolocation.getCurrentPosition(position => {
      const url = position.coords && `${apiBaseUrl}?lat=${
        position.coords.latitude
      }&lon=${position.coords.longitude}&appid=${apikey}`

      getWeather(url);
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  

  async function getWeather(url : string )  {
    await setLoader(true);
    const data = await fetch(url, {
      mode: "cors"
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
          placeholder={"Please enter a city or select below "}
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <input type="submit" value="Search" onClick={() => getWeather(`${apiBaseUrl}?q=${city}&appid=${apikey}`)} />
      </div>

      <Chips onClick={(city: string) => setCity(city)} />

      {!loader ? <> {weather && <Weather data = {weather} />}</> : <Spin />}
    </>
  );
};

export default App;
