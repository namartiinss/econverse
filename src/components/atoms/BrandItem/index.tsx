import styles from './index.module.scss'
import Logo from '../../../assets/logotipoEconverse.png'

function BrandItem() {
  return (
    <div className={styles.circleBrand}>
        <img className={styles.sizeBrand} src={Logo} alt="" />
    </div>
  )
}

export default BrandItem