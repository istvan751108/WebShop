import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../fetcher";

const PageNavbar: FC = () => {
    const [categories, setCategories] = useState<{ data: any[]; }>({ data: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        };
        fetchData();
    }, []);


    const renderCategories = () => {
        return categories.data.map((c) => (
            <li key={c.id}>
                <Link to={`/categories/${c.id}`}>{c.title} </Link>
            </li>
        ));
    };

    return (
        <nav>
            <ul>{categories.data && renderCategories()}</ul>
        </nav>
    )
}
export default PageNavbar;