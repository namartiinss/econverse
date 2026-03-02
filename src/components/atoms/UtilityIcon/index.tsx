import styles from './index.module.scss'

interface UtilityIconProps {
    icon: string
    alt?: string
}

function UtilityIcon({icon, alt}: UtilityIconProps) {
  return (
    <div className={styles.buttonIcon}>
        <img src={icon} alt={alt} />
    </div>
  )
}

export default UtilityIcon