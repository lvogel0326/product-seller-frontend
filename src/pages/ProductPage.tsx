import { ProductList } from "../components/ProductList";
import { ProductSubmit } from "../components/ProductSubmit";

export function ProductPage() {
  return (
    <>
      <h1>this is our product page</h1>
      <ProductList></ProductList>
      <ProductSubmit></ProductSubmit>
    </>
  );
}
