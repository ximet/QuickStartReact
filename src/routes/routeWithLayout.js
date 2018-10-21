import React from 'react'
import { Route } from 'react-router'

export const RouteWithLayout = ({layout, component, ...rest}) => {
    return (
      <Route {...rest} render={(props) =>
        React.createElement( layout, props, React.createElement(component, props))
      }/>
    );
  }