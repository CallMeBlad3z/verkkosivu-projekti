import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import { useParams } from "react-router-dom";

export default function SingleProductView({ products }) {
	/* 	const [products, setProducts] = useState([]); */
	const { addToCart } = useContext(CartContext);
	const { id } = useParams();

	const product = products.find((p) => parseInt(id) === p.productID);
	/* 	useEffect(() => {
		fetch(`http://localhost:3000/api/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts([data.product]); // Wrap the product in an array so you can still use map in your render
			});
	}, []); */

	if (!product) {
		return <h1>Product not found</h1>;
	}
	return (
		<div className="product-container">
			<div key={product} className="product-card">
				<div className="product-image-container">
					<img
						className="product-image"
						src={product.image}
						alt={product.title}
					/>
				</div>
				<div className="product-info">
					<h1 className="product-title">{product.title}</h1>
					<p className="product-price">{product.price}€</p>
					<p className="product-description">{product.description}</p>
					<p className="product-manufacturer">
						Manufacturer: {product.manufacturer}
					</p>
					<button
						className="add-to-cart-button"
						onClick={() => addToCart(product)}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
