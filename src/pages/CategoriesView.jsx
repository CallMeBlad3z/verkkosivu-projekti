import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Rectangle55 from '../assets/product-images/Rectangle55.png';
import Rectangle66 from '../assets/product-images/Rectangle66.png';

export default function CategoriesView() {
	const [categories, setCategories] = useState([]);
  const { cart, addToCart } = useContext(CartContext);
	const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(cart); // Log the cart to the console for debugging
  }, [cart]);

	useEffect(() => {
		fetch(`http://localhost:3000/api/categories/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCategories([data.category]); // Wrap the category in an array so you can still use map in your render
			});
	}, []);


	return (
		<div className="containerCate">
		  {Array.isArray(categories) &&
			categories.map((category) => (
			  <div key={category.categoryID}>
				<div className="headerCate">
				  <div className="text-sectionCate">
            <h1 className="headertitleCate">{category.title}</h1>
            <p>{category.description}</p>
				  </div>
				  <div className="image-sectionCate">
					  <img src={Rectangle55} className="categoryImageCate" alt={category.title} />
				  </div>
				</div>
				<div className="productListCate">
				  {Array.isArray(category.product) &&
					category.product.map((product) => (
					  <div key={product.productID} className="productCardCate">
              <img src={Rectangle66} alt={product.title} onClick={() => navigate(`/product/${product.productID}`)} className="productImageCate" />
              <h2 onClick={() => navigate(`/product/${product.productID}`)} className="productNameCate">{product.title}</h2>
              <p onClick={() => navigate(`/product/${product.productID}`)} className="productDescriptionCate">{product.description}</p>
              <StarRating rating="3" />
              <p onClick={() => navigate(`/product/${product.productID}`)} className="priceCate">{product.price}</p>
              <button className="addToCartButtonCate" onClick={() => addToCart(product)}>Lisää koriin</button>
					  </div>
					))}
				</div>
			  </div>
			))}
		</div>
	);
}

const StarRating = ({ rating }) => {
  return (
    <p className="starCate">
      {Array.from({ length: 5 }, (v, i) => (
        <span key={i} className={i < rating ? "black-star" : ""}>★</span>
      ))}
    </p>
  );
};