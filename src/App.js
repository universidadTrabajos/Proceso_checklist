import logo from './logoMostace.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita si quieres <code>Pero solo esto -->src/App.js</code> y guarda en tu rama.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/photo/?fbid=564035392936436&set=a.168775669129079"
          target="_blank"
          rel="noopener noreferrer"
        >
          Da click aqui pa ver a pedrito
        </a>
      </header>
    </div>
  );
}

export default App;
