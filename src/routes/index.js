import React from 'react';
import { Switch } from 'react-router';
import { RouteWithLayout } from './routeWithLayout.js';

import Home from '../views/HomePage/Home.jsx';
import Hello from '../views/HelloPage/Hello.jsx';
import NoMatch from '../views/NoMatch/NoMatch.jsx';
import { WeatherGetInfoView } from '../features/WeatherFeature/WeatherGetInfoView/view.jsx';
import { WeatherOutputView } from '../features/WeatherFeature/WeatherOutputView/view.jsx';
import { PublicLayout } from '../layouts/PublicLayout.jsx';
const routes = (
  <div>
    <Switch>
      <RouteWithLayout layout={PublicLayout} exact path="/" component={Home} />
      <RouteWithLayout layout={PublicLayout} path="/hello" component={Hello} />
      <RouteWithLayout layout={PublicLayout} path="/weather" component={WeatherGetInfoView} />
      <RouteWithLayout layout={PublicLayout} path="/weatherOutput" component={WeatherOutputView} />

      <RouteWithLayout layout={PublicLayout} component={NoMatch} />
    </Switch>
  </div>
)

export default routes