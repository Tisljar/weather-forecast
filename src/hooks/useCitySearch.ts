import { ChangeEvent, useState } from 'react';
import { LocationSearchProps, optionType } from '../types';

const useCitySearch = ({onOptionSelect}: LocationSearchProps) => {
    const [location, setLocation] = useState<string>('');
  const [options, setOptions] = useState<optionType[]>([]);

  const searchClick = () => {
    if (options.length > 0) {
        setLocation(options[0].name);
        setOptions([]);
        onOptionSelect(options[0]);
      } else {
        console.error('No options available to select');
      }
  }
  const optionClick = (option: optionType) => {
    setLocation(option.name);
    setOptions([]);
    onOptionSelect(option);
  }
  const getSearchOptions = async (value: string) => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      
      if (!res.ok) {
        throw new Error('Failed to fetch search options');
      }

      const data = await res.json();
      setOptions(data);

    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setLocation(value);
    if (value === ''){
        setOptions([]);
        return;
    } 
    getSearchOptions(value);
  };

  return {
    location,
    onInputChange,
    optionClick,
    searchClick,
    options,
  }
}

export default useCitySearch;