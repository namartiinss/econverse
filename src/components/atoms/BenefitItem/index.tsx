import React from 'react'
import styles from './index.module.scss'
interface BenefitItemProps {
    icon?: React.ReactElement
    children?: React.ReactNode
}

function BenefitItem({ icon, children }: BenefitItemProps) {
    return (
        <div className={styles.flexCenter}>
            {icon}
            <h4 className="">{children}</h4>
        </div>
    )
}

export default BenefitItem