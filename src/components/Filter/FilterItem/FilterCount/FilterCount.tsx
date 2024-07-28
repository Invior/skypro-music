import styles from "../FilterItem.module.css"

type FilterCountProps = {
    numberSelectedValues: number;
}

const FilterCount = ({numberSelectedValues}: FilterCountProps) => {
        return ((<div className={styles.selectedFilterCount}>{numberSelectedValues}</div>) );    
}
 
export default FilterCount;