import styles from './index.module.scss'

interface BrandItemProps {
  img?: string;
  alt?: string;
}

function BrandItem({img, alt}: BrandItemProps) {
  return (
    <div className={styles.circleBrand}>
        <img className={styles.sizeBrand} src={img} alt={alt || "Brand"} />
    </div>
  )
}

export default BrandItem