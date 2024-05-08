import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/register">Register</Link>
                    </div>
                    <div>
                        <Link to="/admin">Admin</Link>
                    </div>
                    <div>
                        <Link to="/user">User</Link>
                    </div>
                    <div>
                        <Link to="/cart">Cart</Link>
                    </div>
                    <br />
                    <br />
                </div>
    )

}

export default Navbar;  