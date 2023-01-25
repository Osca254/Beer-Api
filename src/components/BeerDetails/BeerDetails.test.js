import React from 'react';
import ReactDOM from 'react-dom';
import BeerDetails from './BeerDetails';

it('renders the beerdetails component', () => {
    const beerdetails = document.createElement('div');
    ReactDOM.render(
        <BeerDetails />, beerdetails);
    ReactDOM.unmountComponentAtNode(beerdetails);
});
