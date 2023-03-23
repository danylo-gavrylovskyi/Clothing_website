import styles from './App.module.css';
import React from 'react';
import axios from 'axios'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart';

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get("https://63fce95c859df29986c75869.mockapi.io/items").then(res => {
      setItems(res.data)
    })

    axios.get("https://63fce95c859df29986c75869.mockapi.io/cart").then(res => {
      setCartItems(res.data)
    })
  }, [])

  const [cartItems, setCartItems] = React.useState([])

  function onAddToCart(obj){
    axios.post("https://63fce95c859df29986c75869.mockapi.io/cart", obj)
    setCartItems(prev => [...prev, obj])
  }

  function onRemoveFromCart(id){
    axios.delete(`https://63fce95c859df29986c75869.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const [isCartOpened, setCart] = React.useState(false)

  function changeCart(){
    setCart(isCartOpened=>!isCartOpened)
  }

  const [searchInput, setSearchInput] = React.useState("")
  function onChangeSearchInput(event){
    setSearchInput(event.target.value)
  }

  return (
    <div className={styles.main_body}>
      <a className={styles.sale_alert} href="#">
        Sale: <>&nbsp;</><span className={styles.bolder}>UP TO -50%!</span> Free store delivery
        and free returns.. <span className={styles.underlined}>SHOP!</span>
      </a>


      <div className={styles.logo}>
        <img src="img/icons/logo-template.svg"></img>
      </div>

      <nav className={styles.navigation}>
            <div className={styles.search}>
              <img className={styles.magnifying_glass} src="img/icons/magnifying-glass.svg"></img>
              <input onChange={onChangeSearchInput} type="text" placeholder='SEARCH'></input>
            </div>
            <a className={styles.icons}><img src="img/icons/user.svg"></img></a>
            <div className={styles.icons} onClick={changeCart}><img src="img/icons/bag-outline.svg"></img></div>
        </nav>
        
        <nav className={styles.hamburger_menu}>
            <img src="img/icons/hamburger-menu.svg"></img>
        </nav>

        {isCartOpened && <Cart cart={cartItems} close={changeCart} onRemove={onRemoveFromCart}></Cart>}
      
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
    </div>
  );
}

export default App;
