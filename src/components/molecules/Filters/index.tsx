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
    const filters = [
        {
            iconItem: Tech,
            iconName: 'Tecnologia',
            active: true,
        },
        {
            iconItem: Market,
            iconName: 'Supermercado',
        },
        {
            iconItem: Drinks,
            iconName: 'Bebidas',
        },
        {
            iconItem: Tools,
            iconName: 'Ferramentas',
        },
        {
            iconItem: Health,
            iconName: 'Saúde',
        },{
            iconItem: Fitness,
            iconName: 'Esporte e fitness',
        },{
            iconItem: Fashion,
            iconName: 'Moda',
        }
    ]
    return (
        <div className={styles.containerFilters}>
            {filters.map((filter, index) => (
                <FilterItem key={index} active={filter.active} iconItem={filter.iconItem} alt={filter.iconName} iconName={filter.iconName} />
            ))}
        </div>
    )
}

export default Filters