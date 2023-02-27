import styles from "./Logo.module.css"
import logo from "./logo-template.svg"

function Logo(){
    return(
        <div className={styles.logo}>
        <a href="#">
            <img src={logo}></img>
        </a>
        </div>
    )
}

export default Logo