import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import Order from './Order';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';



function App() {
  return (
    <div className="App">
      <CartProvider>
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
