import styles from './App.module.css';
import React from 'react';
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart';

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
  React.useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  function onAddToCart(obj){
    setCartItems(prev => [...prev, obj])
  }

  const [isCartOpened, setCart] = React.useState(false)

  function changeCart(){
    setCart(isCartOpened=>!isCartOpened)
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

      <nav className={styles.navigation}>
            <div className={styles.search}>
                <a href=""><img className={styles.magnifying_glass} src="img/icons/magnifying-glass.svg"></img>SEARCH</a>
            </div>
            <a className={styles.icons}><img src="img/icons/user.svg"></img></a>
            <a className={styles.icons} onClick={changeCart}><img src="img/icons/bag-outline.svg"></img></a>
        </nav>
        
        <nav className={styles.hamburger_menu}>
            <img src="img/icons/hamburger-menu.svg"></img>
        </nav>

        {isCartOpened && <Cart cart={cartItems} close={changeCart}></Cart>}
      {/* <Navigation cartItems={cartItems}></Navigation> */}
      
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
            cartAddHandler={onAddToCart}
            item={obj}>
            </Card>
          ))
        }
      </main>
    </body>
  );
}

export default App;
