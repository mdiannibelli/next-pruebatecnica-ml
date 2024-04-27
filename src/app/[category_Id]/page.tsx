import { Products } from '@/components/products/Products';
import { getProductsById } from '@/services/get-req-by-id';
import React from 'react'

interface Props {
    params: {
        category_Id: string;
    }
}

export default async function page({params}: Props) {
    const {category_Id} = params;
    const products = await getProductsById(category_Id);
    console.log(products)
  return (
    <div>
      <Products productos={products}/>
    </div>
  )
}
