import styles from "./benefitItem.module.scss"

interface BenefitItemProps {
    icon?: React.ReactElement
    children?: React.ReactNode
}

export function BenefitItem({ icon, children }: BenefitItemProps) {
    return (
        <div className={styles.flexCenter}>
            {icon}
            <h4 className="">{children}</h4>
        </div>
    )
}