import { getHumidityValue, getPop, getSunTime, getVisibilityValue, getWindDirection } from '../../helpers/dataHandling';
import { WeatherForecastProps } from '../../types';
import { WiSunrise, WiSunset, WiStrongWind, WiThermometer, WiHumidity, WiBarometer,  WiDayFog, WiRain } from 'react-icons/wi';
import Tile from '../Tile/Tile';

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

const WeatherForecast = ({
  weatherData,
  city,
}: WeatherForecastProps): JSX.Element => {
    console.log(weatherData);
  const today = weatherData.list[0];
  return (
    <>
      <div className='mx-auto py-8 w-[90%] sm:max-w-[62lvw] lg:max-w-[550px]'>
        <div className='text-center'>
          {/* <h2 className='font-medium text-4xl text-gray-900'>{city}</h2> */}
          <h2 className='font-bold text-4xl text-gray-900 mt-4'>
            {weatherData.name}
            <span className='font-thin'>, {weatherData.country}</span>
          </h2>
          <h2 className='text-4xl font-bold'>
            <Degree temp={Math.round(today.main.temp)} />
          </h2>
          <p className='text-md'>
            {today.weather[0].main} {today.weather[0].description}
          </p>
          <p className='text-md'>
            High: <Degree temp={Math.ceil(today.main.temp_max)} /> Low:{' '}
            <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </div>
        <div className='flex overflow-x-scroll mt-4 pb-2 mb-5 scroll-bar'>
          {weatherData.list.map((item, i) => (
            <div
              key={i}
              className='inline-block text-center w-[50px] flex-shrink-0'
            >
              <p className='text-md'>
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p className='text-md font-medium'>
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </div>
            <div className='w-full flex text-gray-900 gap-0 justify-center md:gap-8 md:justify-center'>
          <div className='w-[140px] text-xs font-bold flex flex-col items-center 
        bg-white/15 backdrop-blur-lg rounded drop-shadow-lg py-4 mx-1 mb-5'>
            <WiSunrise size={32}/>
            <span className="mt-2">{getSunTime(weatherData.sunrise)}</span>
          </div>
          <div className='w-[140px] text-xs font-bold flex flex-col items-center 
        bg-white/15 backdrop-blur-lg rounded drop-shadow-lg py-4 mx-1 mb-5'>
            <WiSunset size={32} />
            <span className="mt-2">{getSunTime(weatherData.sunset)}</span>
          </div>
          </div>
          <div className='flex flex-wrap justify-center md:justify-center text-gray-900'>
          <Tile
            icon={<WiStrongWind size={32}/>}
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
          />
          <Tile
            icon={<WiThermometer size={32}/>}
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <Tile
            icon={<WiHumidity size={32}/>}
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon={<WiRain size={32}/>}
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          <Tile
            icon={<WiBarometer size={32}/>}
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={` ${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          <Tile
            icon={<WiDayFog size={32}/>} 
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
