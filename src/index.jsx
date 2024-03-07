import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await App();
  root.render(<>{vdom}</>);
};

app();
