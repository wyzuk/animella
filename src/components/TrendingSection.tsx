import React, { useRef } from 'react';
import { Flame, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Anime } from '../data/animeData';
import { AnimeCard } from './AnimeCard';

interface TrendingSectionProps {
  animeList: Anime[];
  onSelectAnime: (anime: Anime) => void;
  onWatchTrailer: (anime: Anime) => void;
  onToggleWatchlist: (animeId: string) => void;
  isInWatchlist: (animeId: string) => boolean;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  animeList,
  onSelectAnime,
  onWatchTrailer,
  onToggleWatchlist,
  isInWatchlist,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Take top 12 trending
  const trendingItems = animeList.slice(0, 12);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="trending" className="w-full py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
            <span>Trending Worldwide</span>
            <span className="font-japanese text-[11px] text-rose-300/80">【急上昇トレンド】</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Trending Anime
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            The most watched, talked about, and critically acclaimed series across the globe right now.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all transform active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all transform active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-6 pt-2 scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {trendingItems.map((anime, index) => (
          <div
            key={anime.id}
            className="w-[200px] sm:w-[230px] lg:w-[250px] shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          >
            <AnimeCard
              anime={anime}
              rank={index + 1}
              onSelect={onSelectAnime}
              onWatchTrailer={onWatchTrailer}
              onToggleWatchlist={onToggleWatchlist}
              isBookmarked={isInWatchlist(anime.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
