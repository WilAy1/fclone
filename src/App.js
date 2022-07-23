import './App.css';
import logo from './images/foodlrlogo.png';
import gif from './images/download.gif'
function App() {
  return (
    <div className="App">
      <header className='pageHeaded'>
          <img src={gif} className="fLogoImg" alt='Logo'/>
          {/*<div className='comingSoon'>Coming Soon</div>*/}
      </header>
    </div>
  );
}

export default App;
