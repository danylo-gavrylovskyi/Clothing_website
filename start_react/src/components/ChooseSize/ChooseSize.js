import React from "react"
import styles from "./ChooseSize.module.css"

function ChooseSize(){
    const [isShown, setSizes] = React.useState(false)

    function showSizes(){
        setSizes(!isShown)
    }

    const [size, setSize] = React.useState("SIZE")

    function setSize2(size2){
        setSize(size2)
    }

    return(
        <div className={styles.dropdown_sizes_menu}>
            {isShown && <div onMouseLeave={showSizes} className={styles.size_options}>
                <p onClick={setSize2("XS")}>XS</p>
                {/* <p onClick={}>S</p>
                <p onClick={}>M</p>
                <p onClick={}>L</p>
                <p onClick={}>XL</p> */}
            </div>}
            <p className={styles.choosed_option} onMouseEnter={showSizes}> {size} <img src="img/icons/down_arrow.svg"></img></p>
            <button className={styles.add_to_cart}>ADD</button>
        </div>
    )
}

export default ChooseSize