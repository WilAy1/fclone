import './App.css';
import logo from './images/foodlrlogo.png'
function App() {
  const myStyle={
    backgroundImage:`url(${logo})`,
            height:'150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };
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
