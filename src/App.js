import logo from './logo.svg';
import './App.css';
import AllItems from './components/AllItems';
import Basket from './containers/Basket';

function App() {
  return (
    <div className="App">
      <AllItems></AllItems>
      <Basket></Basket>
    </div>
  );
}

export default App;
