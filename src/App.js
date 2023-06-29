import logo from './logo.svg';
import './App.css';
import './App.scss'
import Contact from './Content/Contact/Contact';
import Nevbar from './Content/Nevbar/Nevbar';
import Home from './Content/Home/Home';
import Features from './Content/Features/Features';
import About from './Content/About/About';
import Project from './Content/Projects/Project';
import Footer from './Content/Footer/Footer';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Nevbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
