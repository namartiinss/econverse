import styles from './index.module.scss'
import InfoCard from '../../molecules/InfoCard'

function Informations() {
    const infoCardsData = [
        {
            title: "Parceiros",
            description: "Lorem ipsum dolor sit amet, consectetur",
            labelButton: "CONFIRA",
            id: 1
        },
        {
            title: "Parceiros",
            description: "Lorem ipsum dolor sit amet, consectetur",
            labelButton: "CONFIRA",
            id: 2,
        }
    ]
    return (
        <section className={styles.containerInformations}>
            {infoCardsData.map((card) => (
                <InfoCard key={card.id} {...card} />
            ))}
        </section>
    )
}

export default Informations