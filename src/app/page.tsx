import { Products } from "@/components/products/Products";
import { getProducts } from "@/services/get-req";

export default async function Home() {
  const productos = await getProducts()
  //console.log(productos);
  return (
      <div>
        <Products productos={productos}/>
      </div>
  );
}
