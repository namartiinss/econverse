import { useState } from "react"
import styles from "./index.module.scss"
import { Button } from "../../atoms/Button"

interface ProductModalProps {
    productName: string
    photo: string
    price: number
    onClose: () => void
}

function ProductModal({ productName, photo, price, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1)
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeModal} onClick={onClose}>✕</button>
                <img src={photo} alt={productName} />
                <div className={styles.contentInfoProduct}>
                    <h2>{productName}</h2>
                    <p>{formattedPrice}</p>
                    <div>
                        <h5 className={styles.details}>
                            Many desktop publishing packages and
                            web page editors now many desktop publishing
                        </h5>
                        <div className={styles.arrowRight}>
                            <a className={styles.detailsLink} href="#">
                                Veja mais detalhes do produto
                            </a>
                        </div>
                    </div>
                    <div className={styles.checkout}>
                        <div className={styles.quantity}>
                            <button className={styles.buttonLess} onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                            <span>{quantity}</span>
                            <button className={styles.buttonAdd} onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>
                        <Button children="COMPRAR" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductModal