import {getKontentItem} from './kontent';

// export interface IHomePage {
//     item: IKontentItem;
//     modular_content: any;
// }

// export interface IKontentItem {
//     system:any;
//     elements: 
// }

// export interface IHomepageElements{
//     hero:IKontentElement;
//     feature_products:IKontentElement;
// }

// export interface IKontentElement{
//     type: string;
//     name: string;
//     value: string[];
// }

export async function getHomePageKontent(){
    const res = await getKontentItem("home");
    const pageData = res.data;

    let featuredProducts:any[]=[];

    
    pageData.item.elements.feature_products.value.map((p: any)=>{
        var productData = pageData.modular_content[p];

        let mappedProduct = {
            name: productData.elements.name.value,
            description: productData.elements.description.value,
            price: productData.elements.price.value,
            image: productData.elements.images.value[0].url,
            codename: productData.system.codename
        };
        featuredProducts.push(mappedProduct);
    });

    let homePageData = {
        heroBanner : 
        {
            headline: pageData.modular_content.home_page_hero_banner.elements.headline.value,
            background_image: pageData.modular_content.home_page_hero_banner.elements.background_image.value,
            cta_text: pageData.modular_content.home_page_hero_banner.elements.cta_text.value
        }, featuredProducts: {
            heading: pageData.item.elements.feature_products.name,
            products: featuredProducts
        }
    };

    return { ...homePageData };
}