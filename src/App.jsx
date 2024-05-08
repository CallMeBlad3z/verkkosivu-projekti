import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';	
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

function App() {
	

	return (
		<BrowserRouter>
		<Navbar />
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/admin" element={<AdminDashboard />} />
			<Route path="/user" element={<UserDashboard />} />
			<Route path="/cart" element={<Cart />} />
		  </Routes>
		</BrowserRouter>
	);
}

export default App;
