
import './App.css';
import Hero from '../src/Sections/Hero';
import About from '../src/Sections/About';
import Projects from '../src/Sections/Projects';
import Navbar from './Components/Navbar';
import Myskills from './Sections/Myskills';
// import Myskills from './Sections/Myskills';
import Contact from './Sections/Contact';
import Blog from './Sections/Blog';
import Footer from './Sections/Footer';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <About/>
      <Projects />
      <Myskills />
      <Contact />
      <Blog />
      <Footer/>
     
    </div>
  );
}

export default App;
