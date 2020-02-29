import React, { Component } from 'react';
import axios from 'axios';
import '../products/products.css';
import {withRouter} from 'react-router-dom'


class ProductDetail extends Component {
        constructor(props) {
        super(props);
        this.state= {
            isLoading: true
        }
    }

    componentDidMount() {
        console.log('here');
        const id = this.props.match.params.id;
        console.log(this.props);
        console.log('id', this.props.match.params.id);
        axios.get('/api/products/' + id)
        .then( ({data}) => {
            console.log({data});
            this.setState( {
                isLoading: false, 
                data
            });
            console.log(this.state, 'state');

        })
    }
    // clickHandler() {
    //     this.props.history.push('/products/' + this.props.productId);
    //     console.log('props', this.props); //not rendering
    // }

    render() {

           // console.log('product detail', this.state);

        return (
    this.state.isLoading ? <div>I am loading</div> :
            <div className="row">
                <div className="col s12 m6 l4">
                    {/* <div className="card medium" onClick={this.clickHandler.bind(this)}> */}
                    <div className="card medium">
                        <div className="card-image">
                            <img className="product-image pos-rel responsive-img" alt={this.state.data.name} src={`${this.state.data.imageUrl}`} />
                        </div>

                        <div className="pos-rel center-align">
                            <div className="type-container pos-abs">
                                <p className="z-depth-1 type-detail">{this.state.data.type}</p>
                            </div>
                        </div>
                        
                        <div className="card-content">
                            <div className="card-title">
                                {this.state.data.name}
                            </div>
                            
                            <div className="" key={this.state.data.id}>
                                <p><em>{this.state.data.subTitle}{this.state.data.flavorProfile}</em></p>
                                <p>{this.state.data.size} | ${this.state.data.price}</p>
                            </div>
                        </div>
                        
                
                    </div>
                </div>
            
            </div>
            

        );
    }
}
export default withRouter(ProductDetail);