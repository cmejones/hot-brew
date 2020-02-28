import React from 'react';
import '../products/products.css';


class ProductList extends React.Component {

    render() {

        var link = '/products/' + this.props.id;
        console.log('link', link);

        return (

        
                <div className="col s12 m6 l4">
    
                    <a href={link}><div className="card medium">
                        <div className="card-image">
                            <img className="product-image pos-rel responsive-img" alt={this.props.name} src={`${this.props.imageUrl}`} />
                        </div>

                        <div className="pos-rel center-align">
                            <div className="type-container pos-abs">
                                <p className="z-depth-2 type-detail">{this.props.type}</p>
                            </div>
                        </div>
                        
                        <div className="card-content">
                            <div className="card-title">
                                {this.props.name}
                            </div>
                            
                            <div className="" key={this.props.id}>
                                <p><em>flavor profile goes here</em></p>
                                <p>{this.props.size} | ${this.props.price}</p>
                            </div>
                        </div>
        
                    </div>
                </a>
            </div>
        );
    }
}
export default ProductList;