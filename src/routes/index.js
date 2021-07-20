import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Car from '../pages/Car';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/car" component={Car}/>
      <Route path="/" component={Home}/>
    </Switch>
  )
}