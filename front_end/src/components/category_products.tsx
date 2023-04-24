import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductsProps } from '../model';


const CategoryProduct: FC<ProductsProps> = ({id,title,image,specs,features,price,stock}) => {
    const navigate = useNavigate();
  return (
    <article className='category-article'>
        <div className='category-product-title'>
            
           <Link to={`/products/${id}`} >{title}</Link> 
           
        </div>

        <figure>
            <div className='category-rpoduct-image-container'>
                <img src={`/assets/${image}`} alt={title} />
            </div>
        </figure>

        <aside className='category-product-info-header'>
            <div className='category-rpoduct-info-dimensions'>
                <h3>Méretek</h3>
                <label> {specs.dimensions} </label>
            </div>

            {specs.capacity && 
            <div className='category-product-info-capacity'>
                <h3>Kapacitás</h3>
                <label> {specs.capacity} </label>
            </div>
            }

            <div className='category-product-info-features'>
                <h3>Tulajdonságok</h3>
                <ul>
                    {features?.map((f, i) => {return <li key={`feature${i}`} > {f} </li>})}
                </ul>
            </div>
        </aside>

        <aside className='category-rpoduct-finance'>
            <div className='category-product-info-finance-price'>
                 {price} Ft
            </div>

            <div className='category-product-info-stock'>
                <h3>Raktáron: {stock} db</h3>
            </div>

            <div className='category-product-action'>
                <button onClick={() => navigate(`/products/${id}`)} >Részletes leírás</button>
                <button>Kosárba rakom</button>
            </div>

        </aside>
    </article>
    
  )
}

export default CategoryProduct