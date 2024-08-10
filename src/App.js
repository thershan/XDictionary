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
      setResult("");  // Ensure the result is cleared if no search term is entered
      return;
    }

    const foundWord = dictionary.find(item =>
      item.word.toLowerCase() === trimmedSearchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult(foundWord.meaning);  // Display the meaning directly
    } else {
      setResult("Word not found in the dictionary.");  // Display exact message
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input 
        type="text" 
        placeholder="Search for a word..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <div className="result">
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
