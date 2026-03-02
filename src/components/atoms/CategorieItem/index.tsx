//import React from 'react'
import styles from './index.module.scss'
import Crown from '../../../assets/crownSimple.svg'

interface CategorieItemProps {
  name?: string;
  iconCrown?: boolean,
  active?: boolean
}

function CategorieItem({ name, iconCrown, active }: CategorieItemProps) {
  return (
    <div className={`${styles.categorieItem}`}>
      {iconCrown && <img src={Crown} alt="crown" />}
      <span className={active ? styles.active : ''}>{name}</span>
    </div>
  )
}

export default CategorieItem