import { ReactNode } from 'react';

export type optionType = {
    name: string;
    country?: string;
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
                speed: number;
                gust: number;
                deg: number;
            };
            clouds: {
                all: number
            }
            pop: number;
            visibility: number;
        }
    ]
  }

  export type ForecastListItem = {
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
        speed: number;
        gust:  number;
        deg:  number;
    };
    clouds: {
        all: number
    }
    pop: number;
    visibility: number;
}

export type LocationSearchProps = {
    onOptionSelect: (option: optionType) => void;
};

export type WeatherForecastProps = {
    weatherData: forecastType;
    city: string;
}

export type TileProps = {
    title: string;
    info: string | JSX.Element
  description?: string | JSX.Element
    icon: ReactNode; 
}