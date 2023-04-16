import styles from './App.module.css';
import React from 'react';
import axios from 'axios'
import Cart from './components/Cart/Cart';
import {Navigation} from './components/Navigation/Navigation'
import Home from './pages/Home'
import Liked from './pages/Liked';
import { Orders } from './pages/Orders';
import { Routes, Route, Link } from 'react-router-dom';

export const appContext = React.createContext()

function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData(){
      setIsLoading(true)
      const itemsResponse = await axios.get("https://63fce95c859df29986c75869.mockapi.io/items")
      const cartItemsResponse = await axios.get("https://63fce95c859df29986c75869.mockapi.io/cart")
      const likedItemsResponse = await axios.get("https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items")
      
      setIsLoading(false)
      setCartItems(cartItemsResponse.data)
      setLikedItems(likedItemsResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])

  const [cartItems, setCartItems] = React.useState([])

  function onAddToCart(obj){
    if (!cartItems.find(item => item.id === obj.id)){
      axios.post("https://63fce95c859df29986c75869.mockapi.io/cart", obj)
      setCartItems(prev => [...prev, obj])
    }
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
      try{
        if (likedItems.find(item => item.id === likedObj.id)){
            axios.delete(`https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items/${likedObj.id}`)
            setLikedItems(prev => prev.filter(item => item.id !== likedObj.id))
        }
        else{
          const {data} = await axios.post("https://64248fef7ac292e3cfed5b72.mockapi.io/Liked_items", likedObj)
          setLikedItems(prev => [...prev, data])
        }
      }
      catch(error){
        alert("Error with sending object to backend in onAddToLiked function")
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
    }
  }

  const [isMenuClicked, setMenuClick] = React.useState(false)
  const onMenuClick = () => {
    setMenuClick(!isMenuClicked)
  }

  return (
    <appContext.Provider value={{}}>
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
        {isCartOpened && <Cart setIsOrdered={setIsOrdered} isOrderLoading={isOrderLoading} orderId={orderId} isOrdered={isOrdered} makeOrder={makeOrder} cart={cartItems} close={changeCart} onRemove={onRemoveFromCart}></Cart>}

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
    </appContext.Provider>
  )
}

export default App;
