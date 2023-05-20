import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../fetcher";
import CategoryProduct from "./category_products";

const Category = () => {
  const [products, setProducts] = useState({
    errorMessage: "",
    data: [],
  });
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const responseObject = await getProducts(Number(categoryId));
        setProducts(responseObject);
      }
    };
    fetchData();
  }, [categoryId]);

  const renderProducts = () => {
    return products.data.map((p: any) => (
      <CategoryProduct key={p.id} {...p}>
        {p.title}
      </CategoryProduct>
    ));
  };

  return (
    <div>
      {products.errorMessage && <div>Hiba: {products.errorMessage}</div>}
      {products.data && renderProducts()}
    </div>
  );
};

export default Category;
