// import V1 from '../assets/V1.jpg';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

function ProductCard({ product }) {
	// p = product

	console.log(product);
	const navigate = useNavigate();
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
		toast.success("Product added to cart");
	};

	return (
		<div className="card">
			<img
				className="card-image"
				src="https://via.placeholder.com/150"
				alt="img"></img>
			{/* jos haluaa kehityksen aikana käyttää kuvaa niin: <img className="card-image" src={V1} alt="img"></img>*/}

			<p className="card-text">{product.manufacturer} </p>
			<h2 className="card-title">{product.title} </h2>
			<p className="card-text">{product.price} </p>

			<div className="card_button">
				<button
					className="btn btn-primary col card-button"
					onClick={() => navigate(`/product/${product.productID}`)} // tuotteen id URL:ssä
				>
					View Product
				</button>

				<button
					className="btn btn-outline-primary col card-button"
					onClick={() => {
						addToCart(product);
					}}>
					Lisää ostoskoriin
				</button>
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

export default ProductCard;
