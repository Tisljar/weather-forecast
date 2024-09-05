export type optionType = {
    name: string;
    lat: number;
    lon: number;
}


  export type forecastType = {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    list: [
        {
            dt:number;
            main: {
                feels_like: number;
                humidity: number;
                pressure: number;
                temp: number;
                temp_max: number;
                temp_min: number;
            }
            weather:[{
                main: string;
                icon: string;
                description: string;
            }] 
            wind:{
                speed: string;
                gust: string;
                deg: string;
            };
            clouds: {
                all: number
            }
            pop: number;
            visibility: number;
        }
    ]
  }

export type LocationSearchProps = {
    onOptionSelect: (option: optionType) => void;
};

export type WeatherForecastProps = {
    weatherData: forecastType | null;
    city: string;
}