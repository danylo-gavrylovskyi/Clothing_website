import React from "react"

import { Card } from "../components/Card/Card"

import styles from "../App.module.css"

export function Home({searchInput, items, onAddToCart, onAddToLiked, likedItems, isLoading}){
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))

  const [isSeeTwoClicked, setSeeTwoCliked] = React.useState(false)
  const seeTwoClick = () => {
    setSeeTwoCliked(!isSeeTwoClicked)
  }

    return(
        <>
        <a className={styles.sale_alert} href="#">
        Sale: <>&nbsp;</><span className={styles.bolder}>UP TO -50%!</span> Free store delivery
        and free returns.. <span className={styles.underlined}>SHOP!</span>
        </a>

        <div className={styles.current_category}>
            <div>
                {searchInput ? <div className={styles.bolder}>Search by: {searchInput}</div>: <span className={styles.bolder}>Best sellers <>&#10084;</> / <span className={styles.lightgrey}>{Object.keys(items).length} items</span></span>}
            </div>

            <div className={styles.filter_buttons}>
                <button onClick={seeTwoClick} className={styles.see}>{isSeeTwoClicked ? "See 4" : "See 2"}</button>
                <button className={styles.filter}>Filter</button>
            </div>
        </div>

      <main className={isSeeTwoClicked ? styles.see_two_grid : styles.main_grid}>
        {
          (isLoading ? [...Array(8)] : filteredItems).map((obj, index) => (
            <Card
            key={isLoading? index : obj.name}
            cartAddHandler={onAddToCart}
            obj={obj}
            onAddToLiked={onAddToLiked}
            liked={likedItems.some(item => item.id === obj.id)}
            isLoading={isLoading}
            {...obj}>
            </Card>
          ))
        }
      </main>
      </>
    )
}
