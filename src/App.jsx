// App.jsx
import React, { useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import MyWork from './components/mywork/MyWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const sectionRefs = {
    homeRef,
    aboutRef,
    servicesRef,
    workRef,
    contactRef
  };

  return (
    <>
      <Navbar refs={sectionRefs} />

      <div ref={homeRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={workRef}><MyWork /></div>
      <div ref={contactRef}><Contact /></div>

      <Footer />
    </>
  );
}

export default App;
