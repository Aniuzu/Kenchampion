import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<h1 className="text-center mt-8">Welcome to DeadMan!</h1>} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
