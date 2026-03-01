import styles from './index.module.scss'
import Shield from "../../../assets/shield.svg";
import Truck from "../../../assets/truck.svg"
import CreditCard from "../../../assets/creditCard.svg"
import { SearchBar } from '../../molecules/SearchBar';
import BenefitItem from '../../atoms/BenefitItem';


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.contentBenefit}>
                <BenefitItem icon={<img src={Shield} alt="Compra segura" />}>
                    Compra<span> 100% segura</span>
                </BenefitItem>
                <BenefitItem icon={<img src={Truck} alt="Compra segura" />}>
                    <span>Frete grátis</span> acima de R$ 200
                </BenefitItem>
                <BenefitItem icon={<img src={CreditCard} alt="Compra segura" />}>
                    <span>Parcele</span> suas compras
                </BenefitItem>
            </div>
            <div className={styles.contentSearchInput}>
                
                <SearchBar />
            </div>
        </div>
    )
}

export default Header