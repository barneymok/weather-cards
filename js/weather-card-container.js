'use strict';

class WeatherCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  // Utility to convert value from Meters Per Second to Miles Per Hour
  convertMPStoMPH(mps) {
    return Math.round(10 * mps * 2.2369362920544) / 10;
  }

  // Utility to convert from Kelvins to Fahrenheit
  convertKtoF(kelvin) {
    return Math.round((kelvin - 273.15) * 1.8) + 32;
  }

  // Get Weather icon
  getIconURL(icon) {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  // get api url
  getWeatherAPIURL(cityName) {
    const { weatherApi, apiKey } = this.props;

    return `${weatherApi}?q=${cityName}&apiKey=${apiKey}`;    
  }

  componentWillMount() {
    this.fetchData();
  }

  // fetch data for all cities
  async fetchData() {
    const { cities } = this.props;

    let fetchList = [];

    cities.forEach(city => {
      const apiCall = this.getWeatherAPIURL(city.name);
      // push fetch into our fetch array
      fetchList.push(fetch(apiCall).then(value => value.json()))
    })

    // resolve all fetch promises
    let weatherData = await Promise.all(fetchList);

    // go through and extract only the data we need
    // also, make all necessary unit conversions with the utility functions
    let data = [];
    weatherData.forEach(json => {
      data.push({
        name: json.name,
        wind: this.convertMPStoMPH(json.wind.speed),
        temp: this.convertKtoF(json.main.temp),
        condition: json.weather[0].main,
        icon: this.getIconURL(json.weather[0].icon)
      })
    })

    // set data to state
    this.setState({ data});
  }

  render() {
    const { data } = this.state;

    return (
      <ul className="weather-card-container">
        {data.map((city, index) => {
          return <WeatherCard key={index} city={city.name} temp={city.temp} condition={city.condition} icon={city.icon} wind={city.wind} />
        })}
      </ul>
    )
  }
}