import React from "react"
import styles from "./ChooseSize.module.css"

function ChooseSize(props){
    const [isShown, setShow] = React.useState(false)

    function showSizes(){
        setShow(!isShown)
    }

    return(
        <div className={styles.dropdown_sizes_menu}>
            {isShown && <div onMouseLeave={showSizes} className={styles.size_options}>
                <p onClick={() => {props.setSize("XS"); showSizes()}}>XS</p>
                <p onClick={() => {props.setSize("S"); showSizes()}}>S</p>
                <p onClick={() => {props.setSize("M"); showSizes()}}>M</p>
                <p onClick={() => {props.setSize("L"); showSizes()}}>L</p>
                <p onClick={() => {props.setSize("XL"); showSizes()}}>XL</p>
            </div>}
            <p className={styles.choosed_option} onMouseEnter={showSizes}> {props.size} <img src="img/icons/down_arrow.svg"></img></p>
            <button className={styles.add_to_cart}>ADD</button>
        </div>
    )
}

export default ChooseSize