import styles from './index.module.scss'

function TabNoRelated() {

    return (
        <section className={styles.containerTab}>
            <div className={styles.topTitle}>
                <div className={styles.divisor}></div>
                <h2>Produtos relacionados</h2>
                <div className={styles.divisor}></div>
            </div>

            <a href='#'>Ver todos</a>
        </section>
    )
}

export default TabNoRelated