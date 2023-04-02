import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import Error from './pages/Error';
import Card from './components/Card';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App relative ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/gallery" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
