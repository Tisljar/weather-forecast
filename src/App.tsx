import { useState } from 'react';
import LocationSearch from './components/LocationSearch/LocationSearch';
import { optionType } from './types';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import useForecast from './hooks/useForecast';

function App() {
  const {
    isOptionSelected,
    weatherData,
    city,
    onOptionSelect,
  } = useForecast();
  return (
    <main className='flex justify-center items-center bg-sky-500 w-full h-[100vh]'>
      <section
        className='w-full md:max-w-[500px] p-4 flex flex-col 
      text-center items-center justify-center md:px-10 lg:px-24 h-full lg:h-[500px]
      text-gray-950 bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg rounded'
      >
        {!isOptionSelected ? <LocationSearch onOptionSelect={onOptionSelect} /> : <WeatherForecast weatherData={weatherData} city={city} />}
      </section>
    </main>
  );
}

export default App;
