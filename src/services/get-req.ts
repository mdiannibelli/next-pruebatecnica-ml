import type { Product } from "@/interfaces/product.interface";
import { API_ENDPOINT, SELLER_ID } from "../../config";

//const $ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${SELLER_ID}`;

export const getProducts = async() => {
    const url = new URL(`${API_ENDPOINT}/sites/MLA/search`)
    if(!SELLER_ID) throw new Error("Error at SELLER_ID")
    url.searchParams.append("seller_id", SELLER_ID);

    try {
        const res = await fetch(url);
        const data = await res.json() as Promise<{results:Product[]}>; 
        return (await data).results;
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido realizar la petición");
    }
}

/* export const getProducts = () => {
    return fetch($ENDPOINT).then((res) => res.json() as Promise<{results:Product[]}>)
    .then((res) => {
        console.log(res.results);
        return res.results;
    })
} */