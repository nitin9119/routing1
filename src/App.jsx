import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {About} from './components/About';
import {Navbar}  from "./components/Navbar";
import {Products} from "./components/Products";
import {Productsdetails} from "./components/Productsdetails";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Productsdetails />}></Route>
        <Route path="/about" element={<About />}></Route>
       
        <Route path="*" element={<div>404 not found</div>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
