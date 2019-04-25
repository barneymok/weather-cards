'use strict';

class WeatherCard extends React.Component {
  render() {
    const { city, temp, condition, icon, wind } = this.props;

    return (
      <li className="weather-card">
        <h4 className="city">{city}</h4>
        <p className="temp">{temp}&#176; F</p>
        <p className="condition"><img src={icon} />{condition}</p>
        <p className="wind">{wind} mph</p>
      </li>
    )
  }
}