import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useContext } from 'react';
// import { DarkModeContext } from './components/DarkModeContext/DarkModeContext';
import { DarkModeProvider } from './components/DarkModeProvider/DarkModeProvider';
import Home from './pages/Home/Home';
import PageLayout from './components/PageLayout/PageLayout';
import ToggleButton from './components/ToggleButton/ToggleButton';

// const ToggleButton: React.FC = () => {
//   const { toggleDarkMode } = useContext(DarkModeContext);

//   return (
//     <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
//   );
// };

function App() {
  return (
    <div>
  
      <Router>
      <DarkModeProvider>
      <ToggleButton />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/projects" element={<h1>Projects</h1>} /> */}
          </Routes>
        </PageLayout>
        </DarkModeProvider>

      </Router>
    </div>
  );
}

export default App;
