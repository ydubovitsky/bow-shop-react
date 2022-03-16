import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/main/cart/cart.component';
import CategoryList from './components/main/category/category-list/category-list.component';
import Main from './layers/main/main.layer';
import Checkout from './components/main/checkout/checkout.component';
import Shop from './components/main/shop/shop.component';
import Admin from "./layers/admin/admin.layer";
import CategoryForm from "./components/admin/category/category-form.component";
import ProductDetail from "./components/main/product-detail/product-detail.component";
import Order from "./components/admin/order/order.component";
import SignIn from "./components/main/sign-in/sign-in.component";
import PrivateRoute from "./wrappers/privateRoute";
import Search from "./components/main/search/search.component";
import Page404 from "./components/common/page-404/page-404.component";
import Product from "./components/admin/product/product.component";

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
          <Route path="shop/:category/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        {/*TODO Улучшить роутинг */}
        <Route path="/admin" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>}
        >
          <Route index element={<Order />} />
          <Route path="order" element={<Order />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<CategoryForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
