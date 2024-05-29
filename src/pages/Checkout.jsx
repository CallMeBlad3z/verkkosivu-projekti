import { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import Rectangle66 from "../assets/product-images/Rectangle66.png";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/auth";
export default function Checkout({ user }) {
	const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
	const { register, handleSubmit } = useForm();
	const handleOrderCreation = (orderData) => {
		const datanattor = {
			...orderData,
			products: cart,
			userID: user.userID,
			phonenumber: "123",
		};
		console.log(datanattor);
		createOrder(datanattor).then((data) => {
			if (data.order) {
			}
		});
	};

	useEffect(() => {
		//console.log(cart); // Log the cart to the console for debugging
	}, [cart]);

	return (
		<section className="checkout-page">
			<div className="checkout-info-container">
				<h1 className="order-cart-list-title">Shopping Cart</h1>
				<ul className="order-cart-list">
					{cart.map((product, index) => (
						<li className="order-cart-item" key={index}>
							<div className="order-cart-item-container">
								{/*<img src={Rectangle66} alt={product.title} onClick={() => navigate(`/product/${product.productID}`)} alt={product.name} className="order-cart-item-info-img" />
                      En jaksanu kuvan kanssa alkaa leikkimään keskellä yötä, haluun joskus nukkuunkin*/}
								<div className="order-cart-item-info">
									<p className="cart-item-info-manufacturer">
										{product.manufacturer}
									</p>
									<h2 className="cart-item-info-title">{product.title}</h2>
									<div className="order-cart-item-price-container">
										<p className="order-cart-item-price">{product.price}€</p>
									</div>
								</div>
								<div className="order-cart-item-quantity">
									<button
										className="order-cart-item-quantity-button"
										onClick={() => increaseQuantity(product.productID)}>
										+
									</button>
									<p>{product.quantity}</p>
									<button
										className="order-cart-item-quantity-button"
										onClick={() => decreaseQuantity(product.productID)}>
										-
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className="order-receiver">
					<h2>Receiver information</h2>
					<form
						onSubmit={handleSubmit((data) => handleOrderCreation(data))}
						className="order-receiver-form">
						<div className="order-receiver-form-name">
							<input {...register("firstname")} placeholder="First name" />
							<input {...register("lastname")} placeholder="lastname" />
						</div>
						<div className="order-receiver-form-address">
							<input
								className="order-receiver-form-input"
								{...register("address")}
								placeholder="Address"></input>
							<input
								className="order-receiver-form-input-postal"
								type="number"
								{...register("postalCode", {
									valueAsNumber: true,
								})}
								placeholder="Postal code"></input>
							<input
								className="order-receiver-form-input-city"
								type="text"
								{...register("city")}
								placeholder="City"></input>
						</div>
						<div className="order-receiver-form-contact">
							<input
								className="order-receiver-form-input"
								{...register("email")}
								placeholder="Email"></input>
							<input
								className="order-receiver-form-input"
								type="text"
								{...register("phonenumber")}
								placeholder="Phone number"></input>
							<input type="submit"></input>
						</div>
					</form>
				</div>
				<div className="order-payment-method">
					<h2>Payment method</h2>
					<div className="order-payment-method-container">
						<div className="order-payment-method-card">
							<input
								type="radio"
								id="card"
								name="payment-method"
								value="card"></input>
							<label for="card">Card</label>
						</div>
						<div className="order-payment-method-invoice">
							<input
								type="radio"
								id="invoice"
								name="payment-method"
								value="invoice"></input>
							<label for="invoice">Invoice</label>
						</div>
						<div className="order-payment-method-bank">
							<input
								type="radio"
								id="bank"
								name="payment-method"
								value="cod"></input>
							<label for="bank">Bank</label>
						</div>
					</div>
				</div>
			</div>
			<div className="order-summary">
				<div className="order-summary-container">
					<h2>Order summary</h2>
					<input type="text" placeholder="Discount code"></input>
					<p>
						Subtotal:{" "}
						{cart.reduce(
							(total, product) => total + product.price * product.quantity,
							0
						)}
						€
					</p>
				</div>
			</div>
		</section>
	);
}
