import styles from './index.module.scss'

interface BrandItemProps {
  img?: string;
}

function BrandItem({img}: BrandItemProps) {
  return (
    <div className={styles.circleBrand}>
        <img className={styles.sizeBrand} src={img} alt="" />
    </div>
  )
}

export default BrandItem