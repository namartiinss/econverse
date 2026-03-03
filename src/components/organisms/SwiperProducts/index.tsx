import styles from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import type { SwiperRef } from 'swiper/react'
import ProductCard from '../../molecules/ProductCard'
import 'swiper/css'
import { useProducts } from '../../../hooks/useProducts'
import arrowRight from '../../../assets/arrowRight.svg'
import arrowLeft from '../../../assets/arrowLeft.svg'
const Carousel = () => {
  const { products } = useProducts()
  const swiperRef = useRef<SwiperRef>(null)

  return (
    <div className={styles.containerCard}>
      <button className={styles.prevButton} onClick={() => swiperRef.current?.swiper.slidePrev()}>
        <img src={arrowLeft} alt="Previous" />
      </button>
      <button className={styles.nextButton} onClick={() => swiperRef.current?.swiper.slideNext()}>
        <img src={arrowRight} alt="Next" />
      </button>

      <Swiper ref={swiperRef} spaceBetween={18} slidesPerView={4}>
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