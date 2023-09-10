
import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import { Navbar } from './Components/Navbar';
import { Cart } from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import { Home } from './Home/Home';
import { ShopContextProvider } from './Context/shop-context';


function App() {
  return (
    <div >
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
