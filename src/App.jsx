import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Index from './components/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
