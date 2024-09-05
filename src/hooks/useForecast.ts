import { useState } from 'react';
import { forecastType, optionType } from '../types';
import { initialForecastState } from '../helpers/initialForecastState';

const useForecast = () => {
  const [weatherData, setWeatherData] = useState<forecastType | null>(null);
  const [city, setCity] = useState<string>('');
  const getWeatherForecast = async (option: optionType) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${option.lat}&lon=${option.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!res.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await res.json();
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 16),
      }
      console.log(forecastData);
      setWeatherData(forecastData);
    } catch (err) {
      console.error('Error fetching weather data:', err);
    }
  };
  const onOptionSelect = (option: optionType) => {
    setCity(option.name);
    getWeatherForecast(option);
  };

  return {
    weatherData,
    city,
    onOptionSelect,
  };
};

export default useForecast;
