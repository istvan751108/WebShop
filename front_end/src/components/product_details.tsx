import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../fetcher";

const ProductDetail = () => {
  const [product, setProduct] = useState<{ errorMessage: string; data: any }>({
    errorMessage: "",
    data: {},
  });
  const { productId } = useParams<{ productId: string | undefined }>();

  React.useEffect(() => {
    const fetchData = async () => {
      if (typeof productId === "string") {
        const responseObject = await getProductById(parseInt(productId));
        setProduct(responseObject);
      }
    };
    fetchData();
  }, [productId]);

  return (
    <article className="category-article">
      <div className="category-product-title">{product.data.title}</div>

      <figure>
        <div className="category-product-image-container">
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </div>
      </figure>

      <aside className="category-product-info-header">
        <div className="category-product-info-dimensions">
          <h3>Méretek</h3>
          <label> {product.data.specs?.dimensions} </label>
        </div>

        {product.data.specs?.capacity && (
          <div className="category-product-info-capacity">
            <h3>Kapacitás</h3>
            <label> {product.data.specs?.capacity} </label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Tulajdonságok</h3>
          <ul>
            {product.data.features?.map((f: string, i: number) => (
              <li key={`feature${i}`}>{f}</li>
            ))}
          </ul>
        </div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-info-finance-price">
          {product.data.price} Ft
        </div>

        <div className="category-product-info-stock">
          <h3>Raktáron: {product.data.stock} db</h3>
        </div>

        <div className="category-product-action">
          <button>Kosárba rakom</button>
        </div>
      </aside>

      <div className="product-info-description">{product.data?.description}</div>
    </article>
  );
};

export default ProductDetail;
