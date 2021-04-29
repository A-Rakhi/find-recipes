import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naav from './Components/Naav';
import Data from './Components/Data'


function App() {
  return (
    <div className="App">
      <Naav/>
      <Home/>
      <Data/>
    </div>
  );
}

export default App;
