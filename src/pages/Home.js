import React from 'react';
import Hero from '../components/Hero/Hero';
import MainCategories from '../components/Categories/MainCategories';
import Section,{SectionTitle , SectionBody} from '../components/Section/Section';
import ProductCard from '../components/Product/ProductCard';
import productData from '../assets/fake-data';
import Grid from '../components/Grid/Grid';
function Home(props) {
    return (
        <div>
            <MainCategories></MainCategories>
             <Section>
                 <SectionTitle>Sản Phẩm Nổi Bật</SectionTitle>
                 <SectionBody>
                     <Grid 
                        col={4}
                        mdCol={3}
                        smCol={1}
                        gap={20}
                     >
                       {
                         productData.getAllProducts().map((product,index)=>(
                            
                                 <ProductCard 
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    images={product.images}
                                    slug={product.slug}
                                 ></ProductCard>
                             
                         ))
                       }
                     </Grid>
                 </SectionBody>
             </Section>
        </div>
    );
}

export default Home;