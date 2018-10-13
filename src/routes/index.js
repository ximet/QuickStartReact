import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../views/HomePage/Home.jsx'
import Hello from '../views/HelloPage/Hello.jsx'
import NoMatch from '../views/NoMatch/NoMatch.jsx'
import { WeatherGetInfoView } from '../features/WeatherFeature/WeatherGetInfoView/view.jsx'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/weather" component={WeatherGetInfoView} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes