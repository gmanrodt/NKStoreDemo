import { deliveryClient, getKontentItem } from "./kontent";
import { Products } from "./models";

export async function getProductPageKontent2(){
    const response = await deliveryClient.item<Products>("products").toPromise();
    return response.data.item;
}

export async function getProductPageKontent(){
    const res = await getKontentItem("products");
    const pageData = res.data;

    let products:any[]=[];
    
    pageData.item.elements.products.value.map((p: any)=>{
        var p = pageData.modular_content[p];

        let mappedProduct = {
            name: p.elements.name.value,
            description: p.elements.description.value,
            price: p.elements.price.value,
            image: p.elements.images.value[0].url,
            codename: p.system.codename,
            productUrl: '/products/' + p.system.codename
        };
        products.push(mappedProduct);
    });

    return {
        products: products,
        heading: pageData.item.elements.heading.value
    }
}