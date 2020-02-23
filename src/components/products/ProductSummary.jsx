import React from 'react';

const ProductSummary = ({ product }) => {
    return (
        <div className="card z-depth-0 product-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {product.title}
                </span>
                <p>{product.image}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductSummary;