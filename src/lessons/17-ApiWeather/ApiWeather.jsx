import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from './services/apiKeys';
import { Button } from 'react-bootstrap';
import { CardWeather } from './components/CardWeather';
import Grafica from './components/Recharts';

export const ApiWeather = () => {
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState();
  const [weatherData, setWeatherData] = useState();

  const dateTimes = [5, 13, 21, 29, 37];

  useEffect(() => {
    if (searchCity) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast/?q=${searchCity}&units=metric&appid=${API.key}`
        )
        .then((res) => setWeatherData(res.data))
        .catch((err) => console.log(err));
    }
  }, [searchCity]);

  console.log(weatherData);

  const chartData =
    weatherData &&
    dateTimes.map((index, i) => ({
      name: `Día ${i + 1}`,
      temperatura: weatherData.list[index].main.temp_max,
    }));

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>ApiWeather App</h1>
      <hr />
      <div className="d-flex flex-column w-25 gap-3">
        <input type="text" onChange={handleChange} value={city} />
        <Button onClick={() => setSearchCity(city)}>Buscar</Button>
      </div>
      <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
        {weatherData &&
          dateTimes.map((index) => (
            <CardWeather
              key={index}
              weather={weatherData.list[index]}
              city={weatherData.city.name}
              country={weatherData.city.country}
            />
          ))}
      </div>
      {weatherData && (
        <div className="d-flex justify-content-center mt-5">
          <div style={{ height: '300px', width: '800px' }}>
            <Grafica data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};
