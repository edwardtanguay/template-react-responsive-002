import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Info from './pages/Info';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/info" element={<Info />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-white mt-auto border-t">
            <div className="container mx-auto p-4 text-center text-gray-500 text-sm">
                © 2024 React Router SPA. All rights reserved.
            </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
