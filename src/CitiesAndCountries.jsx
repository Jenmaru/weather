import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useDispatch } from 'react-redux';
import { actions } from './slices/weatherDataSlice.js';
import countriesjson from './components/countries/countries.json';

const Countries = () => {
  const urlApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = 'ac49b9980690f8865a0bff21790989ef';
  const dispatch = useDispatch();
  const [currentCities, setCurrentCities] = useState('');
  const keys = Object.keys(countriesjson);
  const countries = keys.map((el) => ({ name: el }));

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelectCountry = (item) => {
    console.log(item, 'vasyan');
    setCurrentCities(countriesjson[item.name].map((el) => ({ name: el })));
  };

  const handleOnSelectCity = (item) => {
    const res = async () => {
      const response = await axios.get(`${urlApi}${item.name}&appid=${apiKey}&lang=ru&units=metric`);
      console.log(response);
      dispatch(actions.newData((response.data)));
      return response;
    };
    res();
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResultCountry = (item) => (
    <span style={{ display: 'block', textAlign: 'left' }}>
      {item.name}
    </span>
  );

  const formatResultCity = (item) => (
    <span style={{ display: 'block', textAlign: 'left' }}>
      {item.name}
    </span>
  );

  return (
    <div className="row container">
      <div className="col-sm form">
        <ReactSearchAutocomplete
          styling={{
            marginRight: '1rem', backgroundColor: 'white', borderRadius: '10px', border: '3px solid #dfe1e5', clearIconMargin: '-2px 5px 0 0',
          }}
          items={countries}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelectCountry}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResultCountry}
          aria-label="Default select example"
        />
      </div>
      <div className="col-sm form">
        <ReactSearchAutocomplete
          items={currentCities}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelectCity}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResultCity}
          style={{ marginRight: '1rem' }}
          aria-label="Default select example"
        />
      </div>
    </div>
  );
};

export default Countries;
