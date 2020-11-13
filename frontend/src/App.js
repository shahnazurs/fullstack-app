import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
