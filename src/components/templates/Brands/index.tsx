import styles from './index.module.scss'
import BrandItem from '../../atoms/BrandItem'

function Brands() {
  return (
    <section className={styles.containerBrand}>
        <h2>Navegue por marcas</h2>
        <div className={styles.contentBrand}>
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
        </div>
    </section>
  )
}

export default Brands