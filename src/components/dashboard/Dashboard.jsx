import React, { Component } from 'react';
import ProductList from '../products/ProductList';
import { connect } from 'react-redux';
import Products from '../dashboard/Products';
import '../products/products.css';

class Dashboard extends Component {
    render() {
        return (

            <div className="dashboard">
                <div className="filter"></div>
                <div className="container">

                    <Products />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}
export default connect(mapStateToProps)(Dashboard)