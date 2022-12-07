import Head from "next/head";
import FeaturedProducts from "../components/featured-products";
import { getProductPageKontent } from "../lib/kontent/products";

export default function Products({productPage}:any){
    return <>
    <Head>
      <title>Products | NK Shops</title>
    </Head>
    <FeaturedProducts products={productPage.products} heading={productPage.heading}/>
    </>;
}



export async function getStaticProps() {
    const productPage = await getProductPageKontent();
    return {
      props: {
        productPage,
      },
    };
  }
  