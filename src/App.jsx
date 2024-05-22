import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import SingleProductView from "./pages/SingleProductView";
import Footer from "./components/Footer";
import CategoriesView from "./pages/CategoriesView";
import { useEffect, useState } from "react";
function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/products`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setProducts(data.products);
			});
	}, []);

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories/:id" element={<CategoriesView />} />
				<Route
					path="/product/:id"
					element={<SingleProductView products={products} />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/user" element={<UserDashboard />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
