import React from 'react';
import { FontGenerator } from './components/FontGenerator';

function App() {
  return (
    <div className="min-h-screen bg-pink-100">
      <header className="bg-white border-b border-pink-200">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-pink-600">Barbie Font Generator</h1>
        </div>
      </header>
      <FontGenerator />
    </div>
  );
}

export default App;