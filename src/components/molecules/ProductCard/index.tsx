import styles from './index.module.scss'
import ButtonShop from '../../atoms/ButtonShop'
import ProductImg from '../../../assets/produtoCell.png'

function ProductCard() {
    return (
        <div className={styles.contentCard}>
            <div>
                <img src={ProductImg} alt="Imagem de Iphone 14 Pro Max" />
            </div>
            <div className={styles.infoProduct}>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <div>
                    <h3 className={styles.sale}>R$ 30,90</h3>
                    <p className={styles.price}>R$ 28,90</p>
                    <h5>ou 2x de R$ 49,95 sem juros</h5>
                </div>
                <span>Frete grátis</span>
            </div>
            <ButtonShop />
        </div>
    )
}

export default ProductCard