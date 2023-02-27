import styles from "./Current_category.module.css"

function Current_category(){
    return (
        <div className={styles.current_category}>
        <div>
            <span className={styles.bolder}>Best sellers <>&#10084;</> / <span className={styles.lightgrey}>231 items</span></span>
        </div>

        <div className={styles.filter_buttons}>
            <button className={styles.see}>See 2</button>
            <button className={styles.filter}>Filter</button>
        </div>
    </div>
    )
}

export default Current_category