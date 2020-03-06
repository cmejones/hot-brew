import React, { Component } from 'react';
import axios from 'axios';
import '../components/products/products.css';
import ProductList from '../components/products/ProductList';
import ProductDetail from '../components/products/ProductDetail';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        }
    }
        componentDidMount() {
            axios.get('/api/products/')      
            .then(response => {
                this.setState({
                    isLoading: false, 
                    products: response.data
                });
                console.log('products on productspage', this.state);
            })
        }

    render() {
        
        const { isLoading, products } = this.state;
        
        const allProducts = this.state.products.map((product) => {
            return <ProductList key={product.product_id} {...product} />
        });

        return (
            this.state.isLoading ? <div>I am loading</div> :
            <div className="dashboard">
                <div className="filter">
                    <p>add filter functionality here</p>
                </div>

                <div className="container">
                    <div className="row">
                        {allProducts}
                        {/* {products.map(product => ( */}
                            {/* <ProductList
                                key={product.id}
                                id={product.id}
                                name={product.name} 
                                type={product.type} 
                                category={product.category} 
                                subTitle={product.subTitle}
                                imageUrl={product.imageUrl} 
                                description={product.description} 
                                size={product.size}
                                price={product.price} /> */}
                        {/* ))} */}

                    </div>
                </div>
            </div>

        );
    }
}
export default Products;