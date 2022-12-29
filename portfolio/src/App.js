import './css/App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Sidebar />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
