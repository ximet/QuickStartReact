import React from 'react';
import { connect } from 'react-redux';
import { homeViewSelector } from '../selectors/homeViewSelector.js';
import { homeViewActions } from '../actions/homeViewActions.js';
const Home  = connect(homeViewSelector, homeViewActions)((props) => {
  return <div>
          <div>{ props.TITLE }</div>

          <div onClick={props.redirectToHello}>{ props.BUTTON_LABEL }</div>
        </div>
})

export default Home