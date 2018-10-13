import React from 'react';
import { connect } from 'react-redux';
import selectors from './selectors.js';
import actions from './actions.js';
export const WeatherOutputView = connect(selectors, actions)((props) => {
  return <div>
          <div>{ props.TITLE }</div>
        </div>
});