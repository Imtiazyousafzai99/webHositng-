import logo from './logo.svg';
import './App.css';
import NameCard from './Components/NameCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameCard/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          Imtyaz Alam
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
