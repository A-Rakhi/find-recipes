import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naav from './Components/Naav';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Router>
        <Naav />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          {/* <Route path="*">
            <ErrorPage />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
