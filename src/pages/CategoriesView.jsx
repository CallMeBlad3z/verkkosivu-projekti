import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CategoriesView() {
	const [categories, setCategories] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:3000/api/categories/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCategories([data.category]); // Wrap the category in an array so you can still use map in your render
			});
	}, []);
	return (
		<div className="category-container">
			{Array.isArray(categories) &&
				categories.map((category) => (
					<div key={category.categoryID} className="category-card">
						<div className="category-info">
							<h1 className="category-title">{category.title}</h1>
							<p className="category-description">{category.description}</p>
						</div>
						<div className="category-products">
							{Array.isArray(category.product) &&
								category.product.map((product) => (
									<div key={product.productID} className="product-card">
										<h2 className="product-title">{product.title}</h2>
										<p className="product-description">{product.description}</p>
										<p className="product-price">{product.price}</p>
										{/* Add more product details as needed */}
									</div>
								))}
						</div>
					</div>
				))}
		</div>
	);
}
