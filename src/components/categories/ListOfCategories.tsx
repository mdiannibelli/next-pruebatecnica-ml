
import  type { Category } from '@/interfaces/category.interface'
import { CategoryItem } from './CategoryItem';

export default function ListOfCategories({categories, parentCategory = null} : {categories:Category[], parentCategory?: string | null}) {
    const categoriesToRender = categories.filter(({parentId}) => {
        return parentCategory === parentId;
        //  MLA1648 === parentId = MLA1648
    })

    /* 
    MLA1648: { <- parentCategory
        id: 'MLA1648',
        name: 'Computación',
        parentId: null
    },
    MLA2141: {
        id: 'MLA2141',
        name: 'Impresión',
        parentId: 'MLA1648' <- parentId
    },
    */


    return (
      <ul>
        {
          categoriesToRender.map((category) => ( // <- renderizamos las que tienen parentId === null
              <CategoryItem 
              key={category.id}
              categories={categories}
              category={category}
              /> /* parentCategory === parentID */
          ))
        }
      </ul>
    )
}
