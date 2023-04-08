import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';
import styled from "styled-components";

const ProductDetail = () => {
    const [product, setProduct] = React.useState({errorMessage: '',data: {} })
    const {productId} = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [productId])

  return (
    <article className='category-article'>
        
        <div className='category-product-title'>  
           {product.data.title}
        </div>

        <figure>
            <div className='category-rpoduct-image-container'>
                <img src={`/assets/${product.data.image}`} alt={product.data.title} />
            </div>
        </figure>

        <aside className='category-product-info-header'>
            <div className='category-rpoduct-info-dimensions'>
                <h3>Méretek</h3>
                <label> {product.data.specs?.dimensions} </label>
            </div>

            {product.data.specs?.capacity && 
            <div className='category-product-info-capacity'>
                <h3>Kapacitás</h3>
                <label> {product.data.specs?.capacity} </label>
            </div>
            }

            <div className='category-product-info-features'>
                <h3>Tulajdonságok</h3>
                <ul>
                    {product.data.features?.map((f, i) => {return <li key={`feature${i}`} > {f} </li>})}
                </ul>
            </div>
        </aside>

        <aside className='category-rpoduct-finance'>
            <div className='category-product-info-finance-price'>
                 {product.data.price} Ft
            </div>

            <div className='category-product-info-stock'>
                <h3>Raktáron: {product.data.stock} db</h3>
            </div>

            <div className='category-product-action'>
                <button>Kosárba rakom</button>
            </div>

        </aside>

        <ProductInfoDescription>
            {product.data?.description} 
        </ProductInfoDescription>

    </article>
    
  )
}

export default ProductDetail

const ProductInfoDescription = styled.div`
    grid-column: 1 / span 3;
    padding: 20px;
`;