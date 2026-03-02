import styles from './index.module.scss'
import { Button } from "../../atoms/Button"

type InfoCardProps = {
    title: string;
    description: string;
    labelButton: string;
}
function InfoCard({ title, description, labelButton }: InfoCardProps) {
  return (
    <div className={styles.contentCardPartner}>
      <div className={styles.textPartner}>
        <p className={styles.titlePartners}>{title}</p>
        <p className={styles.descriptionPartners}>{description}</p>
        <div>
          <Button children={labelButton} />
        </div>
      </div>
    </div>
  )
}

export default InfoCard