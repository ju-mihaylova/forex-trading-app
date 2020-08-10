import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/index.css';
import ForexRatesApp from './components/ForexRatesApp';

ReactDOM.render(
  <React.StrictMode>
    <ForexRatesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
