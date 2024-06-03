import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useContext } from 'react';
// import { DarkModeContext } from './components/DarkModeContext/DarkModeContext';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import PageLayout from './components/PageLayout/PageLayout';
import { DarkModeProvider } from './components/DarkModeProvider/DarkModeProvider';

function App() {
  return (
    <div>
      <Router>
        <DarkModeProvider>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<h1>Contact</h1>} /> */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </PageLayout>
        </DarkModeProvider>
      </Router>
    </div>
  );
}

export default App;
