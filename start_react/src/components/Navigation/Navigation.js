import React from 'react'
import styles from './Navigation.module.css'

export function Navigation({setMenuClick}){

    const [isNewPicked, setNewPick] = React.useState(false)
    const onNewCLick = () => {
        setNewPick(!isNewPicked)
    }
    const [isClothingPicked, setClothingPick] = React.useState(false)

    return (
        <nav onMouseLeave={() => setMenuClick(false)} className={styles.menu}>
            <div className={styles.select_gender}>
                <span>WOMAN</span>
                <span className={styles.vertical_line}>|</span>
                <span className={styles.selected_gender_font}>MAN</span>
            </div>

            <div className={styles.categories}>
                <p className={styles.red_font}>SALE UP TO -50%</p>
                <div className={styles.category_font}>
                    <span onClick={onNewCLick}>NEW</span><br></br>
                    <span>CLOTHING</span><br></br>
                    <span>BASICS</span><br></br>
                    <span>SHOES</span><br></br>
                    <span>ACCESSORIES</span><br></br>
                    <span>CAREERS</span><br></br>
                    <span>UNISEX</span>
                </div>
            </div>

            {isNewPicked && 
            <div className={styles.subcategory}>

            </div>}

            <footer className={styles.bottom_categories}>
                <p>#storecommunity</p>
                <p>FAQs</p>
                <p>How to make a return</p>
                <p>GiftCard</p>
                <p>Stores</p>
                <p>Newsletter</p>
            </footer>
        </nav>
    )
}