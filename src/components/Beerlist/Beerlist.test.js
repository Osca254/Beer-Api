import React from 'react';
import ReactDOM from 'react-dom';
import Beerlist from './Beerlist';

it('renders the beerlist component', () => {
    const beerlist = document.createElement('div');
    ReactDOM.render(
        <Beerlist />, beerlist);
    ReactDOM.unmountComponentAtNode(beerlist);
});
