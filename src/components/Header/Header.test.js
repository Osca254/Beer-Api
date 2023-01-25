import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter} from "react-router-dom";

it('renders a header component', () => {
  const header = document.createElement('header');
  ReactDOM.render(
  <BrowserRouter>
  <Header />
  </BrowserRouter>, header);
  ReactDOM.unmountComponentAtNode(header);
});
