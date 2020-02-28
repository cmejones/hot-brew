import React, { Component } from 'react';
import axios from 'axios';
import '../products/products.css';


class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        console.log('here product detail');
        const productId = this.props.match.params.id;
        axios.get('/api/products/' + productId)
        .then( ({data}) => {
            this.setState({data});

        })
    }

    render() {

        return (

            <div className="row">
            
                <div className="col s12 m6 l4">
                    <div className="card medium">

                        <div className="card-image">
                            <img className="product-image pos-rel responsive-img" alt={this.state.name} src={`${this.state.imageUrl}`} />
                        </div>

                        <div className="pos-rel center-align">
                            <div className="type-container pos-abs">
                                <p className="z-depth-1 type-detail">{this.state.type}</p>
                            </div>
                        </div>
                        
                        <div className="card-content">
                            <div className="card-title">
                                {this.state.name}
                            </div>
                            
                            <div className="" key={this.state.id}>
                                <p><em>flavor profile goes here</em></p>
                                <p>{this.state.size} | ${this.state.price}</p>
                            </div>
                        </div>
                        
                
                    </div>
                </div>
            
            </div>
            

        );
    }
}
export default ProductDetail;