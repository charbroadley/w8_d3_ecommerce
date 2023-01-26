import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Basket from './containers/Basket';
import NavBar from './components/NavBar';


function App() {


  return (
      <div className="App">
        <Home/>
      </div>

  );
}

export default App;

// LAB REVIEW

// USE PARAMS:
// Part of react router -> set up in routes /products/:id
// const {id} = useParams() <- destructuring (could have {year, region} for the whiskey example) - id here is the number someone will type into the search bar, they could type "bananas" which would break the next function but they could type that. Instead of pushing a variable in, you're pulling one out. 
// const product = getProductForId(Number(id)) <- feeding in the id into a function to find the product that has that id as a value which will then display on the URL for that number. Using Number to convert the string typed into the URL into a number as that's what the IDs are in the object
// useParam gets back an object-> {id: "1"}
// /whiskies/speyside/2001 -> {region: "speyside", year: "2001"} - the values are all strings as that's what we put into the URL

//DESTRUCTURING:
// A way of pulling out the key value pairs into variables in a syntactically neat way 
// person =    { ID: 12,
//              name: "Sarah",
//              age: 29 }
// const {id, name, age} = person -> const id = 12, const name = "Sarah", const age = 29 (could console.log(id) and get 12)

// ROUTES:
// Only render when we're there in the URL

// MAPS:
// Don't do a map in the render. It'll work but you should really do it above, save it to a variable and then pass the variable in down in the render.