import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
    <Weather defaultCity="Transylvania" />
      </header>
      <footer>
          {" "}
          <a
            href="https://github.com/acapasso90/react-weatherapp"
            target="_blank"
            rel="noreferrer"
            className="githubLink"
          >
            {" "}
            Open-source code
          </a>{" "}
          by  <a href="https://www.amandacapasso.com" target="_blank"
          rel="noreferrer" className="businessLink">Amanda Capasso </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
