import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';

const Header = ({ user, handleLogout }) => {
	return (
		<nav className="navbar">
			<div className="pg-title didact-gothic-regular">
				<li className="nav-btn">
					<Link to="/">Pohjolan Bazaari</Link>
				</li>
			</div>
			<div className="navbar-right-content-container didact-gothic-regular">
				<div className="navbar-list">
					{user !== null && user.isAdmin && (
						<li className="nav-btn">
							<Link to="/admin">Admin</Link>
						</li>
					)}
					<li className="nav-btn">
						<Link to="/cart"><FiShoppingCart/></Link>
					</li>
				</div>
				{user === null ? (
					<div className="li-signin">
						<li className="nav-btn">
							<Link to="/login">Login</Link>
						</li>
						<li className="nav-btn">
							<Link to="/register">Register</Link>
						</li>
					</div>
				) : (
					<div>
						<li className="nav-btn">
							<Link to="/user">{user.firstname}</Link>
						</li>
						<li className="nav-btn">
							<Link onClick={handleLogout} to="/">
								Log out
							</Link>
						</li>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Header;
