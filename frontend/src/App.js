import { BrowserRouter, Routes, useLocation, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <main>
        <Navigation/>
      </main>
    </BrowserRouter>
  );
}

export default App;
