import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';
import BeerDetails from '../BeerDetails/BeerDetails';
import AddForm from "../AddForm";

import '../../styles/global.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/:id" component={BeerDetails} />
          <Route path="/addform" component={AddForm}/>
        </Switch>
        <AddForm/>
      </BrowserRouter>
    );
  };
}

export default App;
