import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Footer from './components/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/category/:product" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {/* <Footer />s */}
    </BrowserRouter>
  );
};
export default Router;
