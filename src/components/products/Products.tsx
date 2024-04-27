import { Product } from '@/interfaces/product.interface';
import Image from 'next/image';
import React from 'react';

interface Props {
    productos: Product[];
}

export const Products = ({productos}:Props) => {
  return (
    <div className='grid items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 px-8'>
        {
            productos.map((product) => (
                <div key={product.id} className='flex flex-col w-full'>
                    <a href={`${product.permalink}`}  target='_blank' title='Ir al producto' rel='noopener noreferrer'>
                    <Image src={product.thumbnail} alt={product.thumbnail_id} height={120} width={120}/>
                    <h1 className='text-xs mt-2'>{product.title}</h1>
                    <strong className='text-sm'>{product.price.toLocaleString('es-AR', {
                        currency: product.currency_id,
                        style: 'currency'
                    })}</strong>
                    </a>
                </div>
            ))
        }
    </div>
  )
}
