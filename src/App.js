import './Components/Navbar'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div >
      <Navbar/>
      <Home/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>


      
    </div>
  );
}

export default App;
