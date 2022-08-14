import Header from './components/Header';
import Card from './components/Card';
import './App.css';
import Data from './data';

function App() {
  let obj = Data.map((obj)=>{
    return <Card 
    id={obj.id}
    obj={obj}
    />
  })
  return (
    <div className="App">
      <Header/>
      <section className='main-content'>
        {obj}
      </section>
      
      
    </div>
  );
}

export default App;
