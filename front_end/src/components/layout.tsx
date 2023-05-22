import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Categories } from "../model/categories";
import { HomeIcon, CartIcon } from "./icons";

const Layout: FC<Categories> = ({ categories }) => {
  const renderCategories = () => {
    return categories.data.map((c) => (
      <li key={c.id}>
        <Link to={`/categories/${c.id}`}>{c.title} </Link>
      </li>
    ));
  };

  return (
    <>
      <header>
        <div id="headerHomeIcon">
        <Link to='/'><HomeIcon width={40} /></Link>
        </div>
        <div id="headerTitle">WEBÁRUHÁZ</div>
        <div id="headerCartIcon">
          <Link to='/basket'><CartIcon width={40} /></Link>
        </div>
      </header>

      <section>
        <nav>
          {categories.errorMessage && (
            <div>Hiba: {categories.errorMessage} </div>
          )}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <article>
          <Outlet />
        </article>
      </section>

      <footer>
        <Link to="/">Kezdőlap</Link> | <Link to="/basket">Kosár</Link>
      </footer>
    </>
  );
};

export default Layout;
