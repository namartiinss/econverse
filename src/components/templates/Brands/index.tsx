import styles from './index.module.scss'
import BrandItem from '../../atoms/BrandItem'
import LogoEconVerse from '../../../assets/logotipoEconverse.png'
function Brands() {
  const brands = [
    {
      img: LogoEconVerse, alt: 'Econverse', id: 1
    },
    {
      img: LogoEconVerse, alt: 'Econverse', id: 2
    },
    {
      img: LogoEconVerse, alt: 'Econverse', id: 3
    },
    {
      img: LogoEconVerse, alt: 'Econverse', id: 4
    },
    {
      img: LogoEconVerse, alt: 'Econverse', id: 5
    },
  ]
  return (
    <section className={styles.containerBrand}>
      <h2>Navegue por marcas</h2>
      <div className={styles.contentBrand}>
        {brands.map(brand => (
          <BrandItem key={brand.id} img={brand.img} alt={brand.alt} />
        ))}
      </div>
    </section>
  )
}

export default Brands