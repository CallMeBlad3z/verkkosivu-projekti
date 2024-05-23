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
import { login } from "./services/auth";
function App() {
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState(null);
	useEffect(() => {
		fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/products`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setProducts(data.products);
			});
	}, []);
	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("loggedUser");
		if (loggedUserJSON) {
			const { user } = JSON.parse(loggedUserJSON);
			setUser(user);
		}
	}, []);
	function handleLogin(data) {
		// maby dont hardcode the url
		login(data).then((data) => {
			if (data.user) {
				window.localStorage.setItem("loggedUser", JSON.stringify(data));
				setUser(data.user);
			}
		});
	}
	function handleLogout() {
		try {
			window.localStorage.removeItem("loggedUser");
			setUser(null);
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<div>
			<Header user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories/:id" element={<CategoriesView />} />
				<Route
					path="/product/:id"
					element={<SingleProductView products={products} />}
				/>
				<Route path="/login" element={<Login handleLogin={handleLogin} />} />
				<Route path="/user" element={<UserDashboard user={user} />} />
				<Route path="/register" element={<Register />} />
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
