import './App.css';
import Card from './components/Card/Card'
import Sale_alert from './components/Sale_alert/Sale_alert';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Current_category from './components/Current_category/Current-category';

function App() {
  return (
    <body>
      <Sale_alert></Sale_alert>
      <Logo></Logo>
      <Navigation></Navigation>
      <Current_category></Current_category>
      <main className='main-grid'>
        <Card name='Contrast colour block puffer j...' addInfo='+ 5 Colours' price={139.00} />
        <Card name='test' price={166.00}/>
      </main>
    </body>
  );
}

export default App;
