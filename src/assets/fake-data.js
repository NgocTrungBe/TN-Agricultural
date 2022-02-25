const product_01_image = require('./images/cafe.jpg');
const product_02_image = require('./images/hattieu.jpg');
const product_03_image = require('./images/hatdieu.jpg');
const product_04_image = require('./images/botnghe.jpg');

const products = [{
        name: "Cafe ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'đkdkdkkdkdkdkdkdk',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "cafe",
        slug: "cafe-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    },
    {
        name: "Hạt Điều ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'hat dieu nguyen chat, muoi, ot',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "hat-dieu",
        slug: "hat-dieu-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    },
    {
        name: "Bột Nghệ ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'đkdkdkkdkdkdkdkdk',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "bot-nghe",
        slug: "bot-nghe-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    }, ,
    {
        name: "Hạt Tiêu ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'đkdkdkkdkdkdkdkdk',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "hat-tieu",
        slug: "hat-tieu-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    },
    {
        name: "Cafe ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'đkdkdkkdkdkdkdkdk',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "cafe",
        slug: "cafe-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    },
    {
        name: "Hạt Điều ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'hat dieu nguyen chat, muoi, ot',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "hat-dieu",
        slug: "hat-dieu-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    },
    {
        name: "Bột Nghệ ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'đkdkdkkdkdkdkdkdk',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "bot-nghe",
        slug: "bot-nghe-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    }, ,
    {
        name: "Hạt Tiêu ĐăkLăk",
        price: '189000',
        brand: 'Aik Cheong',
        MFG: '01/12/2020',
        EXP: '02/12/2021',
        ingredients: 'đkdkdkkdkdkdkdkdk',
        images: [product_01_image, product_02_image, product_03_image, product_04_image],
        categorySlug: "hat-tieu",
        slug: "hat-tieu-daklak",
        size: ["120gr", "400gr"],
        description: "	Creamer 48% (siro glucose, dầu cọ hydro hóa, sodium caseinate, chất nhũ hóa, chất ổn định, chất chống đông vón, beta-carotene e160), đường 43%, bột cà phê hòa tan 9%."
    },

    // 18 products
]

const getAllProducts = () => products;
const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const productData = {
    getAllProducts,
    getProductBySlug

}


export default productData;