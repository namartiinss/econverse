import styles from './index.module.scss'
interface LinkFooterProps {
    name?: string;
}

function LinkFooter({ name }: LinkFooterProps) {
    return (
        <>
            <a className={styles.link} href="">
                {name}
            </a>
        </>
    )
}

export default LinkFooter