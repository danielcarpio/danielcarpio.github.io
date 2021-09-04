import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTo from './ScrollTop';

import './../styles/App.css';


function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </main>
      <ScrollTo />
      <Footer />
    </div>
  );
}

export default App;
