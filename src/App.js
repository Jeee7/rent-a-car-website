import logo from './logo.svg';
import './App.css';
import AppNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleComponent from './Components/MiddleComponent';
import HighlightImage from './Components/HighlightImage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
      <title>D Fast Rent Car</title>
        <meta name="description" content="Rental murah plus driver di tanggerang selatan" />
      </Helmet>
      <AppNavbar />
      <HighlightImage />
      <MiddleComponent />
    </div>
  );
}

export default App;
