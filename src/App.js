import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Background decorations */}
      <div className="bg-decoration">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Intro Section */}
          <section id="intro">
            <Intro />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

