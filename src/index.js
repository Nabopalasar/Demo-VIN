import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App'
import VinService from "./servises/VinService";

const vinService = new VinService();

vinService.getVinInfo().then(res => console.log(res));
vinService.getVariable().then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
