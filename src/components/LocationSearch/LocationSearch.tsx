import { ChangeEvent, useState } from 'react';
import { LocationSearchProps, optionType } from '../../types';
import useCitySearch from '../../hooks/useCitySearch';

const LocationSearch = ({
  onOptionSelect,
}: LocationSearchProps): JSX.Element => {
  const { location, onInputChange, optionClick, searchClick, options } =
    useCitySearch({ onOptionSelect });

  return (
    <>
      <h1 className='font-medium text-4xl text-gray-900'>Weather Forecast</h1>
      <p className='text-lg mt-2 text-gray-900'>
        Choose the location to get a forecast!
      </p>
      <div className='flex mt-10 md:mt-4 relative'>
        <input
          type='text'
          value={location}
          onChange={onInputChange}
          className='pl-2 pr-6 py-1 rounded-l-md border-2 border-white'
        />
        <ul className='absolute top-9 bg-white ml-1 rounded-b-md'>
          {options.map((option: optionType, index: number) => (
            <li key={option.name + '-' + index}>
              <button
                onClick={() => optionClick(option)}
                className='text-left text-sm- w-full hover:bg-gray-700 hover:text-white px-4 py-1 cursor-pointer'
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          className='rounded-r-md text-white border-2 bg-sky-500 border-white
        hover:border-gray-200 hover:text-gray-200 px-4 py-1 cursor-pointer'
          onClick={searchClick}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default LocationSearch;
