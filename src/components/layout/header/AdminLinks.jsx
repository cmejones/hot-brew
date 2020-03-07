import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <span className="right">
            <Link className="admin-links" to='/create-product'>Create Product</Link>
            <Link className="admin-links" to='/orders'>All Orders</Link>
        </span>
    )
}

export default AdminLinks;