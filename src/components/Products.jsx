import React from 'react';
import './Products.css';

const productList = [
  { name: 'GRAPES GONE WILD', subtitle: '15% ABV', img: '/product1.png', category: 'Cocktails', bg: '#834c9c' },
  { name: 'BERRY CHERRY LIMEADE', subtitle: '15% ABV', img: '/product2.png', category: 'Cocktails', bg: '#00a3e0' },
  { name: 'LIME ‘RITA', subtitle: '15% ABV', img: '/product3.png', category: 'Cocktails', bg: '#439d37', reviews: true },
];

const Products = () => {
  return (
    <section className="products">
      <div className="products-header">
        <h2 className="products-title">OUR PRODUCTS</h2>
        <div className="product-filters">
          <span className="filter-pill active">ALL</span>
          <span className="filter-pill">BIGGIES</span>
          <span className="filter-pill">CHILLERS</span>
          <span className="filter-pill">COCKTAILS</span>
          <span className="filter-pill">MIXED DRINKS</span>
        </div>
        <p className="product-count">Showing 3 of 46</p>
      </div>
      
      <div className="product-showcase">
        {productList.map((product, index) => (
          <div className="showcase-card" style={{ backgroundColor: product.bg }} key={index}>
            <div className="showcase-img-wrapper">
              <img src={product.img} alt={product.name} className="showcase-img" />
            </div>
            {product.reviews && <div className="showcase-stars">⭐⭐⭐⭐⭐</div>}
            <h3 className="showcase-name">{product.name}</h3>
            <p className="showcase-subtitle">{product.subtitle}</p>
          </div>
        ))}
        {/* Next button overlay on right */}
        <button className="carousel-next">&gt;</button>
      </div>
    </section>
  );
}

export default Products;
