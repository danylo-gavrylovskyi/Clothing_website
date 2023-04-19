import React from 'react'

import styles from './Navigation.module.css'

export function Navigation({setMenuClick}){

    const [isClothingPicked, setClothingPick] = React.useState(false)
    const [isShoesPicked, setShoesPick] = React.useState(false)
    const [isBasicsPicked, setBasicsPick] = React.useState(false)
    const [isAccessoriesPicked, setAccessoriesPick] = React.useState(false)
    const [isBagsPicked, setBagsPick] = React.useState(false)
    const [isJeansPicked, setJeansPick] = React.useState(false)

    const [isManPicked, setGender] = React.useState(true)
    const switchGender = () => {
        setGender(!isManPicked)
    }

    const changeCategory = (category, setCategory) => {
        closeCategories()
        setCategory(!category)
    }

    const closeCategories = () => {
        setClothingPick(false)
        setShoesPick(false)
        setBasicsPick(false)
        setAccessoriesPick(false)
        setBagsPick(false)
        setJeansPick(false)
    }

    return (
        <nav onMouseLeave={() => setMenuClick(false)} className={styles.menu}>
            <div className={styles.select_gender}>
                <span onClick={switchGender} className={!isManPicked ? styles.selected_gender_font : ""}>WOMAN</span>
                <span className={styles.vertical_line}>|</span>
                <span onClick={switchGender} className={isManPicked ? styles.selected_gender_font : ""}>MAN</span>
            </div>

            <div className={styles.categories}>
                <p className={styles.red_font}>SALE UP TO -50%</p>
                <div className={styles.category_font}>
                    <span>NEW</span>
                    <span onClick={() => changeCategory(isClothingPicked, setClothingPick)}>CLOTHING</span>
                    <span onClick={() => changeCategory(isBasicsPicked, setBasicsPick)}>BASICS</span>
                    <span onClick={() => changeCategory(isShoesPicked, setShoesPick)}>SHOES</span>
                    <span onClick={() => changeCategory(isAccessoriesPicked, setAccessoriesPick)}>ACCESSORIES</span>
                    <span onClick={() => changeCategory(isBagsPicked, setBagsPick)}>BAGS|BACKPACKS</span>
                    <span onClick={() => changeCategory(isJeansPicked, setJeansPick)}>JEANS</span>
                </div>
            </div>

            {isClothingPicked &&
            <div className={styles.subcategory}>
                <p className={styles.red_font}>Sale favourites</p>
                <p>Best sellers &#10084;</p>
                <p className={styles.bottom_border_line}></p>
                <p>Jeans</p>
                <p>Trousers</p>
                <p>Cargo & parachute</p>
                <p>Puffer jackets</p>
                <p>Jackets & Coats</p>
                <p>Sweatshirts & Hoodies</p>
                <p>Tracksuit</p>
                <p>Knit</p>
                <p>T-shirts</p>
                <p>Shirts</p>
                <p>Shorts</p>
                <p>Overshirts</p>
                <p>Waistcoats</p>
            </div>}

            {isShoesPicked && 
            <div className={styles.subcategory}>
                <p>See all</p>
                <p>What's new</p>
                <p>Trainers</p>
                <p>Sandals</p>
                <p>Espadrilles</p>
                <p>Casual shoes</p>
                <p>Boots and ankle boots</p>
                <p>Leather</p>
                <p className={styles.red_font}>Promotions</p>
                <p class={styles.bottom_border_line}></p>
                <p>Online Exclusive</p>
            </div>}

            {isBasicsPicked &&
            <div className={styles.subcategory}>
                <p>See all</p>
                <p>Trousers</p>
                <p>Jeans</p>
                <p>Sweatshirts</p>
                <p>Jackets</p>
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Shoes</p>
            </div>}

            {isAccessoriesPicked &&
            <div className={styles.subcategory}>
                <p>See all</p>
                <p>Underwear</p>
                <p>Socks</p>
                <p>Wallets</p>
                <p>Caps</p>
                <p>Belts</p>
                <p>Sunglasses</p>
                <p>Belt bags and bags</p>
                <p>Jewellery</p>
                <p>Mobile accessories</p>
                <p>Hats</p>
            </div>}

            {isBagsPicked &&
            <div className={styles.subcategory}>
                <p>See all</p>
                <p>Backpacks</p>
                <p>Travel bags</p>
                <p>Belt bags</p>
                <p>Crossbody bags</p>
                <p className={styles.red_font}>Promotions</p>
            </div>}

            {isJeansPicked &&
            <div className={styles.subcategory}>
                <p>See all</p>
                <p>Baggy</p>
                <p>Slim</p>
                <p>Skinny</p>
                <p>Carrot</p>
                <p>Relaxed</p>
                <p>Straight</p>
                <p>Standard</p>
                <p>Wide-leg</p>
                <p>Rips</p>
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