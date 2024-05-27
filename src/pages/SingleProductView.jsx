import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
{/* tähän kunkin tuoteryhmän testikuva + lisää sen categoriesdata lootaan tuotteen kohdalle */}

export default function SingleProductView() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
      fetch(`http://localhost:3000/api/products`)
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              setProducts(data.products);
          });
  }, []);
  
  return (
    <div className="product-container">
      {Array.isArray(products) && products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-image-container">
            <img className="product-image" src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">{product.price}€</p>
            <p className="product-description">{product.description}</p>
            <p className="product-manufacturer">Manufacturer: {product.manufacturer}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}