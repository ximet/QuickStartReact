import React from 'react';
import { connect } from 'react-redux';
import selectors from './selector.js';
import actions from './actions.js';
const WeatherGetInfoView = connect(selectors, actions)((props) => {
  return <div>
          <div>{ props.TITLE }</div>
        </div>
})

export default WeatherGetInfoView