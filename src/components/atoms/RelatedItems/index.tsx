import styles from './index.module.scss';

interface RelatedItemsProps {
    nameRelated?: string;
    active?: boolean;
}

function RelatedItems({ nameRelated, active }: RelatedItemsProps) {
    return (
        <button className={`${styles.buttonItemsRelated} ${active ? styles.active : ''}`}>
            <span className={styles.relatedColors}>{nameRelated}</span>
        </button>
        )
}

export default RelatedItems