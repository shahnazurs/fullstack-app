import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Employee from './components/employee';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <div style={{margin: 20 }}>
            <Route path="/" exact component={Home} />
            <Route path="/employeedashboard" component={Employee} />
            <Route path="/about" component={About} />
            </div>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
