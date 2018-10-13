import React from 'react';
import { connect } from 'react-redux';
import selectors from './selectors.js';
import actions from './actions.js';
export const WeatherGetInfoView = connect(selectors, actions)((props) => {
  return <div>
          <div>{ props.TITLE }</div>

        <input type="text" onChange={(e) => props.handleCountryLabel1Change(e.target.value)} value={props.label1} />
        <input type="text" onChange={(e) => props.handleCountryLabel2Change(e.target.value)} value={props.label2} />
        <input type="text" onChange={(e) => props.handleCountryLabel3Change(e.target.value)} value={props.label3} />
        <input type="text" onChange={(e) => props.handleCountryLabel4Change(e.target.value)} value={props.label4} />

      <div onClick={props.submit}>SUBMIT</div>

        </div>
})