import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

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
  return (
    <>
    <header>Webáruház</header>

    <section>
      <nav>
        {
        results.map(categori => (
          <div key={categori.id}>{categori.title}</div>
        ))
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
