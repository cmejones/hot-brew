import React from 'react';
import '../products/products.css';


class ProductList extends React.Component {

    render() {

        let link = '/products/' + this.props.productId;
        let editLink = '/product/edit/' + this.props.productId;
       // console.log('productlist', this.props.state);
        
        return (
        
                <div className="col s12 m6 l4">
    
                    <a href={link}><div className="card medium" key={this.props.product_id} id={this.props.product_id}>
                        <div className="card-image">
                            <img className="product-image pos-rel responsive-img" alt={this.props.productName} src={`${this.props.imageUrl}`} />
                        </div>

                        <div className="pos-rel center-align">
                            <div className="type-container pos-abs">
                                <p className="z-depth-2 type-detail">{this.props.type}</p>
                            </div>
                        </div>
                        
                        <div className="card-content">
                            <div className="card-title">
                                {this.props.productName}
                            </div>
                            
                            <div className="" key={this.props.id}>
                                <p><em>{this.props.subTitle}{this.props.flavorProfile}</em></p>
                                <p>{this.props.size} | ${this.props.price}</p>
                            </div>
                        </div>
        
                    </div>
                </a>
                <div><a href={editLink}>Edit</a></div>
            </div>
        );
    }
}
export default ProductList;