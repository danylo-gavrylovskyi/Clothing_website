import './App.css';
import React from 'react';
import Card from './components/Card/Card'
import Sale_alert from './components/Sale_alert/Sale_alert';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Current_category from './components/Current_category/Current-category';
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

  return (
    <body>
      <Sale_alert></Sale_alert>
      <Logo></Logo>
      <Navigation></Navigation>
      <Current_category></Current_category>
      <main className='main-grid'>
        {
          items.map(obj => (
            <Card name={obj.name} 
            addInfo={obj.addInfo} 
            price={obj.price} 
            imageUrl={obj.imageUrl}
            hoverImgUrl ={obj.hoverImgUrl} 
            prevCost={obj.prevCost}>
            </Card>
          ))
        }
      </main>
    </body>
  );
}

export default App;
