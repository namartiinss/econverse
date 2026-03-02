import styles from './index.module.scss'
import ButtonShop from '../../atoms/ButtonShop'
import ProductModal from '../ProductModal'
import { createPortal } from 'react-dom'
import { useState } from 'react'

interface ProductCardProps {
    productName: string
    descriptionShort: string
    photo: string
    price: number
}

function ProductCard({ productName, descriptionShort, photo, price }: ProductCardProps) {
    const installment = (price / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>

            <div className={styles.contentCard}>
                <div>
                    <img src={photo} alt={productName} />
                </div>
                <div className={styles.infoProduct}>
                    <h3>{descriptionShort}</h3>
                    <div>
                        <p className={styles.price}>{formattedPrice}</p>
                        <h5>ou 2x de {installment} sem juros</h5>
                    </div>
                    <span>Frete grátis</span>
                </div>
                <ButtonShop onClick={() => setModalOpen(true)}/>
            </div>

            {modalOpen && createPortal(
                <ProductModal
                    productName={productName}
                    photo={photo}
                    price={price}
                    onClose={() => setModalOpen(false)}
                />,
                document.body
            )}</>
    )
}
export default ProductCard










