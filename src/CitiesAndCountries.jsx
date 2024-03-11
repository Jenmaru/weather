import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions } from './slices/weatherDataSlice.js';
import countriesjson from './components/countries/countries.json';

const Countries = () => {
  const urlApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = 'ac49b9980690f8865a0bff21790989ef';
  const dispatch = useDispatch();
  const [currentCountry, setCurrentCountry] = useState('Afghanistan');
  const [currentCity, setCurrentCity] = useState(countriesjson[currentCountry][0]);
  const keys = Object.keys(countriesjson);

  useEffect(() => {
    const res = async () => {
      const response = await axios.get(`${urlApi}${currentCity}&appid=${apiKey}&lang=ru&units=metric`);
      console.log(response);
      dispatch(actions.newData((response.data)));
      return response;
    };
    res();
  }, [currentCity, dispatch]);

  return (
    <div className="row container">
      <Form.Select className="col-sm form" style={{ marginRight: '1rem' }} aria-label="Default select example" onChange={(e) => { setCurrentCity(countriesjson[currentCountry][0]); setCurrentCountry(e.target.value); }}>
        {keys.map((el) => <option key={`${el}0`} value={el}>{el}</option>)}
      </Form.Select>
      <Form.Select className="col-sm form" style={{ marginRight: '32rem' }} aria-label="Default select example" onChange={(e) => setCurrentCity(e.target.value)}>
        {countriesjson[currentCountry].map((el) => <option key={`${el}1`} value={el}>{el}</option>)}
      </Form.Select>
    </div>
  );
};

export default Countries;
