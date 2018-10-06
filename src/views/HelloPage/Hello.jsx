import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './Hello.css';
import { helloViewActions } from '../../actions/helloViewActions.js';
const Hello = connect(null, helloViewActions)((props) => {
    return (
      <div className="Hello">
        <header className="Hello-header">
          <img src={logo} className="Hello-logo" alt="logo" />
          <p>
            Edit <code>src/index.js/App.js and another code</code> and save to reload.
          </p>
          <a
            className="Hello-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="Hello-button" onClick={props.redirectToHello}>Back Button</div>
        </header>
      </div>
    );
})

export default Hello;
