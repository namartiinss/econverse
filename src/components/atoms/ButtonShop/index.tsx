import styles from './index.module.scss';

interface ButtonShopProps {
  onClick?: () => void
}

function ButtonShop({ onClick }: ButtonShopProps) {
  return (
    <button onClick={onClick} className={styles.buttonShop}>
      COMPRAR
    </button>
  )
}

export default ButtonShop