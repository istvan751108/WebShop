import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = ({categories}) => {

    const renderCategories = () => {
        return categories.data.map(c =>
            <li key={c.id}>
                <Link to={`/categories/${c.id}`}>{c.title} </Link> 
            </li>
        )  
      }

  return (
    <>
    <header>Webáruház</header>

    <section>
      <nav>
        {categories.errorMessage && <div>Hiba: {categories.errorMessage} </div>}
        <ul>
          { categories.data && renderCategories() }
        </ul>
        
      </nav>
      <article>
        <Outlet />
      </article>
    </section>

    <footer>
      <Link to='/'>Kezdőlap</Link> | <Link to='/basket'>Kosár</Link>
    </footer>
    </>
  )
}

export default Layout