import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naav from './Components/Naav';
import RecipeList from './Components/RecipeList';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Naav />
        <Switch>
          <Route path="/RecipeList">
            <RecipeList />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          {/* <Route path="*">
            <ErrorPage />
          </Route> */}
        </Switch>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
