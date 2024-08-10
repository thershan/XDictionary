import React, { useState } from 'react';

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();

    if (!trimmedSearchTerm) {
      setResult("Word not found in the dictionary.");  // Show error message when no search term is entered
      return;
    }

    const foundWord = dictionary.find(item =>
      item.word.toLowerCase() === trimmedSearchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult(
        <div>
          <strong>Definition:</strong> {foundWord.meaning}
        </div>
      );
    } else {
      setResult("Word not found in the dictionary.");  // Show error message when word is not found
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Dictionary App</h1>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search for a word..." 
          style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleSearch} 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: '1px solid #ccc', marginLeft: '-1px' }}
        >
          Search
        </button>
      </div>
      <div style={{ fontSize: '18px', marginTop: '20px' }}>
        {result}
      </div>
    </div>
  );
}

export default App;
