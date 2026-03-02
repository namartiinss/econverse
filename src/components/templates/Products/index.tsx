import TabRelated from '../../organisms/TabRelated'
import SwiperProducts from '../../organisms/SwiperProducts'
import TabNoRelated from '../../organisms/TabNoRelated'
type ProductsProps = {
    hasCategories: boolean
}
function Products({ hasCategories }: ProductsProps) {
  return (
    <section>
      {hasCategories ? <TabRelated /> : <TabNoRelated />}
        <SwiperProducts />
    </section>
  )
}

export default Products