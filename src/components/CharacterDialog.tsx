import { Character } from '../types/character';
import { useEffect } from 'react';

interface Props {
  character: Character;
  onClose: () => void;
}

export const CharacterDialog = ({ character, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center p-8 z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full h-[90vh] max-w-[1000px] bg-gray-900 rounded-2xl overflow-y-auto relative animate-slideUp"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-[55vh] min-h-[400px]">
          <img 
            src={character.image} 
            alt={character.name}
            className="w-full h-full object-cover object-[70%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40 p-8 flex flex-col justify-end">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              ×
            </button>
            <div className="max-w-[700px] animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{character.name}</h1>
              <div className="flex items-center gap-4 text-gray-300">
                <span>{character.species}</span>
                <span>•</span>
                <span>Status: {character.status}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-10">
          <div className="space-y-6 animate-fadeIn delay-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="text-gray-400 text-sm uppercase tracking-wider">Species</span>
                <p className="text-white font-medium">{character.species}</p>
              </div>
              <div className="space-y-2">
                <span className="text-gray-400 text-sm uppercase tracking-wider">Gender</span>
                <p className="text-white font-medium">{character.gender}</p>
              </div>
              <div className="space-y-2">
                <span className="text-gray-400 text-sm uppercase tracking-wider">Status</span>
                <p className="text-white font-medium">{character.status}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-gray-400 text-sm uppercase tracking-wider">Origin</span>
              <p className="text-white font-medium">{character.origin.name}</p>
            </div>

            <div className="space-y-2">
              <span className="text-gray-400 text-sm uppercase tracking-wider">Last Known Location</span>
              <p className="text-white font-medium">{character.location.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};