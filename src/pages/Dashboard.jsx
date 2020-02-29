import React, { Component } from 'react';
//import ProductList from '../products/ProductList';
import { connect } from 'react-redux';
import Products from './Products';
import '../components/products/products.css';

class Dashboard extends Component {
    render() {
        return (

            <div className="dashboard">
                <div className="container">
                    <h2>Add Featured products or categories here</h2>
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