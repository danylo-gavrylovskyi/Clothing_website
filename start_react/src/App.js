import styles from './App.module.css';
import React from 'react';
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation';

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch("https://63fce95c859df29986c75869.mockapi.io/items").then(response => {
      return response.json()
    }).then(json => {
        setItems(json)
    })
  }, [])

  const [cartItems, setCartItems] = React.useState([])

  function onAddToCart(obj){
    setCartItems(prev => [...prev, obj])
  }


  return (
    <body>
      <a className={styles.sale_alert} href="#">
        Sale: <>&nbsp;</><span className={styles.bolder}>UP TO -50%!</span> Free store delivery
        and free returns.. <span className={styles.underlined}>SHOP!</span>
      </a>


      <div className={styles.logo}>
        <img src="img/icons/logo-template.svg"></img>
      </div>


      <Navigation cartItems={cartItems}></Navigation>
      
      <div className={styles.current_category}>
        <div>
            <span className={styles.bolder}>Best sellers <>&#10084;</> / <span className={styles.lightgrey}>231 items</span></span>
        </div>

        <div className={styles.filter_buttons}>
            <button className={styles.see}>See 2</button>
            <button className={styles.filter}>Filter</button>
        </div>
      </div>

      <main className={styles.main_grid}>
        {
          items.map(obj => (
            <Card name={obj.name} 
            addInfo={obj.addInfo} 
            price={obj.price} 
            imageUrl={obj.imageUrl}
            hoverImgUrl ={obj.hoverImgUrl} 
            prevCost={obj.prevCost}
            cartItems={cartItems}
            setCartItems={() => onAddToCart()}
            item={obj}>
            </Card>
          ))
        }
      </main>
    </body>
  );
}

export default App;
