import { useState, useEffect } from 'react';
import { Character } from './types/character';
import { CharacterCard } from './components/CharacterCard';
import { CharacterDialog } from './components/CharacterDialog';
import { fetchCharacters, fetchFromExternalApi } from './services/api';

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [characterCount, setCharacterCount] = useState<number>(20);

  const loadCharacters = async () => {
    try {
      const data = await fetchCharacters();
      setCharacters(data);
    } catch (error) {
      console.error('Error loading characters:', error);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  const handleFetchCharacters = async () => {
    setIsLoading(true);
    try {
      await fetchFromExternalApi(characterCount);
      await loadCharacters();
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="header flex justify-between items-center bg-gray-900 p-6 rounded-xl shadow-lg mb-8">
          <button
            onClick={() => window.history.back()}
            className="custom-button bg-gradient-to-r from-pink-400 to-purple-500 text-white py-2 px-6 rounded-lg font-medium transform transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            Home
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Rick And Morty Characters
          </h1>
          {/* <button
            onClick={handleFetchCharacters}
            disabled={isLoading}
            className="custom-button bg-gradient-to-r from-pink-400 to-purple-500 text-white py-2 px-6 rounded-lg font-medium transform transition-transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Updating..." : "Fetch Characters"}
          </button> */}
        </div>

        {/* Character Grid */}
        {characters.length === 0 ? (
          <div className="empty-state text-center py-20 bg-gray-800 rounded-xl shadow-md">
            <p className="text-gray-400 text-lg">
              No characters found. Click the button above to fetch them.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={setSelectedCharacter}
              />
            ))}
          </div>
        )}

        {/* Character Dialog */}
        {selectedCharacter && (
          <CharacterDialog
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </div>
    </div>
  );
}
