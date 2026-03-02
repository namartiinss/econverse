import styles from './index.module.scss'
import { Button } from "../../atoms/Button"

function InfoCard() {
  return (
    <div className={styles.contentCardPartner}>
      <div className={styles.textPartner}>
        <h2 className={styles.titlePartners}>Parceiros</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur</h3>
        <div>
          <Button children="CONFIRA" />
        </div>
      </div>
    </div>
  )
}

export default InfoCard