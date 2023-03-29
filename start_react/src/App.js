import styles from './App.module.css';
import React from 'react';
import axios from 'axios'
import Cart from './components/Cart/Cart';
import Home from './pages/Home'
import Liked from './pages/Liked';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get("https://63fce95c859df29986c75869.mockapi.io/items").then(res => {
      setItems(res.data)
    })

    axios.get("https://63fce95c859df29986c75869.mockapi.io/cart").then(res => {
      setCartItems(res.data)
    })

    axios.get("https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items").then(res => {
      setLikedItems(res.data)
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

  const [likedItems, setLikedItems] = React.useState([])
    const onAddToLiked = async (likedObj) => {
        if (likedItems.find(item => item.id === likedObj.id)){
            axios.delete(`https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items/${likedObj.id}`)
        }
        else{
          const {data} = await axios.post("https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items", likedObj)
          setLikedItems(prev => [...prev, data])
        }
      }

  return (
    <div className={styles.main_body}>
      

      <Link to='/'>
        <div className={styles.logo}>
          <img src="img/icons/logo-template.svg"></img>
        </div>
      </Link>

      <nav className={styles.navigation}>
            <div className={styles.search}>
              <img className={styles.magnifying_glass} src="img/icons/magnifying-glass.svg"></img>
              <input onChange={onChangeSearchInput} type="text" placeholder='SEARCH'></input>
            </div>
            <a className={styles.icons}><img src="img/icons/user.svg"></img></a>
            <Link to='/liked'>
              <div className={styles.icons}><img src="img/icons/heart-fill.svg"></img></div>
            </Link>
            <div className={styles.icons} onClick={changeCart}><img src="img/icons/bag-outline.svg"></img></div>
        </nav>
        
        <nav className={styles.hamburger_menu}>
            <img src="img/icons/hamburger-menu.svg"></img>
        </nav>

        {isCartOpened && <Cart cart={cartItems} close={changeCart} onRemove={onRemoveFromCart}></Cart>}

        <Routes>
          <Route path='/' exact element={
            <Home searchInput={searchInput} items={items} cartItems={cartItems} onAddToCart={onAddToCart} onAddToLiked={onAddToLiked}/>}>
          </Route>

          <Route path='/liked' exact element={
            <Liked searchInput={searchInput} cartItems={cartItems} onAddToCart={onAddToCart} items={likedItems} onAddToLiked={onAddToLiked}/>}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
