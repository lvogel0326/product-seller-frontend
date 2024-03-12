import { SellerList } from "../components/SellerList";
import { SellerSubmit } from "../components/SellerSubmit";

export function SellerPage() {
  return (
    <>
      <h1>Verified Sellers</h1>
      <SellerList></SellerList>
      <SellerSubmit></SellerSubmit>
    </>
  );
}
