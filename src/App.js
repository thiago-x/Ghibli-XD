import './App.css';
import Ponyo from './img/ponyo.jpg'
import Castle from './img/casteloanimado.jpg'
import Chihiro from './img/chihiro.jpg'

function App() {
  return (
    <div className="App">
      <div src={Ponyo} className="Ponyo"></div>
      <div src={Castle} className="Castle"></div>
      <div src={Chihiro} className="Chihiro"></div>
    </div>
  );
}

export default App;
