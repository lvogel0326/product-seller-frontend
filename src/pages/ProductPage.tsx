import { ProductList } from "../components/ProductList";
import { ProductSubmit } from "../components/ProductSubmit";

export function ProductPage() {
  return (
    <>
      <h1>Products</h1>
      <ProductList></ProductList>
      <ProductSubmit></ProductSubmit>
    </>
  );
}
