//import React from 'react'
import styles from './index.module.scss'
import Crown from '../../../assets/crownSimple.svg'

interface CategorieItemProps {
  name?: string;
  iconCrown?: boolean
}

function CategorieItem({ name, iconCrown }: CategorieItemProps) {
  return (
    <div className={styles.categorieItem}>
      {iconCrown && <img src={Crown} alt="crown" />}
      <span>{name}</span>
    </div>
  )
}

export default CategorieItem