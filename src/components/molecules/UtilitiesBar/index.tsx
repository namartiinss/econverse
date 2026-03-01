import styles from "./index.module.scss"

interface UtilitiesProps {
    utilityIcon?: React.ReactElement
    utilityLink?: React.ReactNode
}

export function Utilities({ utilityIcon, utilityLink }: UtilitiesProps) {
    return (
        <>
            <button className={styles.buttonIcon}>
                {utilityIcon}
                {utilityLink}
            </button>
        </>
    )
}