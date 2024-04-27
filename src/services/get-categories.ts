import type{ Category } from "@/interfaces/category.interface";
import type{ Product } from "@/interfaces/product.interface";

export const getCategories = async (productos: Product[]) => {
    //https://api.mercadolibre.com/categories/
    const ids = Array.from(
        new Set(productos.map((p) => p.category_id))
    );

    const allProductCategories = await Promise.all(
        ids.map((id) => fetch(`https://api.mercadolibre.com/categories/${id}`)
            .then(res => res.json() as Promise<{path_from_root:{id:string, name:string}[]}>)
            .then(res => res.path_from_root))
    )

    const draft:Record<string, Category> = {};    

    allProductCategories.forEach((productCategories) => {
        productCategories.forEach((category, index) => {
            const {id} = category;
            const parent = productCategories[index -  1];
            const parentId = parent?.id ?? null;
            draft[id] = {...category, parentId};
        })
      });

      return Object.values(draft);
}