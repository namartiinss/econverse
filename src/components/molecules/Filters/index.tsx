import styles from './index.module.scss'
import FilterItem from '../../atoms/FilterItem'
import Tech from '../../../assets/technology.png'
import Market from '../../../assets/market.png'
import Drinks from '../../../assets/drinks.png'
import Tools from '../../../assets/tools.png'
import Health from '../../../assets/health.png'
import Fitness from '../../../assets/run.png'
import Fashion from '../../../assets/fashion.png'

function Filters() {
    return (
        <div className={styles.containerFilters}>
            <FilterItem iconItem={<img src={Tech}></img>} iconName='Tecnologia' />
            <FilterItem iconItem={<img src={Market}></img>} iconName='Supermercado' />
            <FilterItem iconItem={<img src={Drinks}></img>} iconName='Bebidas' />
            <FilterItem iconItem={<img src={Tools}></img>} iconName='Ferramentas' />
            <FilterItem iconItem={<img src={Health}></img>} iconName='Saúde' />
            <FilterItem iconItem={<img src={Fitness}></img>} iconName='Esporte e fitness' />
            <FilterItem iconItem={<img src={Fashion}></img>} iconName='Moda' /> 
        </div>
    )
}

export default Filters