import React from 'react';

import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Car from '../pages/Car';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/car" component={Car}/>
      <Route path="/" component={Home}/>
    </Switch>
  )
}