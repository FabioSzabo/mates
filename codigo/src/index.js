import Slider from './js/slider';
import Nav from './js/nav'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { SliderData } from './js/sliderdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Slider/>
  </React.StrictMode>
);

reportWebVitals();
