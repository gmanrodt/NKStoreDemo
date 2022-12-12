const ecwid = require("@ecwid/nextjs-ecwid-plugin");
const { ProductBrowser } = ecwid;

export default function Store() {
  return (
    <>
      <ProductBrowser storeId="83145022" />
    </>
  );
}
