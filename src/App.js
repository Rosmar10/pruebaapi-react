import MiApi from './components/MiApi'
import Header from './components/Header';
import imagen from './assets/img/imagen1.jpg';

function App() {
  return (
    <div className="app">
      <Header className='img' imagen={imagen}/>
      <MiApi/>
    </div>
  );

}

export default App;
