import './App.css';
import React, { useEffect, useState } from 'react';
import { getCategories } from "./fetcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './components/product_details';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/category';
import Layout from './components/layout';
import Home from './components/home';

function App() {
  const [categories, setCategories] = useState<{ errorMessage: string; data: any[] }>({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path='basket' element={<Basket />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='products/:productId' element={<ProductDetail />} />
            <Route path='categories/:categoryId' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;