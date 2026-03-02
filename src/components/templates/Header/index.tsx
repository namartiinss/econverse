import styles from './index.module.scss'
import { SearchBar } from '../../molecules/SearchBar';
import BenefitBar from '../../molecules/BenefitBar/benefitBar';
import CategoriesBar from '../../molecules/CategoriesBar';

function Header() {
    return (
        <header className={styles.container}>
            <BenefitBar />
            <SearchBar />
            <CategoriesBar />
        </header>
    )
}

export default Header