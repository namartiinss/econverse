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
            <h3>{iconName}</h3>
        </div>
    )
}

export default FilterItem