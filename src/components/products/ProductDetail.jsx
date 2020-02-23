import React from 'react';

const ProductDetail = (props) => {
    console.log('props', props);
    const id = props.match.params.id;
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Product Title - {id}</span>
                    <p>description</p>
                </div>
                <div className="card-action grey lighten-4 grey-text"></div>    
            </div>
        </div>
    )
}

export default ProductDetail;