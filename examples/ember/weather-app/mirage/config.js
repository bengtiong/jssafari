export default function() {

  this.namespace = 'api';

  this.get('/forecasts', function () {
    return {
      data: [
        {
          type: 'forecasts',
          id: 'monday',
          attributes: {
            dayofweek: "Monday",
            weather: "Sunny",
            temp: 32,
            precipitation: "0%",
            humidity: "37%",
            wind: "8 mph"
          }
        }, 
        {
          type: 'forecasts',
          id: 'tuesday',
          attributes: {
            dayofweek: "Tuesday",
            weather: "Partly Cloudy",
            temp: 31,
            precipitation: "20%",
            humidity: "41%",
            wind: "9 mph"
          }
        }, 
        {
          type: 'forecasts',
          id: 'wednesday',
          attributes: {
            dayofweek: "Wednesday",
            weather: "Partly Cloudy",
            temp: 24,
            precipitation: "0%",
            humidity: "46%",
            wind: "15 mph"
          }
        },
        {
          type: 'forecasts',
          id: 'thursday',
          attributes: {
            dayofweek: "Thursday",
            weather: "Partly Cloudy",
            temp: 22,
            precipitation: "20%",
            humidity: "48%",
            wind: "14 mph"
          }
        },
        {
          type: 'forecasts',
          id: 'friday',
          attributes: {
            dayofweek: "Friday",
            weather: "Partly Cloudy",
            temp: 22,
            precipitation: "10%",
            humidity: "48%",
            wind: "15 mph"
          }
        },
        {
          type: 'forecasts',
          id: 'saturday',
          attributes: {
            dayofweek: "Saturday",
            weather: "Showers",
            temp: 22,
            precipitation: "50%",
            humidity: "63%",
            wind: "16 mph"
          }
        },
        {
          type: 'forecasts',
          id: 'sunday',
          attributes: {
            dayofweek: "Sunday",
            weather: "Partly Cloudy",
            temp: 22,
            precipitation: "10%",
            humidity: "61%",
            wind: "12 mph"
          }
        }
      ]
    }
  });

  this.get('/warnings', function () {
    return {
      data: [
        {
        type: 'warnings',
        id: 'grand-old-mansion',
        attributes: {
          description: 'Heavy thunderstorm is expected between 06:00 Sat 28th and 19:00 Sat 28th. Danger to life from fast flowing or deep floodwater.',
          alertlevel: 'red'
        }
      }, 
      {
        type: 'warnings',
        id: 'urban-living',
        attributes: {
          description: 'Heavy showers is expected between 06:00 Sat 26th and 19:00 Sat 27th.',
          alertlevel: 'orange'
        }
      },
      {
        type: 'warnings',
        id: 'downtown-charm',
        attributes: {
          description: 'Rain is expected between 06:18 Sat 14th and 12:00 Sat 15th.',
          alertlevel: 'yellow'
        }
      }]
    }
  });
}
