import RelatedItems from '../../atoms/RelatedItems'
import styles from './index.module.scss'

function TabRelated() {
  return (
    <section className={styles.containerTab}>
      <div>
        <div className={styles.topTitle}>
          <div className={styles.divisor}></div>
          <h2>Produtos relacionados</h2>
          <div className={styles.divisor}></div>
        </div>
        <div className={styles.containerRelatedProducts}>
          <RelatedItems nameRelated='CELULAR' />
          <RelatedItems nameRelated='ACESSÓRIOS' />
          <RelatedItems nameRelated='TABLETS' />
          <RelatedItems nameRelated='NOTEBOOKS' />
          <RelatedItems nameRelated='TVS' />
          <RelatedItems nameRelated='TODOS' />
        </div>
      </div>
    </section>
  )
}

export default TabRelated