import React, { Component } from 'react';
import axios from 'axios';
import '../products/products.css';
import ProductList from '../products/ProductList';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        }
    }
        componentDidMount() {
            console.log('test');
            axios.get('/api/products/')      
            .then(response => {
                console.log('products', response.data);
                this.setState({
                    isLoading: false, 
                    products: response.data
                });
            })
        }

    render() {
        
        const { isLoading, products } = this.state;

        return (
            this.state.isLoading ? <div>I am loading</div> :
            <div className="dashboard">
                <div className="filter"></div>

                <div className="container">
                    <div className="row">
                        {products.map(product => (
                            <ProductList
                                name={product.name} 
                                type={product.type} 
                                category={product.category} 
                                imageUrl={product.imageUrl} 
                                description={product.description} 
                                size={product.size}
                                price={product.price} />
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}
export default Products;