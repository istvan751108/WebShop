import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CartIcon } from "./icons";
import Search from "./search";

export const PageHeader: FC = () => {
    const location = useLocation();
    const shouldClearSearch = location.pathname !== "/search";

    return (
        <header>
            <div id="headerHomeIcon">
                <Link to="/">
                    <HomeIcon width={40} />
                </Link>
            </div>
            <Search shouldClear={shouldClearSearch} />
            <div id="headerTitle">WEBÁRUHÁZ</div>
            <div id="headerCartIcon">
                <Link to="/basket">
                    <CartIcon width={40} />
                </Link>
            </div>
        </header>
    );
}