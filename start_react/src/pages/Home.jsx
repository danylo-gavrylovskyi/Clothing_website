import React from "react"
import Card from "../components/Card/Card"
import styles from "../App.module.css"

function Home({searchInput, items, cartItems, onAddToCart}){
    return(
        <>
        <a className={styles.sale_alert} href="#">
        Sale: <>&nbsp;</><span className={styles.bolder}>UP TO -50%!</span> Free store delivery
        and free returns.. <span className={styles.underlined}>SHOP!</span>
        </a>

        <div className={styles.current_category}>
            <div>
                {searchInput ? <div className={styles.bolder}>Search by: {searchInput}</div>: <span className={styles.bolder}>Best sellers <>&#10084;</> / <span className={styles.lightgrey}>231 items</span></span>}
            </div>

            <div className={styles.filter_buttons}>
                <button className={styles.see}>See 2</button>
                <button className={styles.filter}>Filter</button>
            </div>
        </div>

      <main className={styles.main_grid}>
        {
          items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase())).map(obj => (
            <Card 
            key={obj.name}
            cartItems={cartItems}
            cartAddHandler={onAddToCart}
            {...obj}>
            </Card>
          ))
        }
      </main>
      </>
    )
}

export default Home