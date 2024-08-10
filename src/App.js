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
    const foundWord = dictionary.find(item =>
      item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>XDictionary</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Enter a word"
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', fontSize: '16px' }}>Search</button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{result}</p>
    </div>
  );
}

export default App;
