'use strict';

const WeatherCard = props => {
  return (
    <li className="weather-card">
      <h4 className="city">{props.city}</h4>
      <p className="temp">{props.temp}&#176; F</p>
      <p className="condition"><img src={props.icon} />{props.condition}</p>
      <p className="wind">{props.wind} mph</p>
    </li>
  )
}