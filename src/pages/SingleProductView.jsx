import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import { useParams } from 'react-router-dom';
import PlaceholderImage1 from '../assets/product-images/Single_product_placeholder1.png';
import PlaceholderImage2 from '../assets/product-images/Single_product_placeholder2.png';
import PlaceholderImage3 from '../assets/product-images/Single_product_placeholder3.png';
import PlaceholderImage4 from '../assets/product-images/Single_product_placeholder4.png';

export default function SingleProductView() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts([data.product]); // Wrap the product in an array so you can still use map in your render
      });
  }, []);
  
  return (
    <div className="product-container">
      {Array.isArray(products) && products.map((product) => (
        <div key={product} className="product-card">
          <div className="product-image-container">
            <img className="product-image" src={PlaceholderImage1} alt={product.title} />
            <img className="product-image" src={PlaceholderImage2} alt={product.title} />
            <img className="product-image" src={PlaceholderImage3} alt={product.title} />
            <img className="product-image" src={PlaceholderImage4} alt={product.title} />
          </div>
          <div className="product-info">
            <p className="product-manufacturer">{product.manufacturer}</p>
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price} €</p>
            <div className="single-product-tab-container ">
              <div className="single-product-tab-buttons">
                <button
                  className={`single-product-tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab1')}
                >
                  Tuotetiedot
                </button>
                <button
                  className={`single-product-tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab2')}
                >
                  Saatavuus
                </button>
              </div>
              <div className="single-product-tab-content">
                {activeTab === 'tab1' && <div><p>{product.description}</p></div>}
                {activeTab === 'tab2' && <div><p>TODO: Hardcoded - Tähän lisätään sitten saatavuus</p></div>}
              </div>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
          </div>
        </div>
      ))}
    </div>
  );
}