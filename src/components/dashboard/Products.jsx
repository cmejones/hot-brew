import React, { Component } from 'react';
import axios from 'axios';
import '../products/products.css';
import ProductDetail from '../products/ProductDetail';


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
            console.log(response.data);
    }

    render() {

        return (

            <div className="row">
            {this.state.products.map(product => (
                <div className="col s12 m6 l4">
                    <a href="/"><div className="card medium">

                        <div className="card-image">
                            <img className="product-image pos-rel responsive-img" src={`${product.imageUrl}`} />
                        </div>

                        <div className="pos-rel center-align">
                            <div className="type-container pos-abs">
                                <p className="z-depth-1 type-detail">{product.type}</p>
                            </div>
                        </div>
                        
                        <div className="card-content">
                            <div className="card-title">
                                {product.name}
                            </div>
                            
                            <div className="" key={product.id}>
                                <p><em>flavor profile goes here</em></p>
                                <p>{product.size} | ${product.price}</p>
                            </div>
                        </div>
                        
                
                    </div></a>
                </div>
            ))}
            </div>
            

        );
    }
}
export default Products;