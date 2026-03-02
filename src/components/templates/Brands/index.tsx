import styles from './index.module.scss'
import BrandItem from '../../atoms/BrandItem'

function Brands() {
  return (
    <div className={styles.containerBrand}>
        <h2>Navegue por marcas</h2>
        <div className={styles.contentBrand}>
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
        </div>
    </div>
  )
}

export default Brands