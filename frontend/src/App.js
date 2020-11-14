import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Employee from './components/employee';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <React.Fragment>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/employeedashboard" component={Employee} />
          <Route path="/about" component={About} />
        </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
