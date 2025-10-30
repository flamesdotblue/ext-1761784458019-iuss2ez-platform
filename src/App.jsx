import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeedPreview from './components/FeedPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-indigo-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeedPreview />
      </main>
    </div>
  );
}

export default App;
