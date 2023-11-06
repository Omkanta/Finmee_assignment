
import './App.css';
import { Footer } from './Components/Footer';
import { Mainpage } from './Components/Mainpage';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainpage/>
      <Footer/>
    </div>
  );
}

export default App;
