import { useState } from "react"
import styles from "./index.module.scss"
import Search from "../../../assets/search.svg"

export default function SearchInput() {
    const [query, setQuery] = useState("")

    return (
        <div className={styles.contentSearchInput}>
            <input 
                className={styles.input}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="O que você está buscando?"
            />
            <img src={Search} alt="Icone de pesquisa" />
        </div>
    )
}

