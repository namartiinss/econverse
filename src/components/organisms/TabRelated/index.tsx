import RelatedItems from '../../atoms/RelatedItems'
import styles from './index.module.scss'

function TabRelated() {
  const relatedProducts = [
    {
      nameRelated: 'CELULAR',
      active: true,
    },
    {
      nameRelated: 'ACESSÓRIOS',
      active: false,
    },
    {
      nameRelated: 'TABLETS',
      active: false,
    },
    {
      nameRelated: 'NOTEBOOKS',
      active: false,
    },
    {
      nameRelated: 'TVS',
      active: false,
    },
    {
      nameRelated: 'TODOS',
      active: false,
    },
  ]
  return (
    <section className={styles.containerTab}>
      <div>
        <div className={styles.topTitle}>
          <div className={styles.divisor}></div>
          <h2>Produtos relacionados</h2>
          <div className={styles.divisor}></div>
        </div>
        <div className={styles.containerRelatedProducts}>
          {relatedProducts.map((related, index) => (
            <RelatedItems key={index} active={related.active} nameRelated={related.nameRelated} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TabRelated