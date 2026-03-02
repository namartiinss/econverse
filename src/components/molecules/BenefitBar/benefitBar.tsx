import styles from './benefitBar.module.scss'
import Shield from "../../../assets/shield.svg";
import Truck from "../../../assets/truck.svg";
import CreditCard from "../../../assets/creditCard.svg";
import BenefitItem from '../../atoms/BenefitItem';

function BenefitBar() {
    const benefits = [
        {
            id: 1,
            icon: Shield,
            text: "Compra 100% segura",
        },
        {
            id: 2,
            icon: Truck,
            text: "Frete grátis acima de R$200",
        },
        {
            id: 3,
            icon: CreditCard,
            text: "Parcele suas compras",
        }
    ]

    return (
        <div className={styles.contentBenefit}>
            {benefits.map((benefit) => (
                <BenefitItem key={benefit.id} icon={benefit.icon} alt={benefit.text}>
                    {benefit.text}
                </BenefitItem>
            ))}
        </div>
    )
}

export default BenefitBar