import styles from './index.module.scss';

interface RelatedItemsProps {
    nameRelated?: string;
}

function RelatedItems({ nameRelated }: RelatedItemsProps) {
    return (
        <div>
            <button className={styles.buttonItemsRelated}>
                <h3 className={styles.relatedColors}>{nameRelated}</h3>
            </button>
        </div>
    )
}

export default RelatedItems