import styles from './index.module.scss'
import InfoCard from '../../molecules/InfoCard'

function Informations() {
    return (
        <div className={styles.containerInformations}>
            <InfoCard />
            <InfoCard />
        </div>
    )
}

export default Informations