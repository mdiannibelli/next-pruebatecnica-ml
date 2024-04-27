'use client';
import { Category } from '@/interfaces/category.interface';
import React, { useState } from 'react'
import ListOfCategories from './ListOfCategories';
import Link from 'next/link';

export const CategoryItem = ({category, categories} : {category: Category, categories:Category[]}) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => setExpanded(value => !value)
    return (
        <li key={category.id} className='ml-4'>
            <button type='button' onClick={handleClick}>{expanded ? "-" : "+" }</button>

            <Link href={`/${category.id}`}>{category.name}</Link>

            {expanded ? (<ListOfCategories categories={categories} parentCategory={category.id}/>) : null}
        </li>
    )
}
