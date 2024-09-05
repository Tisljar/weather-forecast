import { WeatherForecastProps } from '../../types'

const WeatherForecast = ({weatherData, city}: WeatherForecastProps): JSX.Element => {
  return (
    <div>
      <h1 className='font-medium text-4xl text-gray-900'>Weather in {city}</h1>
    </div>
  )
}

export default WeatherForecast
