import styles from "./index.module.scss"
import Logotipo from "../../atoms/Logotipo";
import SearchInput from "../../atoms/SearchInput";
import { Utilities } from "../UtilitiesBar";

export function SearchBar() {
  return (
    <div className={styles.containerSearchBar}>
      <div className={styles.contentSearchBar}>
        <Logotipo />
        <SearchInput />
        <div className={styles.contentUtilities}>
          <Utilities />
        </div>
      </div>
    </div>
  )
}