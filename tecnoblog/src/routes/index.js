import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CMA from '../Pages/CMA';
import Home from '../Pages/Home';
import Materia from '../Pages/Materia';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/CMA" component={CMA} />
      <Route exact path="/materia/" component={Materia} />
    </Switch>
  );
}
