import React from "react";
import styles from "./Cart.module.css"

function isCartEmpty(array, onRemove){
    if (array.length === 0){
        return(
            <div className={styles.empty_cart_text}>
                <img src="img/icons/sad.svg"></img>
                <p className={styles.bolder}>YOUR SHOPPING BASKET IS EMPTY</p>
                <p className={styles.add_info}>Check if there are any products on your wishlist and snatch them up before
                they’re gone!<br></br>You can also check out the latest arrivals ;)</p>
            </div>
        )
    }
    else{
        return (
            <>
            {array.map(obj => (
            <section className={styles.cartItem}>
                <div className={styles.itemImg}>
                    <img src={obj.imageUrl}></img>
                </div>
                <div className={styles.margin_left}>
                    <p>{obj.name}</p>
                    <p className={styles.price}>{obj.price}PLN</p>
                    <img onClick={() => onRemove(obj.id)} className={styles.bin} src="img/icons/bin.svg"></img>
                </div>
            </section>))}

            <div className={styles.payment}>
                <p className={styles.total}><span>TOTAL</span><span>234,00</span></p>
                <div className={styles.order_buttons}>
                    <button className={styles.gpay}><img src="img/icons/dark_gpay.svg"></img></button>
                    <button className={styles.proc_order}>PROCESS ORDER</button>
                </div>
            </div>
            </>)
    }
}

function Cart({close, cart = [], onRemove}){
    return(
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <div className={styles.header}>
                    <div className={styles.bag_title}>SHOPPING BAG<img src="img/icons/bag-outline.svg"></img></div>
                    <div className={styles.close_btn}><img onClick={close} className={styles.close_image} src="/img/icons/close.svg"></img></div>
                </div>

                {isCartEmpty(cart, onRemove)}

            </div>
        </div>
    )
}

export default Cart