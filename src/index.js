import React from 'react';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore.js';

const history = createBrowserHistory();
const store = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root')
  )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
