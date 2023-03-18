import React from "react";
import styles from "./Cart.module.css"

function Cart({close, cart = []}){
    return(
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <div className={styles.header}>
                    <div className={styles.bag_title}>Shopping Bag<img src="img/icons/bag-outline.svg"></img></div>
                    <div className={styles.close_btn}><img onClick={close} className={styles.close_image} src="/img/icons/close.svg"></img></div>
                </div>

                {cart.map(obj => (
                    <section className={styles.cartItem}>
                        <div className={styles.itemImg}>
                            <img src={obj.imageUrl}></img>
                        </div>
                        <div className={styles.margin_left}>
                            <p>{obj.name}</p>
                            <p className={styles.price}>{obj.price}PLN</p>
                        </div>
                    </section>
                ))
                
                }

            </div>
        </div>
    )
}

export default Cart