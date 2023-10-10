// @ts-check

import React, { useState } from 'react';
import './App.css';
import Header from './component/header';
import Projects from './component/projects';
import Footer from './component/footer';
import Resume from './component/resume';
import Contact from './component/contact';
import AboutMe from './component/aboutme';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');
  const navigationOptions = ['About Me', 'Portfolio', 'Resume', 'Contact'];

  return (
    <div className="App">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} navigationOptions={navigationOptions}/>
   
      <main>
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Projects />}
        {currentSection === 'Resume' && <Resume />}
        {currentSection === 'Contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
