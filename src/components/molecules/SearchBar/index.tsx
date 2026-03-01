import styles from "./index.module.scss"
import Logotipo from "../../atoms/Logotipo";
import SearchInput from "../../atoms/SearchInput";
import { Utilities } from "../UtilitiesBar";
import Delivery from '../../../assets/delivery.svg'
import Heart from '../../../assets/heart.svg'
import User from '../../../assets/userCircle.svg'
import Cart from '../../../assets/shoppingCart.svg'

export function SearchBar() {
  return (
    <div className={styles.contentSearchBar}>
      <Logotipo />
      <SearchInput />
      <div className={styles.contentUtilities}>
        <Utilities utilityIcon={<img src={Delivery} />} />
        <Utilities utilityIcon={<img src={Heart} />} />
        <Utilities utilityIcon={<img src={User} />} />
        <Utilities utilityIcon={<img src={Cart} />} />
      </div>
    </div>
  )
}