import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Food from './Components/Food';
import FilterForm from './Components/FiltersForm';
import SearchPage from './Components/SearchPage';
import Cart from './Components/Cart';
import CartPage from './Components/CartPage';
import Checkout from './Components/Checkout';


function App() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="food" element={<Food />} />
                <Route path="restaurants" element={<Food />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='checkout' element={<Checkout />} />                
            </Route>
        </Routes>
    </>
  );
}

export default App;