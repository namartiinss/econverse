import styles from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import type { SwiperRef } from 'swiper/react'
import ProductCard from '../../molecules/ProductCard'
import 'swiper/css'
import { useProducts } from '../../../hooks/useProducts'
import arrowRight from '../../../assets/arrowRight.svg'
import arrowLeft from '../../../assets/arrowLeft.svg'

const Carousel = () => {
  const { products } = useProducts()
  const swiperRef = useRef<SwiperRef>(null)
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 480) setSlidesPerView(1)
      else if (window.innerWidth <= 768) setSlidesPerView(2)
      else if (window.innerWidth <= 1024) setSlidesPerView(3)
      else setSlidesPerView(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className={styles.containerCard}>
      <button className={styles.prevButton} onClick={() => swiperRef.current?.swiper.slidePrev()}>
        <img src={arrowLeft} alt="Previous" />
      </button>
      <button className={styles.nextButton} onClick={() => swiperRef.current?.swiper.slideNext()}>
        <img src={arrowRight} alt="Next" />
      </button>
      <Swiper ref={swiperRef} spaceBetween={18} slidesPerView={slidesPerView}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Carousel