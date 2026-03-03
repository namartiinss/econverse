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
        },
        {
            id: 2,
            icon: Heart,
        },
        {
            id: 3,
            icon: User,
        },
        {
            id: 4,
            icon: Cart
        }
    ]

    return (
        <>
            {utilitiesIcons.map((Utilities) => (
                <UtilityIcon key={Utilities.id} icon={Utilities.icon}/>
            ))}
        </>
    )
}