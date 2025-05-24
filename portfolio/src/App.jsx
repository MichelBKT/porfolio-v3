import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMemoji from './components/FloatingMemoji';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-galaxy-dark min-h-screen">
        <Navbar />
        <FloatingMemoji />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
