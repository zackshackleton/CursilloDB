import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './reducers';
import LayoutContainer from './containers/LayoutContainer';

import './styles/index.sass';

const initialState = {
  infoReducer: {
    result: {}
  },
};

var store = createStore(
  reducer, 
  initialState, 
  compose( applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension() )
);

ReactDOM.render(
  <Provider store={store}>
    <LayoutContainer />
  </Provider>,

  document.getElementById('root')
);
