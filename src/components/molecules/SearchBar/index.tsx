import styles from "./index.module.scss"
import Logotipo from "../../atoms/Logotipo";
import SearchInput from "../../atoms/SearchInput";

export function SearchBar() {
  return (
    <div className={styles.containerSearchBar}>
      <Logotipo />
      <SearchInput />
    </div>
  )
}