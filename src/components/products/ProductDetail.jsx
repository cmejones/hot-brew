import React, { Component } from 'react';
import axios from 'axios';
import '../products/products.css';
import {withRouter} from 'react-router-dom'
import AddReview from '../reviews/AddReview';
import DisplayReviews from '../reviews/DisplayReviews';
import CustomButton from '../custom-button/custom-button.component';


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
        axios.get('https://api-hot-brew.herokuapp.com/api/products/' + id)
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

                <div className="col s12 m6 left-align" key={this.state.data.id}>
                    <p className="description"><span className="description-title">ABOUT THIS COFFEE</span><br />
                    {this.state.data.description}</p>
                    <p className="details">{this.state.data.size} | ${this.state.data.price}</p>
                    <p>Add quantity</p>
                    <CustomButton type='submit'>Buy Now</CustomButton>
                </div>
                <div className="col s12 m6 reviews left-align">
                    <p className="description-title">REVIEWS</p>  
                    <DisplayReviews productInfo={this.state.data} />  
                    <AddReview productInfo={this.state.data} />              
                </div> 
                
            </div>
    
            
        );
    }
}
export default withRouter(ProductDetail);