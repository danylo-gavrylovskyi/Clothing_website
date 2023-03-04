import React from "react"
import styles from "./Navigation.module.css"
import Cart from "../Cart/Cart"

function Navigation(props){
    const [isCartOpened, setCart] = React.useState(false)

    function changeCart(){
        setCart(isCartOpened=>!isCartOpened)
    }

    return(
        <>
        <nav className={styles.navigation}>
            <div className={styles.search}>
                <a href=""><img className={styles.magnifying_glass} src="img/icons/magnifying-glass.svg"></img>SEARCH</a>
            </div>
            <a className={styles.icons}><img src="img/icons/user.svg"></img></a>
            <a className={styles.icons} onClick={changeCart}><img src="img/icons/bag-outline.svg"></img></a>
        </nav>
        
        <nav className={styles.hamburger_menu}>
            <img src="img/icons/hamburger-menu.svg"></img>
        </nav>

        {isCartOpened && <Cart cartItems={props.cartItems} close={changeCart}></Cart>}
        </>
    )
}

export default Navigation