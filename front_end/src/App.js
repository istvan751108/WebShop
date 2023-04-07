import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Category from './components/category';

function App() {
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data)
      })
  }, [])

  const renderCategories = () => {
    return results.map(c =>
      <Category key={c.id} id={c.id} title={c.title} />)
  }

  return (
    <>
    <header>Webáruház</header>

    <section>
      <nav>
        {
        renderCategories()
      }
      </nav>
      <article>
        Fő terület
      </article>
    </section>

    <footer>
      Lábrész
    </footer>
    </>
    
  );
}

export default App;
