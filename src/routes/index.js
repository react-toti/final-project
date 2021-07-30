import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import LoginAmin from '../pages/LoginAmin';


export default function Routes() {
  return(
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/product/:id" component={Product}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/Admin" component={LoginAmin}/>
      <Route path="/" component={Home}/>
    </Switch>
  )
}