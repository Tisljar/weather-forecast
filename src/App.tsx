import LocationSearch from './components/LocationSearch/LocationSearch';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import useForecast from './hooks/useForecast';

function App() {
  const { weatherData, city, onOptionSelect } = useForecast();
  return (
    <main
      className='flex justify-center sky-bg items-center w-full min-h-[100vh]'
    >
      {!weatherData ? (
        <section
          className='w-full min-h-[100vh] p-4 flex flex-col 
      text-center items-center justify-center md:px-10 lg:px-24 h-full lg:h-[500px]
      text-gray-950 bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg rounded'
        >
          <LocationSearch onOptionSelect={onOptionSelect} />{' '}
        </section>
      ) : (
        <section
          className='w-full min-h-[100vh] py-4 md:py-4 flex flex-col 
                    md:px-10 lg:px-24 h-full lg:h-auto
                    text-gray-950 bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg rounded'
        >
          <WeatherForecast weatherData={weatherData} city={city} />
        </section>
      )}
    </main>
  );
}

export default App;
