import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/main/cart/cart.component';
import CategoryList from './components/main/category-list/category-list.component';
import Main from './layers/main/main.layer';
import Checkout from './components/main/checkout/checkout.component';
import Shop from './components/main/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="shop" element={<Shop />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
