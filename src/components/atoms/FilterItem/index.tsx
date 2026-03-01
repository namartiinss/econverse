import styles from "./index.module.scss"

interface FilterItemProps {
    iconItem?: React.ReactNode;
    iconName?: string;
}

function FilterItem({ iconItem, iconName }: FilterItemProps) {
    return (
        <div className={styles.containerFilterItem}>
            <div className={styles.iconFilter}>
                {iconItem}
            </div>
            <h4>{iconName}</h4>
        </div>
    )
}

export default FilterItem