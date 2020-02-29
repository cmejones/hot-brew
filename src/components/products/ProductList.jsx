import React from 'react';
import '../products/products.css';


// const newId = document.getElementById('key');

// function addAttribute(doc) {
//     let id = this.props.doc.id;
//     newId.setAttribute(id);
// }

class ProductList extends React.Component {

    render() {

        let link = '/products/' + this.props.productId;
        console.log(this.props.productId, 'this props');
        

        return (

        
                <div className="col s12 m6 l4">
    
                    <a href={link}><div className="card medium" key={this.props.product_id} id={this.props.product_id}>
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
                                <p><em>{this.props.subTitle}{this.props.flavorProfile}</em></p>
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