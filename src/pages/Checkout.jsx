import { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext"; // replace with the actual path to your CartContext file

export default function Checkout() {
  const { cart, increaseQuantity, decreaseQuantity, emptyCart } =
    useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  console.log(cart); // Log the cart to the console for debugging

  return (
    <section>
        <h1>Shopping Cart</h1>
        <div className="order-cart">
            {cart.map((product, index) => (
            <ul key={index}>
                <li className="balls">
                  <h2>{product.title}</h2>
                  <p>{product.price}€</p>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => increaseQuantity(product.productID)}>
                      +
                  </button>
                  <button onClick={() => decreaseQuantity(product.productID)}>
                      -
                  </button>
                  <img src={product.image} alt={product.name} />
                </li>
            </ul>
        ))}
        </div>
        <div className="order-receiver">
            <div className="order-receiver-info">
                <h2>Receiver information</h2>
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Address"></input>
                <input type="text" placeholder="Postal code"></input>
                <input type="text" placeholder="City"></input>
            </div>
        </div>
        <div className="order-summary">
            <h2>Order summary</h2>
            <input type="text" placeholder="Discount code"></input>
            <p>Subtotal: {cart.reduce((total, product) => total + product.price * product.quantity, 0)}€</p>
            <button>Checkout</button>
        </div>
    </section>
  );
}