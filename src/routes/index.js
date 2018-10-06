import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../views/Home'
import Hello from '../views/Hello'
import NoMatch from '../views/NoMatch'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes