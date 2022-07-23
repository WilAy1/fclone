import './App.css';
import logo from './images/foodlrlogo.png'
function App() {
  return (
    <div className="App">
      <header className='pageHeaded'>
        <nav className='fNavBar'>
          <div className='fLogo'>
            <img src={logo} className="fLogoImg"/>
          </div>
        </nav>
      </header>

    </div>
  );
}

export default App;
