import styles from './index.module.scss'
import ProductCard from '../../molecules/ProductCard'

function SwiperProducts() {
  return (
    <div className={styles.containerCard}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default SwiperProducts