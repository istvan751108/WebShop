import React, { useEffect, useState } from "react";

import { getProductsByQuery } from "../fetcher";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./category_products";

const SearchResults = () => {
  const [products, setProducts] = useState({
    errorMessage: "",
    data: [],
  });

  const [searchParams] = useSearchParams();
  const query = searchParams.get("s") || "";


  useEffect(() => {
    const fetchData = async () => {
        const responseObject = await getProductsByQuery(query);
      setProducts(responseObject);
    };
    fetchData();
  }, [query]);

  const renderProducts = () => {
    if (products.data.length > 0) {
    return products.data.map((p: any) => (
      <CategoryProduct key={p.id} {...p}>
        {p.title}
      </CategoryProduct>
    ));
    }
    else {
        return <div>Nincs találat!</div>
    }
  };

  return (
    <div>
      {products.errorMessage && <div>Hiba: {products.errorMessage}</div>}

      {renderProducts()}
    </div>
  );
};

export default SearchResults;
