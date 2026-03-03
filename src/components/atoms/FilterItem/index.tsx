import styles from "./index.module.scss"

interface FilterItemProps {
    iconItem?: React.ReactNode;
    iconName?: string;
    alt?: string;
    active?: boolean;
}

function FilterItem({ iconItem, iconName, alt, active }: FilterItemProps) {
    return (
        <div className={`${styles.containerFilterItem} ${active ? styles.active : ''}`}>
            <div className={styles.iconFilter}>
                <img src={iconItem as string} alt={alt} />
            </div>
            <h4>{iconName}</h4>
        </div>
    )
}

export default FilterItem