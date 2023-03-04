import React from "react";
import styles from "./Cart.module.css"

function Cart(props){
    console.log(props.cartItems)
    return(
        <div className={styles.overlay}>
            <div className={styles.cart}>
                Cart
                <img onClick={props.close} className={styles.close} src="/img/icons/close.svg"></img>

                {props.cartItems.map(obj => (
                    <section className={styles.cartItem}>
                        <div className={styles.itemImg}><img src={obj.imageUrl}></img></div>
                    </section>
                ))
                
                }

            </div>
        </div>
    )
}

export default Cart