import { useState } from 'react';
import './App.css';

import Loadingscreen from './Components/Loadingscreen';
import { Navbar } from './Components/Navbar';
import About from './Components/Section/About';
import { Contact } from './Components/Section/Contact';

import Home from './Components/Section/Home';
import Projects from './Components/Section/Projects';
import "./index.css";
function App() {
  const [isLoaded,setLoaded]=useState(false);
  return (
   <>
     {!isLoaded && <Loadingscreen onComplete={() => setLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black`}>
        <Navbar />
        <Home />
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>

  );
}

export default App;
