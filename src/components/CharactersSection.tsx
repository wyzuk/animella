import React from 'react';
import { Users, Mic, Sparkles, ExternalLink } from 'lucide-react';
import { Anime, Character } from '../data/animeData';

interface CharactersSectionProps {
  animeList: Anime[];
  onSelectAnime: (anime: Anime) => void;
}

export const CharactersSection: React.FC<CharactersSectionProps> = ({
  animeList,
  onSelectAnime,
}) => {
  // Aggregate iconic main characters across the dataset
  const showcaseCharacters: { character: Character; anime: Anime }[] = [];

  // Pick leading characters from top popular series
  for (const anime of animeList) {
    if (anime.characters && anime.characters.length > 0) {
      const mainChar = anime.characters[0];
      showcaseCharacters.push({ character: mainChar, anime });
    }
  }

  // Display top 12 iconic characters
  const displayed = showcaseCharacters.slice(0, 12);

  return (
    <section id="characters" className="w-full py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <Users className="w-4 h-4 text-rose-500" />
            <span>Character Showcase</span>
            <span className="font-japanese text-[11px] text-rose-300/80">【主要登場人物】</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Iconic Anime Legends
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Meet unforgettable protagonists, anti-heroes, and their legendary Japanese voice cast.
          </p>
        </div>
      </div>

      {/* Grid of Character Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {displayed.map(({ character, anime }) => (
          <div
            key={`${anime.id}-${character.name}`}
            onClick={() => onSelectAnime(anime)}
            className="group relative flex items-center gap-4 p-3.5 rounded-3xl bg-[#0f1019]/80 border border-white/[0.08] hover:border-rose-500/40 hover:bg-[#141524] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(225,29,72,0.25)] hover:-translate-y-1.5 backdrop-blur-md"
          >
            {/* Circular / Curved Character Avatar */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 group-hover:border-rose-400/80 transition-colors shadow-md">
              <img
                src={character.image}
                alt={character.name}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Character Info */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Role badge */}
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-300">
                  {character.role}
                </span>
                <span className="font-japanese text-[10px] text-slate-400 truncate">
                  {character.japaneseName}
                </span>
              </div>

              {/* Name */}
              <h4 className="font-display font-bold text-sm text-white group-hover:text-rose-200 transition-colors truncate">
                {character.name}
              </h4>

              {/* Anime Title */}
              <p className="text-xs text-slate-400 truncate mt-0.5 font-medium">
                {anime.title}
              </p>

              {/* Voice Actor (CV) info */}
              {character.voiceActor?.name && (
                <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1.5 pt-1 border-t border-white/[0.06]">
                  <Mic className="w-3 h-3 text-rose-400 shrink-0" />
                  <span className="text-slate-400 truncate">CV:</span>
                  <span className="text-slate-300 font-medium truncate">
                    {character.voiceActor.name}
                  </span>
                </div>
              )}
            </div>

            {/* Subtle Arrow Icon */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity pr-1 text-rose-400">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
