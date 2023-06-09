import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../fetcher";

import { CartContext } from "../contexts/cartContext";

const ProductDetail = () => {
  const [product, setProduct] = useState<{ data: any }>({ data: {} });
  const { productId } = useParams<{ productId: string | undefined }>();
  const { addProduct } = useContext(CartContext);

  React.useEffect(() => {
    const fetchData = async () => {
      if (typeof productId === "string") {
        const responseObject = await getProductById(parseInt(productId));
        setProduct(responseObject);
      }
    };
    fetchData();
  }, [productId]);

  const handleAddToCart = () => {
    const { id, title, price } = product.data;
    addProduct({ id, title, price });
  };

  return (
    <article className="category-article">
      <div className="category-product-title">{product.data.title}</div>

      <figure>
        <div className="category-product-image-container">
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </div>
      </figure>

      <aside className="category-product-info-header">
        <div></div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-info-finance-price">
          {product.data.price} Ft
        </div>

        <div className="category-product-info-stock">
          <h3>Raktáron: {product.data.stock} db</h3>
        </div>

        <div className="category-product-action">
          <button onClick={handleAddToCart}>Kosárba rakom</button>
        </div>
      </aside>

      <div className="product-info-description">{product.data?.description}</div>
    </article>
  );
};

export default ProductDetail;
