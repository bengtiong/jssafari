var MockServer= function () {
	/* add weather data here */
	var weatherData = {
		city: "London",
		country: "UK",
		warnings: [{
				description: 'Heavy thunderstorm is expected between 06:00 Sat 28th and 19:00 Sat 28th. Danger to life from fast flowing or deep floodwater.',
				alertLevel: "red",
			},
			{
				description: 'Heavy showers is expected between 06:00 Sat 26th and 19:00 Sat 27th.',
				alertLevel: "orange",
			},
			{
				description: 'Rain is expected between 06:18 Sat 14th and 12:00 Sat 15th.',
				alertLevel: "yellow",
			},
		],
		forecasts: [{
				dayOfWeek: "Monday",
				weather: "Sunny",
				temp: 32,
				precipitation: "0%",
				humidity: "37%",
				wind: "8 mph"
			},
			{
				dayOfWeek: "Tuesday",
				weather: "Partly Cloudy",
				temp: 31,
				precipitation: "20%",
				humidity: "41%",
				wind: "9 mph"
			},
			{
				dayOfWeek: "Wednesday",
				weather: "Partly Cloudy",
				temp: 24,
				precipitation: "0%",
				humidity: "46%",
				wind: "15 mph"
			},
			{
				dayOfWeek: "Thursday",
				weather: "Partly Cloudy",
				temp: 22,
				precipitation: "20%",
				humidity: "48%",
				wind: "14 mph"
			},
			{
				dayOfWeek: "Friday",
				weather: "Partly Cloudy",
				temp: 22,
				precipitation: "10%",
				humidity: "48%",
				wind: "15 mph"
			},
			{
				dayOfWeek: "Saturday",
				weather: "Showers",
				temp: 22,
				precipitation: "50%",
				humidity: "63%",
				wind: "16 mph"
			},
			{
				dayOfWeek: "Sunday",
				weather: "Partly Cloudy",
				temp: 22,
				precipitation: "10%",
				humidity: "61%",
				wind: "12 mph"
			}
		]
	};

	/* method returns weather data */
	var getWeatherData = function () {
		return weatherData;
	}

	return {
		/* add data that will be exposed publicly */
		getWeatherData: getWeatherData,
	};
};