import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ApiCall from './Components/ApiCall';
import NasaApiCall from './Components/NasaApi';

function App() {
  return (
    <div className="App">
      {/* <h1>Pokemon Api</h1> */}
      {/* <ApiCall /> */}
      <NasaApiCall />
    </div>
  );
}

export default App;
