import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, ArrowRight, Film, Sparkles, Command } from 'lucide-react';
import { Anime } from '../data/animeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  animeList: Anime[];
  onSelectAnime: (anime: Anime) => void;
}

const POPULAR_SEARCHES = ['Naruto', 'Kimetsu', 'Jujutsu', 'Frieren', 'Cyberpunk', 'MAPPA', 'Chainsaw Man', 'Solo Leveling'];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  animeList,
  onSelectAnime,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic across English, Japanese, Romaji, Alternative titles, Studios, and Characters
  const q = query.trim().toLowerCase();
  const results = q
    ? animeList.filter((anime) => {
        if (anime.title.toLowerCase().includes(q)) return true;
        if (anime.japaneseTitle.toLowerCase().includes(q)) return true;
        if (anime.romajiTitle.toLowerCase().includes(q)) return true;
        if (anime.alternativeTitles.some((alt) => alt.toLowerCase().includes(q))) return true;
        if (anime.studio.toLowerCase().includes(q)) return true;
        if (anime.genres.some((g) => g.toLowerCase().includes(q))) return true;
        if (anime.characters.some((c) => c.name.toLowerCase().includes(q) || c.japaneseName.toLowerCase().includes(q))) return true;
        return false;
      })
    : [];

  const handleSelect = (anime: Anime) => {
    onSelectAnime(anime);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0f1019] border border-white/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(244,63,94,0.15)] overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-rose-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anime by title, Japanese name (e.g. Kimetsu), character, studio..."
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline px-2 py-0.5 text-[11px] font-mono bg-white/10 rounded-md text-slate-400 border border-white/10">
              ESC
            </kbd>
          )}
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 no-scrollbar">
          {query.trim() === '' ? (
            /* Suggestions when empty */
            <div className="py-6 px-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Popular Searches</span>
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-slate-400">
                <p className="font-semibold text-slate-300 mb-1">
                  💡 Pro Search Tips:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Search in Romaji, e.g., <code className="text-rose-300 font-mono">kimetsu</code> finds Demon Slayer.</li>
                  <li>Search for studios like <code className="text-rose-300 font-mono">MAPPA</code>, <code className="text-rose-300 font-mono">ufotable</code>, or <code className="text-rose-300 font-mono">Madhouse</code>.</li>
                  <li>Search for characters like <code className="text-rose-300 font-mono">Gojo</code> or <code className="text-rose-300 font-mono">Luffy</code>.</li>
                </ul>
              </div>
            </div>
          ) : results.length > 0 ? (
            /* Match results */
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-400 px-2 mb-2">
                Found {results.length} results
              </p>
              {results.map((anime) => (
                <div
                  key={anime.id}
                  onClick={() => handleSelect(anime)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-rose-500/30 transition-all cursor-pointer"
                >
                  <img
                    src={anime.poster}
                    alt={anime.title}
                    className="w-12 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-japanese text-rose-400 truncate">
                      {anime.japaneseTitle}
                    </p>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-rose-200 transition-colors truncate">
                      {anime.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                      <span>{anime.year}</span>
                      <span>•</span>
                      <span>{anime.studio}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-amber-400" />
                        {anime.rating}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all mr-2 shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            /* No results empty state */
            <div className="py-12 text-center">
              <p className="text-slate-400 text-sm">
                No anime found matching &quot;{query}&quot;
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Try searching with another spelling or check out our explore section.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
