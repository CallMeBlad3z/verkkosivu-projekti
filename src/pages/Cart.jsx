import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext"; // replace with the actual path to your CartContext file
import { Link } from "react-router-dom";

export default function Cart() {
	const { cart, increaseQuantity, decreaseQuantity, emptyCart } =
		useContext(CartContext);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	//console.log(cart); // Log the cart to the console for debugging

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
      <h2>Total Price: {cart.reduce((total, product) => total + product.price * product.quantity, 0)}€</h2>
			<button onClick={emptyCart}>Empty Cart</button>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
		</section>
	);
}
