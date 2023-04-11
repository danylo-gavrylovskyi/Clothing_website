import styles from './Navigation.module.css'

export function Navigation(){
    return (
        <nav className={styles.menu}>
            <div className={styles.select_gender}>
                <span>WOMAN</span>
                <span id="vertical-line">|</span>
                <span className={styles.selected_gender_font}>MAN</span>
            </div>

            <div>
                <p className={styles.red_font}>SALE UP TO -50%</p>
                <div className={styles.bold_menu_font}>
                    <p>NEW</p>
                    <p>CLOTHING</p>
                    <p>BASICS</p>
                    <p>SHOES</p>
                    <p>ACCESSORIES</p>
                    <p>CAREERS</p>
                    <p>UNISEX</p>
                </div>
            </div>

            {/* <section id="man-sections">
                <div id="man-clothing-menu">
                    <p class="red-font">Sale favourites</p>
                    <p>Best sellers &#10084;</p>
                    <p class="bottom-border-line"></p>
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
                    <p class="bottom-border-line"></p>
                    <p>Something else</p>
                    <p>Something else</p>
                    <p>Something else</p>
                </div>

                <div id="man-basics-menu">
                    <p>See all</p>
                    <p>Trousers</p>
                    <p>Jeans</p>
                    <p>Sweatshirts</p>
                    <p>Jackets</p>
                    <p>T-shirts</p>
                    <p>Shoes</p>
                </div>
            </section>

            <div id="woman-categories">
                <p class="red-font">SALE UP TO -50%</p>
                <p class="bold-menu-font">NEW</p>
                <p class="bold-menu-font" id="woman-clothing">CLOTHING</p>
                <p class="bold-menu-font">SHOES</p>
                <p class="bold-menu-font">BAGS</p>
                <p class="bold-menu-font">ACCESSORIES</p>
                <p class="bold-menu-font">CAREERS</p>
                <p class="bold-menu-font">UNISEX</p>
            </div>

            <section id="woman-sections">
                <div id="woman-clothing-menu">
                    <p class="red-font">Sale favourites</p>
                    <p>Best sellers &#10084;</p>
                    <p class="bottom-border-line"></p>
                    <p>Trousers</p>
                    <p>Cargo & parachute</p>
                    <p>Jeans</p>
                    <p>Jackets</p>
                    <p>Blazers</p>
                    <p>Coats</p>
                    <p>Sweatshirts & Hoodies</p>
                    <p>Tracksuit</p>
                    <p>Knit</p>
                    <p>T-shirts</p>
                    <p>Dresses & jumpsuits</p>
                    <p>Skirts and shorts</p>
                    <p>Tops & Bodysuits</p>
                    <p>Blouses & Shirts</p>
                    <p>Packs</p>
                    <p>Basics</p>
                    <p class="bottom-border-line"></p>
                    <p>Something else</p>
                    <p>Something else</p>
                    <p>Something else</p>
                </div>
            </section> */}

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