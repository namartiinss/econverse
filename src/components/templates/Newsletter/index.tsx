import styles from './index.module.scss'
import { Button } from "../../atoms/Button"

function Newsletter() {
    return (
        <div className={styles.containerNews}>
            <div className={styles.contentNews}>
                <div>
                    <h2>
                        Inscreva-se na nossa newsletter
                    </h2>
                    <h4>
                        Assine a nossa newsletter e receba as
                        novidades e conteúdos exclusivos da Econverse.
                    </h4>
                </div>
                <div>
                    <div className={styles.contentInputs}>
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="text" placeholder="Digite seu e-mail" />
                        <Button children="INSCREVER" />
                    </div>
                    <label className={styles.label}>
                        <input className={styles.checkbox} type="checkbox" value="" />
                        <span className={styles.customCheckbox} />
                        <h4>Aceito os termos e condições</h4>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Newsletter