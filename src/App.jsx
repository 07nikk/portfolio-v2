import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreativeCoding from './pages/Projects';



function App() {
  return (
    <div>
      <div className="App-container">
      {/* <MySketch /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<CreativeCoding />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;



