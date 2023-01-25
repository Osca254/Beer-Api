import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { BrowserRouter} from "react-router-dom";

it('renders the about component', () => {
  const about = document.createElement('about');
  ReactDOM.render(
  <BrowserRouter>
  <About />
  </BrowserRouter>, about);
  ReactDOM.unmountComponentAtNode(about);
});
