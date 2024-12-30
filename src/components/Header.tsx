import { useState, useEffect } from 'react';
import { Character } from '../types/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = async () => {
    setIsLoading(true);
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const onFetch = () => {
    fetchCharacters();
  };

  const onBack = () => {
    // Implement your back navigation logic here
    console.log("Going back home");
  };


  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center mb-8 bg-gradient-to-r from-[#ff4081] to-[#7c4dff] p-6 rounded-xl shadow-lg">
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all duration-300 backdrop-blur-sm"
        >
          Home
        </button>
        <h1 className="text-3xl font-bold text-white m-0">Rick and Morty Characters</h1>
        <button
          onClick={onFetch}
          disabled={isLoading}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Update'}
        </button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character: Character) => (
          <div key={character.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-2">{character.name}</h2>
            <p className="text-gray-700">{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

