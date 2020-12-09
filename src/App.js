import './App.css';
import Weather from "./Weather";
import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className="App">
      <div className="container">
      <MediaQuery maxDeviceWidth={500}>
        <div className="mobile">
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
        </MediaQuery>
        <MediaQuery minDeviceWidth={501} maxDeviceWidth={1025}>
        <div className="tablet">
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
        </MediaQuery>
        <MediaQuery minDeviceWidth={1026}>
          <div className="pc">
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
        </MediaQuery>
      </div>
    </div>
  );
}

export default App;
