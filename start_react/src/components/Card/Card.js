import React from "react";
import styles from './Card.module.css'; 

function Card(props){
    return(
        <section className={styles.item}>
            <div className={styles.item_img}>
                <a href="#">
                    <img src={props.imageUrl}></img>
                    <div className={styles.sale}>-30%</div>
                </a>
            </div>

            <div className={styles.grid_under_image}>
                <div className={styles.description}>
                    <a href="#">
                        <p className={styles.lighter_black}>{props.name}</p>
                        <p><span className={styles.bolder}>{props.price}PLN</span></p>
                        <p className={styles.light_grey_font}>{props.addInfo}</p>
                    </a>
                </div>

                <div className={styles.like_btn}>
                    <button><img className={styles.like_btn_img} src="icons/void-heart-svgrepo-com.svg"></img></button>
                    <button className={styles.filled_heart}><img src="icons/red-heart-svgrepo-com.svg"></img></button>
                </div>
            </div>
        </section>
    )
}

export default Card