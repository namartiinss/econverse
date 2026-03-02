import styles from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../../molecules/ProductCard'
import 'swiper/css'

import { useProducts } from '../../../hooks/useProducts'

const Carousel = () => {
  const { products } = useProducts()

  return (
    <div className={styles.containerCard}>
      <Swiper spaceBetween={18} slidesPerView={4}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              productName={product.productName}
              descriptionShort={product.descriptionShort}
              photo={product.photo}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel