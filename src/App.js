import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Basket from './containers/Basket';
import NavBar from './components/NavBar';
import BasketItems from './components/BasketItems';

function App() {


  return (
      <div className="App">
         <Home/>
      </div>

  );
}

export default App;


{/* <Router>
<NavBar/>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/basket" element={<Basket/>}/>
  </Routes>
</Router>
<AllItems allProducts={allProducts} addToBasket={addToBasket}></AllItems>
<Basket basket={basket}/> */}