import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllItems from './components/AllItems';
import Basket from './containers/Basket';
import NavBar from './components/NavBar';

function App() {
  const [allProducts, setAllProducts] = useState([
    {id: 1, name: "Double pepperoni", price: 22.99 },
    {id: 2, name: "Hawaiian", price: 22.99},
    {id: 3, name: "BBQ chicken", price: 22.99},
    {id: 4, name: "Garden party", price: 22.99},
    {id: 5, name: "Meat feast", price: 22.99}
  ])

  // const [choosenItem, setChoosenItem] = useState(null)
  const [basket, setBasket] = useState([])

  const addToBasket = (pizzaId) => {
    const pizzaToAddToBasket = allProducts.find((pizza) => {
      return pizza.id == pizzaId
    })
    const updatedBasket = [...basket, pizzaToAddToBasket]
    setBasket(updatedBasket)
  }

  return (
      <div className="App">
          <Router>
          <NavBar/>
            <Routes>
              <Route path="/basket" element={<Basket/>}/>
            </Routes>
          </Router>
          <AllItems allProducts={allProducts} addToBasket={addToBasket}></AllItems>
          <Basket basket={basket}/>
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