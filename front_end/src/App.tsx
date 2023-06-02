import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product_details";
import Basket from "./components/basket";
import Checkout from "./components/checkout";
import Category from "./components/category";
import Home from "./components/home";
import Layout from "./components/layout";
import OrderConfirmation from "./components/orderConfirmation";
import SearchResults from "./components/searchResult";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orderconfirmation" element={<OrderConfirmation />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="categories/:categoryId" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
