import styles from "./Sale_alert.module.css"

function Sale_alert(){
    return(
        <a className={styles.sale_alert} href="#">
        Sale: <>&nbsp;</><span className={styles.bolder}>UP TO -50%!</span> Free store delivery
        and free returns.. <span className={styles.underlined}>SHOP!</span>
        </a>
    )
}

export default Sale_alert