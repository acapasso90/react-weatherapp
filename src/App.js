import './App.css';
import Weather from "./Weather";
import Footer from "./Footer.js"
import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className="App">
      <div className="container">
      <MediaQuery maxDeviceWidth={500}>
        <div className="mobile">
    <Weather defaultCity="Transylvania" />
  <Footer />
        </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={501} maxDeviceWidth={1025}>
        <div className="tablet">
    <Weather defaultCity="Transylvania" />
      <Footer />
        </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1026}>
          <div className="pc">
    <Weather defaultCity="Transylvania" />
      <Footer />
        </div>
        </MediaQuery>
      </div>
    </div>
  );
}

export default App;
