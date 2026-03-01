//import React from 'react'
import styles from './index.module.scss'

interface CategorieItemProps {
  name?: string;
  iconCrown?: React.ReactNode
}

function CategorieItem({name, iconCrown}: CategorieItemProps) {
  return (
    <div>
      <button className={styles.categorieItem}>
        {iconCrown}
        {name}
      </button>
    </div>
  )
}

export default CategorieItem