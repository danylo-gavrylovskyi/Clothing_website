import React from 'react';
import axios from 'axios'

import { Cart } from './components/Cart/Cart';
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './pages/Home'
import { Liked } from './pages/Liked';
import { Orders } from './pages/Orders';
import { Routes, Route, Link } from 'react-router-dom';

import styles from './App.module.css';

export function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData(){
      try {
        setIsLoading(true)
        const itemsResponse = await axios.get("https://63fce95c859df29986c75869.mockapi.io/items")
        const cartItemsResponse = await axios.get("https://63fce95c859df29986c75869.mockapi.io/cart")
        const likedItemsResponse = await axios.get("https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items")
        
        setIsLoading(false)
        setCartItems(cartItemsResponse.data)
        setLikedItems(likedItemsResponse.data)
        setItems(itemsResponse.data)
      }
      catch(error){
        alert("Error when getting data from db on first render")
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const [cartItems, setCartItems] = React.useState([])

  async function onAddToCart(obj){
    try{
      if (!cartItems.find(item => item.parentId === obj.parentId)){
        await axios.post("https://63fce95c859df29986c75869.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, obj])
      }
    }
    catch(error){
      alert("Error on adding item to cart")
      console.log(error)
    }
  }

  async function onRemoveFromCart(id){
    try{
      setCartItems(prev => prev.filter(item => item.id !== id))
      await axios.delete(`https://63fce95c859df29986c75869.mockapi.io/cart/${id}`)
    }
    catch(error){
      alert("Error when removing item from cart")
      console.log(error)
    }
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
      try{
        if (likedItems.find(item => item.parentId === likedObj.parentId)){
          axios.delete(`https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items/${likedObj.id}`)
          setLikedItems(prev => prev.filter(item => item.parentId !== likedObj.parentId))
        }
        else{
          const {data} = await axios.post("https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items", likedObj)
          setLikedItems(prev => [...prev, data])
        }
      }
      catch(error){
        alert("Error with sending object to backend in onAddToLiked function")
        console.log(error)
      }
      }

  const [isOrdered, setIsOrdered] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)
  const [isOrderLoading, setOrderLoading] = React.useState(false)

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  async function makeOrder(){
    try{
      setOrderLoading(true)
      const {data} = await axios.post("https://64248fef7ac292e3cfed5b72.mockapi.io/Orders", {items: cartItems})
      setOrderId(data.id)
      setIsOrdered(true)
      setCartItems([])
      for (let index = 0; index < cartItems.length; index++) {
        const item = cartItems[index]
        console.log(item.id)
        await axios.delete(`https://63fce95c859df29986c75869.mockapi.io/cart/${item.id}`)
        await delay(1000)
      }
      setOrderLoading(false)
    }
    catch(error){
      alert("Error in makeOrder function")
      console.log(error)
    }
  }

  const [isMenuClicked, setMenuClick] = React.useState(false)

  return (
    <div className={styles.main_body}>
      
      <div className={styles.logo}>
        <Link to='/'>
          <img src="img/icons/logo-template.svg"></img>
        </Link>
      </div>
      

      <nav className={styles.navigation}>
            <div className={styles.search}>
              <img className={styles.magnifying_glass} src="img/icons/magnifying-glass.svg"></img>
              <input onChange={onChangeSearchInput} type="text" placeholder='SEARCH'></input>
            </div>
            <Link to='/orders'>
              <div className={styles.icons}><img src="img/icons/user.svg"></img></div>
            </Link>
            <Link to='/liked'>
              <div className={styles.icons}><img src="img/icons/heart-fill.svg"></img></div>
            </Link>
            <div className={styles.icons} onClick={changeCart}><img src="img/icons/bag-outline.svg"></img></div>
        </nav>
        
        <nav onMouseEnter={() => setMenuClick(true)} className={styles.hamburger_menu}>
            <img src="img/icons/hamburger-menu.svg"></img>
        </nav>

        {isMenuClicked && <Navigation setMenuClick={setMenuClick}></Navigation>}
        <Cart setIsOrdered={setIsOrdered} isOrderLoading={isOrderLoading} orderId={orderId} isOrdered={isOrdered} makeOrder={makeOrder} cart={cartItems} close={changeCart} onRemove={onRemoveFromCart} isOpened={isCartOpened}></Cart>

        <Routes>
          <Route path='/' exact element={
            <Home searchInput={searchInput} items={items} cartItems={cartItems} onAddToCart={onAddToCart} onAddToLiked={onAddToLiked} likedItems={likedItems}
            isLoading={isLoading} />}>
          </Route>

          <Route path='/liked' exact element={
            <Liked searchInput={searchInput} cartItems={cartItems} onAddToCart={onAddToCart} items={likedItems} onAddToLiked={onAddToLiked}/>}>
          </Route>

          <Route path='/orders' exact element={<Orders searchInput={searchInput}></Orders>}></Route>
        </Routes>
    </div>
  )
}
