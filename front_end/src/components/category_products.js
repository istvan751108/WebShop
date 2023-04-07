import React from 'react'

const CategoryProduct = ({title, image, specs, features, price, stock}) => {
  return (
    <article className='category-article'>
        <div className='category-product-title'>
            {title}
        </div>

        <figure>
            <div className='category-rpoduct-image-container'>
                <img src={`./assets/${image}`} alt={title} />
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
                    {features?.map((f) => {return <li> {f} </li>})}
                </ul>
            </div>
        </aside>

        <aside className='category-rpoduct-finance'>
            <div className='category-rpoduct-finance-price'>
                Ft: {price}
            </div>

            <div className='category-product-info-stock'>
                <h3>Raktáron: {stock} db</h3>
            </div>

            <div className='category-product-action'>
                <button>Kosárba rakom</button>
                <button>Megnézem</button>
            </div>

        </aside>
    </article>
    
  )
}

export default CategoryProduct