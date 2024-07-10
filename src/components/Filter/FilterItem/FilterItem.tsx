import classNames from "classnames";
import styles from "./FilterItem.module.css"
import FilterCount from "./FilterCount/FilterCount";


type FilterItemProps = {
    title: string;
    list: string[];
    isActive: boolean;
    handleFilter: (filterName: string) => void;
    filterName: string;
    numberSelectedValues: number;
}

function FilterItem({ title, list, isActive, handleFilter, filterName, numberSelectedValues }: FilterItemProps) {
    return (
        <div>
            <div className={styles.filetrBlock}>
            <FilterCount numberSelectedValues={numberSelectedValues} />
                <div onClick={() => handleFilter(filterName)} className={classNames(styles.filterButton, styles.btnText, { [styles.active]: isActive })}  >
                    {title}
                </div>
            </div>
            {isActive && (
                <ul className={styles.list}>
                    {list.map((item, index) => (
                        <li className={classNames(styles.listItem)} key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FilterItem;