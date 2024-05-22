import { useParams } from "react-router-dom";

const SingleProductView = ({ products }) => {
	let { id } = useParams();
	const product = products.find((p) => p.productID === parseInt(id));
	if (!product) {
		return <p>loading.....</p>;
	} else {
		return (
			<div className="single-card">
				<img
					className="card-image"
					src="https://via.placeholder.com/150"
					alt="img"></img>
				{/* jos haluaa kehityksen aikana käyttää kuvaa niin: <img className="card-image" src={V1} alt="img"></img>*/}
				<h2 className="card-title">{product.title} </h2>
				<p className="card-text">{product.price} </p>
				<p className="card-text">{product.description} </p>
				<p className="card-text">{product.stock} </p>
				<p className="card-text">{product.manufacturer} </p>

				<div className="card_button">
					<button
						className="card-button"
						onClick={() => {
							setCart([...cart, p]);
							localStorage.setItem("cart", JSON.stringify([...cart, p]));
							toast.success("Added to cart");
						}}>
						Add to Cart
					</button>
				</div>
			</div>
		);
	}
};

export default SingleProductView;
