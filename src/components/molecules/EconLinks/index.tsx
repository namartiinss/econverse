import styles from './index.module.scss'
import LinkFooter from '../../atoms/LinkFooter'

function EconLinks() {
    return (
        <div className={styles.containerLinks}>
            <div>
                <h3>Institucional</h3>
                <div className={styles.links}>
                    <LinkFooter name='Sobre nós' />
                    <LinkFooter name='Movimento' />
                    <LinkFooter name='Trabalhe conosco' />
                </div>
            </div>
            <div>
                <h3>Ajuda</h3>
                <div className={styles.links}>
                    <LinkFooter name='Suporte' />
                    <LinkFooter name='Fale Conosco' />
                    <LinkFooter name='Perguntas Frequentes' />
                </div>
            </div>
            <div>
                <h3>Termos</h3>
                <div className={styles.links}>
                    <LinkFooter name='Termos e Condições' />
                    <LinkFooter name='Política de Privacidade' />
                    <LinkFooter name='Troca e Devolução' />
                </div>
            </div>
        </div>
    )
}

export default EconLinks