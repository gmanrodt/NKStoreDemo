import { getKontentItem } from "./kontent";

export async function getProductPageKontent(){
    const res = await getKontentItem("?system.type=product");
    const pageData = res.data;

    let products:any[]=[];
    
    pageData.items.map((p: any)=>{

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
        heading: "This is the heading"
    }
}