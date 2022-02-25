import React from 'react';
import Section, { SectionBody, SectionTitle } from '../components/Section/Section';
import Grid from '../components/Grid/Grid';
import ProductCard from '../components/Product/ProductCard';
import productData from '../assets/fake-data';
import ProductView from '../components/Product/ProductView';
import { useParams } from 'react-router-dom';

function Product(props) {
    const params = useParams();
    const product = productData.getProductBySlug(params.slug);
    const relatedProducts = productData.getAllProducts();
    return (
        <>
            <Section>
                <SectionBody>
                    <ProductView product={product}></ProductView>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Sản Phẩm Liên Quan</SectionTitle>
                <SectionBody>
                    <Grid
                       col={4}
                       mdCol={3}
                       smCol={1}
                       gap={20}
                    > 
                      {
                          relatedProducts.map((product,index)=>(
                             <ProductCard 
                            key={index}
                            name={product.name}
                            price={product.price}
                            images={product.images}
                            slug={product.slug}
                             />
                          ))
                      }
                    </Grid>
                </SectionBody>
            </Section>
        </>
    );
}

export default Product;