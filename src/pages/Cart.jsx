import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/CartContext'; // replace with the actual path to your CartContext file

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, emptyCart } = useContext(CartContext);
  //const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  

  console.log(cart); // Log the cart to the console for debugging

  return (
    <section>
      <h1>Shopping Cart</h1>
      <div>
        {cart.map((product, index) => (
          <ul key={index}>
            <li className="balls">
              <h2>{product.title}</h2>
              <p>{product.price}€</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <img src={product.image} alt={product.name} />
            </li>
          </ul>
        ))}
      </div>
      <button onClick={emptyCart}>Empty Cart</button>
    </section>
  );
}