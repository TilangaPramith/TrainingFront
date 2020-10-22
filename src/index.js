import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route, browserHistory } from 'react-router';
import history from './history';

// Import all components
import Login from './features/login';
import Signup from './features/signup';
import Widgets from './features/widgets';
import './index.css';

// Import reducer & sagas
import IndexReducer from './features/index-reducer';
import IndexSagas from './features/index-sagas';

const sagaMiddleware = createSagaMiddleware();

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(IndexSagas);


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/widgets" component={Widgets} />
      </Route>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
