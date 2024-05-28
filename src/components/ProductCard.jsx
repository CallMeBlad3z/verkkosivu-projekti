// import V1 from '../assets/V1.jpg';
import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import ProductPlaceHolderImage from '../assets/product-images/product_reel_image_placeholder.png';
import { useState } from 'react';

export default function ProductCard({product}) {
  
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  // See the explanation in the return statement top div for this
  const [isPointMoved, setIsPointMoved] = useState(false);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleAddToCart = () => {
    if (!isPointMoved) {
      addToCart(product);
    }
  };

  const handleNavigateToProduct = () => 
    {
      if (!isPointMoved) 
        {
          navigate(`/product/${product.productID}`);
        }
    };

    return (
        // Since the slider does not know the contents of it, there is no way to prevent the links getting clicked if you try to drag and move
        // the slider while on top of the card. Since this cannot be resolved on the slider level, needed to add the following patch job to check if the pointer
        // is moving (is the user dragging) and based on this only fire the navigation and adding to cart if the pointer is not moving (ie. click).
        <div className="card"  onPointerDown={() => {
          setIsPointMoved(false)
        }}
        onPointerMove={() => {
          setIsPointMoved(true)
        }}
        onPointerUp={() => {
          // if point moved, don't do any thing
          if (isPointMoved) {
            setIsPointMoved(true)
            return
          }
        }}
      >
          <img  className="card-image" src={ProductPlaceHolderImage} onClick={handleNavigateToProduct} alt="img" ></img>
          {/* jos haluaa kehityksen aikana käyttää kuvaa niin: <img className="card-image" src={V1} alt="img"></img>*/}
  
          <div className="card-information-buttons-container">
            <div className="card-information-text-container" onClick={handleNavigateToProduct}>
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

