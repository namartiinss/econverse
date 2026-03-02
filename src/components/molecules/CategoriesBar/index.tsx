import styles from './index.module.scss'
import CategorieItem from '../../atoms/CategorieItem'
import { act } from 'react'

function CategoriesBar() {
    const categories = [
        {
            id: 1,
            name: "TODAS CATEGORIAS",
            iconCrwon: false
        },
        {
            id: 2,
            name: "SUPERMERCADO",
            iconCrwon: false
        },
        {
            id: 3,
            name: "LIVROS",
            iconCrwon: false
        },
        {
            id: 4,
            name: "MODA",
            iconCrwon: false
        },
        {
            id: 5,
            name: "LANÇAMENTOS",
            iconCrwon: false
        },
        {
            id: 6,
            name: "OFERTAS DO DIA",
            iconCrwon: false,
            active: true
        },
        {
            id: 7,
            name: "ASSINATURA",
            iconCrwon: true
        },
    ]

    return (
        <div className={styles.containerCategoriesBar}>
            <div className={styles.contentCategoriesBar}>
                {categories.map((categorie) => (
                    <CategorieItem
                        key={categorie.id}
                        name={categorie.name}
                        iconCrown={categorie.iconCrwon}
                        active={categorie.active}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoriesBar