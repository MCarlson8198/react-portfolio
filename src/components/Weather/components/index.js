import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class WeatherApp extends Component {
  render(){
    return (
      <div className="weather-app-body">
        <Provider store={createStoreWithMiddleware(reducers)}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default WeatherApp;
