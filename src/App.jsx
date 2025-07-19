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

  return (
    <>
      <Navbar
        refs={{ homeRef, aboutRef, servicesRef, workRef, contactRef }}
      />

      {/* Pass the correct prop names */}
      <Hero refProp={homeRef} contactRef={contactRef} />
      <About refProp={aboutRef} />
      <Services refProp={servicesRef} />
      <MyWork refProp={workRef} />
      <Contact refProp={contactRef} />
      <Footer contactRef={contactRef} />
    </>
  );
}

export default App;
