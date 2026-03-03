import UtilityIcon from "../../atoms/UtilityIcon"
import Delivery from "../../../assets/delivery.svg"
import Heart from "../../../assets/heart.svg"
import User from "../../../assets/userCircle.svg"
import Cart from "../../../assets/shoppingCart.svg"

export function Utilities() {
    const utilitiesIcons = [
        {
            id: 1,
            icon: Delivery,
            alt: "Ícone de entrega"
        },
        {
            id: 2,
            icon: Heart,
            alt: "Ícone de favoritos"
        },
        {
            id: 3,
            icon: User,
            alt: "Ícone de usuário"
        },
        {
            id: 4,
            icon: Cart,
            alt: "Ícone de carrinho"
        }
    ]

    return (
        <>
            {utilitiesIcons.map((utilities) => (
                <UtilityIcon key={utilities.id} alt={utilities.alt} icon={utilities.icon}/>
            ))}
        </>
    )
}