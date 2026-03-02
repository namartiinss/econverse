import styles from './benefitBar.module.scss'
import Shield from "../../../assets/shield.svg";
import Truck from "../../../assets/truck.svg";
import CreditCard from "../../../assets/creditCard.svg";
import BenefitItem from '../../atoms/BenefitItem';

function BenefitBar() {
    const benefits: { id: number; icon: string; alt: string; text: React.ReactNode }[] = [
        {
            id: 1,
            icon: Shield,
            alt: "Compra 100% segura",
            text: <>Compra <strong>100% segura</strong></>,
        },
        {
            id: 2,
            icon: Truck,
            alt: "Frete grátis acima de R$200",
            text: <><strong>Frete grátis</strong> acima de R$200</>,
        },
        {
            id: 3,
            icon: CreditCard,
            alt: "Parcele suas compras",
            text: <><strong>Parcele</strong> suas compras</>,
        }
    ]
    return (
        <div className={styles.contentBenefit}>
            {benefits.map((benefit) => (
                <BenefitItem key={benefit.id} icon={benefit.icon} alt={benefit.alt}>
                    {benefit.text}
                </BenefitItem>
            ))}
        </div>
    )
}

export default BenefitBar