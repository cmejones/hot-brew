import React, { Component } from 'react';
import axios from 'axios';


class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        console.log('here');
        //const productId = this.props.match.params.id;
        axios.get('http://localhost:3001/api/products/')
        .then( (response) => {
            this.successShow(response);
            })
        .catch(error => {
            this.successShow(error);

        });
    }

    successShow(response) {
        this.setState({
            products: response.data
        });
    }

    render() {

        return (
            <ul>
            {this.state.products.map(product => (
                <li key={product.id}>
                    Product Name: {product.name}

                </li>
            ))}
            
            </ul>

        );
    }
}
export default Products;