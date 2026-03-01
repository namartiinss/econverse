import styles from './header.module.scss'
import { BenefitItem } from "../../atoms/BenefitItem"
import Shield from "../../../assets/shield.svg";
import Truck from "../../../assets/truck.svg"
import CreditCard from "../../../assets/creditCard.svg"

export function Header() {
    return (
        <div className={styles.container}>
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
    )
}
