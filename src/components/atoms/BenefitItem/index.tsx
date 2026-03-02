import React from 'react'
import styles from './index.module.scss'

interface BenefitItemProps {
    icon: string
    alt?: string
    children?: React.ReactNode
}

function BenefitItem({ icon, alt, children }: BenefitItemProps) {
    return (
        <div className={styles.flexCenter}>
            <img src={icon} alt={alt} />
            <h5>{children}</h5>
        </div>
    )
}

export default BenefitItem