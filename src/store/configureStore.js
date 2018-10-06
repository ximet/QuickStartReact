import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState, history) {
  return createStore(
    connectRouter(history)(reducer),
    initialState,
    compose(
      applyMiddleware(thunk, routerMiddleware(history))
    )
  );
};