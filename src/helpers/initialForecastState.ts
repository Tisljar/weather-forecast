export const initialForecastState = {
    name: '',
    country: '',
    sunrise: 0,
    sunset: 0,
    list: [
      {
        dt: 0,
        main: {
          feels_like: 0,
          humidity: 0,
          pressure: 0,
          temp: 0,
          temp_max: 0,
          temp_min: 0,
        },
        weather: [
          {
            main: '',
            icon: '',
            description: '',
          },
        ],
        wind: {
          speed: '',
          gust: '',
          deg: '',
        },
        clouds: {
          all: 0,
        },
        pop: 0,
        visibility: 0,
      },
    ],
  };