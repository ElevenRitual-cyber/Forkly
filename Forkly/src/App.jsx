import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Food from './Components/Food';
import FilterForm from './Components/FiltersForm';
import SearchPage from './Components/SearchPage';
import Cart from './Components/Cart';
import CartPage from './Components/CartPage';
import Checkout from './Components/Checkout';
import OwnerLayout from './OwnerLayout';
import DashBoard from './Components/kitchen/Dashboard';
import RecentOrders from './Components/kitchen/RecentOrders';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="food" element={<Food />} />
          <Route path="restaurants" element={<Food />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="owner" element={<OwnerLayout />}>

            <Route index element={<DashBoard />} />

            <Route path="dashboard" element={<DashBoard />} />

            <Route path="orders" element={<RecentOrders fullWidth />} />

          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;