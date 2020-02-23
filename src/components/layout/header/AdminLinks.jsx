import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create-product'>Create Product</NavLink></li>
            <li><NavLink to='/orders'>All Orders</NavLink></li>
        </ul>
    )
}

export default AdminLinks;