import logo from './logo.svg';
import './App.css';
import AppNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleComponent from './Components/MiddleComponent';
import HighlightImage from './Components/HighlightImage';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <HighlightImage />
      <MiddleComponent />
    </div>
  );
}

export default App;
