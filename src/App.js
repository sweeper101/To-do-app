import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='App-header'>
      <Switch>
          <Route exact path="/"> 
      <Home />
      </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
