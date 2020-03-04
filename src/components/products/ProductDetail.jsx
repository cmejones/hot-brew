import React, { Component } from 'react';
import axios from 'axios';
import '../products/products.css';
import {withRouter} from 'react-router-dom'
import AddReview from '../reviews/AddReview';
import DeleteProduct from './DeleteProduct';
import DisplayReviews from '../reviews/DisplayReviews';
//import EditProduct from './EditProduct';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isLoading: true
        }
    }

    componentDidMount() {
        console.log('product detail here');
        const id = this.props.match.params.id;
        axios.get('/api/products/' + id)
        .then( ({data}) => {
            data['id'] = this.props.match.params.id;
            this.setState( {
                isLoading: false, 
                data:data
            });
        })
    }
    

    render() {

        return (
        this.state.isLoading ? <div>I am loading</div> :
            <div className="row">
                <div className="s12">
                    <h2>{this.state.data.productName}</h2>
                    <p><em>{this.state.data.flavorProfile}</em></p>
                </div>

                <div className="col s12 m6">
                    <div className="card-image">
                        <img className="product-image responsive-img" alt={this.state.data.productName} src={`${this.state.data.imageUrl}`} />
                    </div>

                </div>

                <div className="col s12 m6" key={this.state.data.id}>
                    <p className="description"><strong>ABOUT THIS COFFEE</strong><br />
                    {this.state.data.description}</p>
                    <p className="details">{this.state.data.size} | ${this.state.data.price}</p>
                    <p>Add quantity</p>
                    <a className="waves-effect waves-light btn-large">Buy now</a>
                </div>

                <div className="col s12 reviews">
                    <AddReview productInfo={this.state.data} />                 
                </div>
                <div className="col s12 reviews">
                    <p><strong>REVIEWS</strong></p>  
                    <DisplayReviews productInfo={this.state.data} />              
                </div>                
                
                <div className="col s3 delete">
                    <DeleteProduct productInfo={this.state.data} />
                </div>
            </div>
    
            
        );
    }
}
export default withRouter(ProductDetail);