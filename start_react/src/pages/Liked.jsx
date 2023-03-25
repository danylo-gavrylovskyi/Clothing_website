import React from "react"
import Card from "../components/Card/Card"
import styles from "../App.module.css"

function Liked({searchInput, items, cartItems, onAddToCart}){
    return(
        <>
        <div className={styles.current_category}>
            <div>
                {searchInput ? <div className={styles.bolder}>Search by: {searchInput}</div>: <span className={styles.bolder}>My Liked Items</span>}
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
            name={obj.name} 
            addInfo={obj.addInfo} 
            price={obj.price} 
            imageUrl={obj.imageUrl}
            hoverImgUrl ={obj.hoverImgUrl} 
            prevCost={obj.prevCost}
            cartItems={cartItems}
            cartAddHandler={onAddToCart}
            item={obj}>
            </Card>
          ))
        }
      </main>
      </>
    )
}

export default Liked