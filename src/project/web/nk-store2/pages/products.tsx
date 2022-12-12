import { IContentItem } from "@kontent-ai/delivery-sdk";
import Head from "next/head";
import ProductCard from "../components/product-card";
import { Product, Products } from "../lib/kontent/models";
import { getProductPageKontent2 } from "../lib/kontent/products";

export default function ProductsPage( {...productPage} : IContentItem<Products>) {
  console.log(productPage);

  let productsArray: Product[] = [];
  let k: keyof typeof productPage.productPage.linkedItems;
  for (k in productPage.productPage.linkedItems) {
    const v = productPage.productPage.linkedItems[k];
    productsArray.push(v);
  }

  return (
    <>
      <Head>
        <title>Products | NK Shops</title>
      </Head>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {productsArray.map((p: Product) => (
            <ProductCard {...p} key={p.system.codename} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const productPage = await getProductPageKontent2();
  return {
    props: {
      productPage,
    },
  };
}
