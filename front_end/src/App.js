import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Category from './components/category';
import CategoryProduct from './components/category_products';
import { fetcher } from './fetcher';


function App() {
  const [categories, setCategories] = useState( {errorMessage: '',data: [] } );
  const [products, setProducts] = useState( {errorMessage: '',data: [] } );

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await fetcher("/categories");
      setCategories(responseObject);
    }
    fetchData();
  }, [])

   const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await fetcher("/products?catId=" +id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick = {() => handleCategoryClick(c.id)}  />)
  }

  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct key={p.id} {...p}> {p.title} </CategoryProduct>);
 }

  return (
    <>
    <header>Webáruház</header>

    <section>
      <nav>
        {categories.errorMessage && <div>Hiba: {categories.errorMessage} </div>}
        { categories.data && renderCategories() }
      </nav>
      <article>
        <h1>Termékek</h1>
        { products.errorMessage && <div>Hiba: {products.errorMessage} </div>}
        { products.data && renderProducts()}
      </article>
    </section>

    <footer>
      Lábrész
    </footer>
    </>
    
  );
}

export default App;
