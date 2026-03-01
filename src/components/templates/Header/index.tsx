import styles from './index.module.scss'
import { SearchBar } from '../../molecules/SearchBar';
import BenefitBar from '../../molecules/BenefitBar/benefitBar';
import CategoriesBar from '../../molecules/CategoriesBar';

function Header() {
    return (
        <div className={styles.container}>
            <BenefitBar />
            <SearchBar />
            <CategoriesBar />
        </div>
    )
}

export default Header