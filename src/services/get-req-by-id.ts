import { Product } from "@/interfaces/product.interface";
import { API_ENDPOINT } from "../../config";

export const getProductsById = async(category_Id:string) => {
    //const $ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?category=${category_Id}`;
    const url = new URL(`${API_ENDPOINT}/sites/MLA/search`);
    if(!category_Id) throw new Error("Error al encontrar el enlace a la categoría");

    url.searchParams.append('category', category_Id);
    try {
        const res = await fetch(url)
        const data = await res.json() as Promise<{results: Product[]}>;
        return (await data).results;
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido obtener la categoría de productos")
    }
}