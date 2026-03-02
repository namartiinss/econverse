import { Button } from '../../atoms/Button'
import styles from './index.module.scss'

function Hero() {
    return (
        <section>
            <div className={styles.containerHero}>
                <div className={styles.contentHero}>
                    <div className={styles.contentText}>
                        <h1>Venha conhecer nossas promoções</h1>
                        <h2><span>50% Off</span> nos produtos </h2>
                        <Button href='#' children="Ver produto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero