import styles from './index.module.scss'
import CategorieItem from '../../atoms/CategorieItem'
import Crown from '../../../assets/crownSimple.svg'

function CategoriesBar() {
    return (
        <div className={styles.contentCategoriesBar}>
            <CategorieItem name="TODAS AS CATEGORIAS" />
            <CategorieItem name="SUPERMERCADO" />
            <CategorieItem name="LIVROS" />
            <CategorieItem name="MODA" />
            <CategorieItem name="LANÇAMENTOS" />
            <CategorieItem name="OFERTAS DO DIA" />
            <CategorieItem iconCrown={<img src={Crown}/>} name="ASSINATURA" />
        </div>
    )
}

export default CategoriesBar