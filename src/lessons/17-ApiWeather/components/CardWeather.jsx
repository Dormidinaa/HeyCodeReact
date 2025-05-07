import React from 'react';
import Card from 'react-bootstrap/Card';

export const CardWeather = ({ weather, city, country }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <Card.Body className="text-center bg-success">
        <Card.Title>{city}</Card.Title>
        <Card.Title>{country}</Card.Title>
        <Card.Text>Datetime: {weather.dt_txt}</Card.Text>
        <Card.Text>Temp: {weather.main.temp}°C</Card.Text>
        <Card.Text>Humidity: {weather.main.humidity}%</Card.Text>
      </Card.Body>
    </Card>
  );
};
