import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>My Orders</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>My Profile</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;