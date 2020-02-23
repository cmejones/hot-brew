import React from 'react';
import ProductSummary from './ProductSummary';

const ProductList = () => {
    return (
        <div className="product-list section">
            {/* need to create a function to iterate through products */}
            <ProductSummary />
            <ProductSummary />
            <ProductSummary />

        </div>

    )
}


export default ProductList;