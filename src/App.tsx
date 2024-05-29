import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/projects" element={<h1>Projects</h1>} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
