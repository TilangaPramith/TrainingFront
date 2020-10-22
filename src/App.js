import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PropTypes from 'prop-types';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome</h2>
    </header>
    <section className="App-body">
      {props.children}
    </section>
  </div>
)
App.propTypes = {
  children: PropTypes.node,
}

export default App;
