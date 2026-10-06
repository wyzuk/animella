import React, { useState } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { Anime } from '../data/animeData';
import { AnimeCard } from './AnimeCard';

interface SeasonalSectionProps {
  animeList: Anime[];
  onSelectAnime: (anime: Anime) => void;
  onWatchTrailer: (anime: Anime) => void;
  onToggleWatchlist: (animeId: string) => void;
  isInWatchlist: (animeId: string) => boolean;
}

const SEASONS = ['Fall', 'Winter', 'Spring', 'Summer'] as const;

export const SeasonalSection: React.FC<SeasonalSectionProps> = ({
  animeList,
  onSelectAnime,
  onWatchTrailer,
  onToggleWatchlist,
  isInWatchlist,
}) => {
  const [activeSeason, setActiveSeason] = useState<typeof SEASONS[number]>('Fall');

  // Filter anime by season period or season string
  const seasonalAnime = animeList.filter((item) => {
    return (
      item.seasonPeriod?.toLowerCase() === activeSeason.toLowerCase() ||
      item.season?.toLowerCase().includes(activeSeason.toLowerCase())
    );
  });

  return (
    <section id="seasonal" className="w-full py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <Calendar className="w-4 h-4 text-rose-500" />
            <span>Seasonal Spotlight</span>
            <span className="font-japanese text-[11px] text-rose-300/80">【季節別アニメ】</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Seasonal Releases
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Browse anime classified across broadcast seasons.
          </p>
        </div>

        {/* Season Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#0f1019] border border-white/10 self-start sm:self-auto">
          {SEASONS.map((season) => {
            const isActive = activeSeason === season;
            return (
              <button
                key={season}
                onClick={() => setActiveSeason(season)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {season}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Seasonal Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {seasonalAnime.slice(0, 10).map((anime) => (
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
    </section>
  );
};
