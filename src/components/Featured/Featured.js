import React from 'react';
import FeatureNav from './FeatureNav';
import FeaturedProduct from './FeaturedProduct';

function Featured() {
    return (
        <div className="featured">
            <div className="container">
                <div className="featured__nav section">
                    <div className="featured__title section-title">
                       <h2>Sản phẩm nổi bật</h2>
                    </div>
                    <FeatureNav></FeatureNav>
                </div>
                <FeaturedProduct></FeaturedProduct>
            </div>
        </div>
    );
}

export default Featured;