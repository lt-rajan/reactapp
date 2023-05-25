import './App.css';
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/textform/*" element={<TextForm />} />
      <Route path="/about/*" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
