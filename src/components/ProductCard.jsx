// import V1 from '../assets/V1.jpg';
import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import ProductPlaceHolderImage from '../assets/product-images/product_reel_image_placeholder.png';
import { Link } from 'react-router-dom';

export default function ProductCard({product}) {
  
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleAddToCart = () => {
    addToCart(product);
  };

    return (
        <div className="card">
          <img  className="card-image" src={ProductPlaceHolderImage} alt="img"></img>
          {/* jos haluaa kehityksen aikana käyttää kuvaa niin: <img className="card-image" src={V1} alt="img"></img>*/}
  
          <div className="card-information-buttons-container">
            <div className="card-information-text-container">
              <p className="card-manufacturer">{product.manufacturer} </p>
              <h2 className="card-title">{product.title}</h2>
              <p className="card-price">{product.price}€</p>
            </div>

            <div className="card_button">
              {/* <button
                className="btn btn-primary col card-button"
                onClick={() => navigate(`/product/${product.productID}`)} // tuotteen id URL:ssä
              >
                View Product
              </button> */}
                <button onClick={handleAddToCart}>Lisää ostoskoriin</button>
            </div>
          </div>
  
         {/* kun tietokanta kytketty yms, product voisi olla esim suurinpiirtein tällainen: 
         
         <img
            className="card-image"
            src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
            alt={p.name}
          /> 
 
        <h2 className="card-title">Title {p?.title}</h2>
        <p className="card-text">price {p?.price?.toLocaleString("en-EU", {
            style: "currency",
            currency: "EUR",  
        })}</p>
        <p className="card-text">description {p?.description?.substring(0, 60)}</p>
        <p className="card-text">stock {`${
            p?.quantity >= 1
              ? `${p?.quantity - p?.sold} in stock`
              : "Out of stock"
          }`}</p>
        <p className="card-text">manufacturer {p?.manufacturer}</p>

        <div className="card_button">
        <button
          className="btn btn-primary col card-button"
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>

        <button
          className="btn btn-outline-primary col card-button"
          onClick={() => {
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Added to cart");
          }}
        >
          Add to Cart
        </button>
        </div>*/}
		</div>
	);
}

