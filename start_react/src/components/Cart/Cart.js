import React from "react";
import styles from "./Cart.module.css"

function Cart(props){
    return(
        <div className={styles.overlay}>
            <div className={styles.cart}>
                Cart
                <img onClick={props.close} className={styles.close} src="/img/icons/close.svg"></img>
            </div>
        </div>
    )
}

export default Cart