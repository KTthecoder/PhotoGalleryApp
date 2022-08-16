import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './navigation/Navbar';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Navigation/>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
