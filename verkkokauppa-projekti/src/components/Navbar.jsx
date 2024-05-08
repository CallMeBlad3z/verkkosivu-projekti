import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>       
            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
          </li> 
          <li class="nav-item">
              <a class="nav-link" href="/admin">AdminDashboard</a>
          </li> 
          <li class="nav-item">
              <a class="nav-link" href="/user">UserDashboard</a>
          </li> 
          <li class="nav-item">
              <a class="nav-link" href="/cart">Cart</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar