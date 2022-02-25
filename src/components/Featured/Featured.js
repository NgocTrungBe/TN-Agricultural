import React from 'react';
import FeatureNav from './FeatureNav';
import ProductCard from '../Product/ProductCard';

function Featured() {
    return (
        <div className="featured">
            <div className="container">
                <div className="featured__nav section">
                    <div className="featured__title section__title">
                       <h2>Sản phẩm nổi bật</h2>
                    </div>
                    <FeatureNav></FeatureNav>
                </div>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
}

export default Featured;