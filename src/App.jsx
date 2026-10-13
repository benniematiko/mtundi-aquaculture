import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      {/* Global Navbar – appears on every page */}
      <Navbar />

      {/* Main content area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes:
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          */}
        </Routes>
      </main>
    </>
  );
}

export default App;