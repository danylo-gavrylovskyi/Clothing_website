import React from "react";
import styles from './Card.module.css'; 
import ChooseSize from "../ChooseSize/ChooseSize";

function Card(props){
    const [onImage, setOnImage] = React.useState(false)

    function isHovered(){
        setOnImage(!onImage)
    }

    const [size, setSize] = React.useState("SIZE")

    return(
        <section className={styles.item}>
            <div className={styles.item_img}>
                <div onMouseEnter={isHovered} onMouseLeave={isHovered}>
                    <img src={props.imageUrl} ></img>
                    {onImage && <img className={styles.hover_img} src={props.hoverImgUrl}></img>}
                    <div className={styles.sale}>-30%</div>

                    {onImage && <ChooseSize size={size} setSize={setSize}></ChooseSize>}
                </div>
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
                    <button><img className={styles.like_btn_img} src="img/icons/void-heart-svgrepo-com.svg"></img></button>
                    <button className={styles.filled_heart}><img src="img/icons/red-heart-svgrepo-com.svg"></img></button>
                </div>
            </div>
        </section>
    )
}

export default Card