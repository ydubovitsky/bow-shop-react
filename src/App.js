import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/main/cart/cart.component';
import CategoryList from './components/main/category/category-list/category-list.component';
import Main from './layers/main/main.layer';
import Checkout from './components/main/checkout/checkout.component';
import Shop from './components/main/shop/shop.component';
import Admin from "./layers/admin/admin.layer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<CategoryList />} />
          <Route path="home" element={<CategoryList />} />
          <Route path="shop" element={<Shop />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="shop/:name" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
