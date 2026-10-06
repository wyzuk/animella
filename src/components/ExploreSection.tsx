import React, { useState, useMemo } from 'react';
import { Compass, Filter, ArrowUpDown, Search, RotateCcw, Sparkles } from 'lucide-react';
import { Anime } from '../data/animeData';
import { AnimeCard } from './AnimeCard';

interface ExploreSectionProps {
  animeList: Anime[];
  onSelectAnime: (anime: Anime) => void;
  onWatchTrailer: (anime: Anime) => void;
  onToggleWatchlist: (animeId: string) => void;
  isInWatchlist: (animeId: string) => boolean;
}

const GENRES = [
  'All',
  'Action',
  'Adventure',
  'Romance',
  'Comedy',
  'Fantasy',
  'Horror',
  'Sci-Fi',
  'Mystery',
  'Slice of Life',
  'Drama',
  'Supernatural',
  'Psychological',
];

const SORT_OPTIONS = [
  { label: 'Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Alphabetical', value: 'alphabetical' },
];

export const ExploreSection: React.FC<ExploreSectionProps> = ({
  animeList,
  onSelectAnime,
  onWatchTrailer,
  onToggleWatchlist,
  isInWatchlist,
}) => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Airing' | 'Completed'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamic filtering & sorting
  const filteredAnime = useMemo(() => {
    return animeList
      .filter((item) => {
        // Genre match
        if (selectedGenre !== 'All' && !item.genres.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())) {
          return false;
        }
        // Status match
        if (statusFilter !== 'All' && item.status.toLowerCase() !== statusFilter.toLowerCase()) {
          return false;
        }
        // Query match
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchJp = item.japaneseTitle.toLowerCase().includes(q);
          const matchRomaji = item.romajiTitle.toLowerCase().includes(q);
          const matchAlt = item.alternativeTitles.some((alt) => alt.toLowerCase().includes(q));
          const matchStudio = item.studio.toLowerCase().includes(q);
          if (!matchTitle && !matchJp && !matchRomaji && !matchAlt && !matchStudio) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        if (sortBy === 'newest') {
          return b.year - a.year;
        }
        if (sortBy === 'alphabetical') {
          return a.title.localeCompare(b.title);
        }
        // Default popular by rank
        return a.rank - b.rank;
      });
  }, [animeList, selectedGenre, sortBy, statusFilter, searchQuery]);

  const resetFilters = () => {
    setSelectedGenre('All');
    setSortBy('popular');
    setStatusFilter('All');
    setSearchQuery('');
  };

  return (
    <section id="explore" className="w-full py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <Compass className="w-4 h-4 text-rose-500" />
            <span>Discover & Browse</span>
            <span className="font-japanese text-[11px] text-rose-300/80">【作品探索】</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Explore 50 Legendary Anime
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Filter by genre, status, or sort by rating and popularity.
          </p>
        </div>

        {/* Counter and Reset */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
            Showing <span className="text-rose-400 font-bold">{filteredAnime.length}</span> of {animeList.length}
          </div>
          {(selectedGenre !== 'All' || statusFilter !== 'All' || searchQuery !== '' || sortBy !== 'popular') && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs border border-rose-500/20 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Control Bar: In-section search + Status + Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-[#0e1019]/70 border border-white/[0.08] p-3 rounded-2xl backdrop-blur-md">
        {/* Quick text filter */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter within results (e.g. Naruto, MAPPA)..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/50"
          />
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
          {(['All', 'Completed', 'Airing'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                statusFilter === st
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-slate-400 hidden sm:inline" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-rose-500/50 cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#121320] text-white">
                Sort: {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Genre Pills Strip */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 pt-1">
        {GENRES.map((genre) => {
          const isSelected = selectedGenre === genre;
          return (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? 'bg-rose-500 text-white border-rose-400 shadow-[0_0_18px_-3px_rgba(244,63,94,0.5)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 hover:border-white/20'
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>

      {/* Grid of Anime Cards */}
      {filteredAnime.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onSelect={onSelectAnime}
              onWatchTrailer={onWatchTrailer}
              onToggleWatchlist={onToggleWatchlist}
              isBookmarked={isInWatchlist(anime.id)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-3xl bg-[#0f1019]/40 border border-white/10 my-8">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
            <Filter className="w-7 h-7 text-slate-500" />
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-1">
            No anime found matching your criteria
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mb-6">
            Try adjusting your genre filters, search query, or clear your filters to view all 50 anime.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs transition-colors shadow-lg shadow-rose-500/20"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
