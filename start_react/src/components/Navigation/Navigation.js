import styles from "./Navigation.module.css"
import bag from "./bag-outline.svg"
import magnifying_glass from "./magnifying-glass.svg"
import user from "./user.svg"
import hamburger_menu from "./hamburger-menu.svg"

function Navigation(){
    return(
        <>
        <nav className={styles.navigation}>
            <div className={styles.search}>
                <a href=""><img className={styles.magnifying_glass} src={magnifying_glass}></img>SEARCH</a>
            </div>
            <a className={styles.icons}><img src={user}></img></a>
            <a className={styles.icons}><img src={bag}></img></a>
        </nav>
        
        <nav className={styles.hamburger_menu}>
            <img src={hamburger_menu}></img>
        </nav>
        </>
    )
}

export default Navigation