import styles from "./index.module.scss"

interface ButtonPtops {
    nameButton?: string;
    href?: string;
    children?: React.ReactNode;
}

export function Button({href, children}: ButtonPtops) {
    return (
        <a href={href} className={styles.button}>{children}</a>
    )
}