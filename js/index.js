const weatherApi = "https://api.openweathermap.org/data/2.5/weather/";

const apiKey = "27c3b2e8e5d4851de9eebe9abe148f21";

const cities = [
	{
		name: "San Francisco",
		id: 5391959,
	},{
		name: "New York",
		id: 5128638,
	},{
		name: "Chicago",
		id: 4887398,
	},{
		name: "Atlanta",
		id: 4180439,
	},{
		name: "Dallas",
		id: 4684888,
	},
];

const domContainer = document.querySelector('#main');
ReactDOM.render(<WeatherCardContainer cities={cities} weatherApi={weatherApi} apiKey={apiKey}/>, domContainer);
