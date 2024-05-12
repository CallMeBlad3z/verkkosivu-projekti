import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
      
      <div className="pg-title">
        <li className="nav-btn">
          <Link to="/">WebCraftSquad Store</Link>
        </li>
      </div>

      <div className="navbar-list">
        <li className="nav-btn">
          <Link to="/admin">Admin</Link>
        </li>
        <li className="nav-btn">
          <Link to="/user">User</Link>
        </li>
        <li className="nav-btn">
          <Link to="/cart">Cart</Link>
        </li>
      </div>

      <div className="li-signin">
        <li className="nav-btn">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-btn">
          <Link to="/register">Register</Link>
        </li>
      </div>

    </nav>
  )
}

export default Header