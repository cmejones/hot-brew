import React, { Component } from 'react';
import ProductList from '../products/ProductList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        //calling products from redux store
        const { products } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProductList products={products}/>
                    </div>
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