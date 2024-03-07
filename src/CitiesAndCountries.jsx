import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions } from './slices/weatherDataSlice.js';
import countriesjson from './components/countries/countries.json';

const Countries = () => {
  const dispatch = useDispatch();
  const [currentCountry, setCurrentCountry] = useState('Afghanistan');
  const [currentCity, setCurrentCity] = useState(countriesjson[currentCountry][0]);
  const keys = Object.keys(countriesjson);
  const res = async () => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=` +
    'd5b7986b3229a2766c316228c0f25015' +  // !!!
    '&units=metric');
    console.log(response);
    return response;
  };

  useEffect(() => {
    res()
      .then((data) => setTimeout(() => dispatch(actions.newData((data.data)))), 1000);
    }, [dispatch, res]);

    return (
      <div class="row container">
        <Form.Select className="col-sm form" style={{ marginRight: '1rem' }} aria-label="Default select example" onChange={(e) => setCurrentCountry(e.target.value)}>
          {keys.map((el) => {
            return <option key={el + '0'} value={el}>{el}</option>
          })}
        </Form.Select>
        <Form.Select className="col-sm form" style={{ marginRight: '32rem' }} aria-label="Default select example" onChange={(e) => setCurrentCity(e.target.value)}>
          {countriesjson[currentCountry].map((el) => {
            return <option key={el + '1'} value={el}>{el}</option>
          })}
        </Form.Select>
        </div>
      );
};

export {Countries};