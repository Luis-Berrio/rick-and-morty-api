import { Character } from '../types/character';
import { useState } from 'react';

interface Props {
  character: Character;
  onClick: (character: Character) => void;
}

export const CharacterCard = ({ character, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        w-[300px] h-[400px] perspective-1000
        transform transition-all duration-500
        ${isHovered ? 'translate-y-[-8px] shadow-2xl' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(character)}
    >
      <div className="
        relative w-full h-full cursor-pointer rounded-[20px]
        bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a]
        overflow-hidden shadow-md
      ">
        <div className="relative w-full h-full flex flex-col">
          <div className="
            relative h-[70%] overflow-hidden
            bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]
          ">
            <img
              src={character.image}
              alt={character.name}
              className={`
                w-full h-full object-cover object-top
                transition-transform duration-500 ease-out
                ${isHovered ? 'scale-110' : ''}
              `}
              loading="lazy"
            />
            <div className={`
              absolute top-3 right-3 
              bg-purple-500/90 backdrop-blur-sm
              px-3 py-2 rounded-xl shadow-md
              transform transition-transform duration-300
              ${isHovered ? '-translate-x-1' : ''}
            `}>
              <span className="text-white font-semibold text-sm">
                {character.status}
              </span>
            </div>
          </div>

          <div className="
            absolute bottom-0 left-0 right-0 p-5
            bg-[#222222]/85 backdrop-blur-md
            border-t border-white/10 text-center
            transition-all duration-300
            rounded-b-[20px]
          ">
            <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
            <div className="flex justify-center items-center gap-2 text-sm text-white/70">
              <span>{character.species}</span>
              <span className="text-white/40">•</span>
              <span>{character.gender}</span>
            </div>
          </div>

          <div className={`
            absolute bottom-0 left-0 right-0 p-5
            bg-black/95 text-white
            transform transition-transform duration-300 ease-out
            rounded-b-[20px]
            ${isHovered ? 'translate-y-0' : 'translate-y-full'}
          `}>
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
              <div>
                <span className="text-white/60 text-xs uppercase tracking-wider">Origin</span>
                <p className="text-sm font-medium">{character.origin.name}</p>
              </div>
              <div>
                <span className="text-white/60 text-xs uppercase tracking-wider">Location</span>
                <p className="text-sm font-medium">{character.location.name}</p>
              </div>
            </div>
            <button className="
              w-full flex items-center justify-center gap-2
              text-purple-400 font-medium
              transition-colors hover:text-purple-300
            ">
              View Details
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};