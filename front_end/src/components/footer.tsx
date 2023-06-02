import React, { FC } from "react";
import { Link } from "react-router-dom";

export const PageFooter: FC = () => (
    <footer>
        <Link to="/">Kezdőlap</Link> | <Link to="/basket">Kosár</Link>
    </footer>
);