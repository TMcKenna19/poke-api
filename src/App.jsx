import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ApiCall from './Components/ApiCall';
import EarthApi from './Components/EarthApi';
import NasaApiCall from './Components/NasaApi';

function App() {
  return (
    <div className="App">
      <h1>Api Demo</h1>
      {/* <ApiCall /> */}
      {/* <NasaApiCall /> */}
      <EarthApi />
    </div>
  );
}

export default App;
