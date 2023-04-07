import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Category from './components/category';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategories(data)
      })
  }, [])

   const handleCategoryClick = id => {
    fetch("http://localhost:3001/products?catId=" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
  }

  const renderCategories = () => {
    return categories.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick = {() => handleCategoryClick(c.id)}  />)
  }

  const renderProducts = () => {
    return products.map(p => <div key={p.id}>{p.title}</div>)
 }

  return (
    <>
    <header>Webáruház</header>

    <section>
      <nav>
        {
        categories && renderCategories()
      }
      </nav>
      <article>
        <h1>Termékek</h1>
        { products && renderProducts()}
      </article>
    </section>

    <footer>
      Lábrész
    </footer>
    </>
    
  );
}

export default App;
