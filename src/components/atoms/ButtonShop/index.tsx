import styles from './index.module.scss';

interface ButtonShopProps {
  onClick?: () => void
}

function ButtonShop({ onClick }: ButtonShopProps) {
  return (
    <button onClick={onClick} className={styles.buttonShop}>
      Comprar
    </button>
  )
}

export default ButtonShop