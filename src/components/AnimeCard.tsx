import React from 'react';
import { Star, Play, Bookmark, Film, Sparkles } from 'lucide-react';
import { Anime } from '../data/animeData';

interface AnimeCardProps {
  anime: Anime;
  rank?: number;
  onSelect: (anime: Anime) => void;
  onWatchTrailer?: (anime: Anime) => void;
  onToggleWatchlist?: (animeId: string) => void;
  isBookmarked?: boolean;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({
  anime,
  rank,
  onSelect,
  onWatchTrailer,
  onToggleWatchlist,
  isBookmarked = false,
}) => {
  return (
    <div
      onClick={() => onSelect(anime)}
      className="group relative flex flex-col rounded-3xl bg-[#0f1019]/80 border border-white/[0.08] hover:border-white/20 p-2.5 sm:p-3 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85),0_0_25px_-5px_rgba(225,29,72,0.2)] cursor-pointer overflow-hidden backdrop-blur-md"
    >
      {/* Top Media Container */}
      <div className="relative aspect-[3/4.2] w-full rounded-2xl overflow-hidden bg-[#161724]">
        {/* Anime Poster with Smooth Zoom on Hover */}
        <img
          src={anime.poster}
          alt={anime.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108 will-change-transform"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c14] via-[#0b0c14]/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Rank Badge if provided */}
        {rank !== undefined && (
          <div className="absolute top-2.5 left-2.5 flex items-center justify-center min-w-[28px] h-7 px-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white font-mono text-xs font-black shadow-md">
            <span className="text-rose-400 mr-0.5">#</span>
            {String(rank).padStart(2, '0')}
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              anime.status === 'Airing' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'
            }`}
          />
          <span className="text-slate-200">{anime.status}</span>
        </div>

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          {onWatchTrailer && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onWatchTrailer(anime);
              }}
              className="p-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/40 transform hover:scale-110 active:scale-95 transition-all"
              title="Watch Trailer"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </button>
          )}

          {onToggleWatchlist && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWatchlist(anime.id);
              }}
              className={`p-3 rounded-full backdrop-blur-md border transition-all transform hover:scale-110 active:scale-95 ${
                isBookmarked
                  ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/40'
                  : 'bg-black/60 hover:bg-black/80 text-white border-white/20'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Add to Bookmark'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Rating and Year Floating Bottom bar in image */}
        <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-amber-400 font-bold">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{anime.rating}</span>
          </div>

          <span className="px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 font-medium">
            {anime.year}
          </span>
        </div>
      </div>

      {/* Card Info Area */}
      <div className="flex flex-col flex-1 pt-3 pb-1 px-1">
        {/* Japanese Title */}
        <p className="font-japanese text-[11px] text-rose-400/90 font-medium truncate mb-0.5">
          {anime.japaneseTitle}
        </p>

        {/* English Title */}
        <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-rose-200 transition-colors line-clamp-1 leading-snug">
          {anime.title}
        </h3>

        {/* Meta Line: Studio & Episodes */}
        <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-white/[0.06] text-[11px] text-slate-400">
          <span className="truncate max-w-[120px] font-medium text-slate-300">
            {anime.studio}
          </span>
          <span className="shrink-0 text-slate-400 font-mono">
            {anime.episodes} eps
          </span>
        </div>

        {/* Genres Pill List */}
        <div className="flex flex-wrap gap-1 mt-2">
          {anime.genres.slice(0, 2).map((g) => (
            <span
              key={g}
              className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.05] text-slate-400 font-medium"
            >
              {g}
            </span>
          ))}
          {anime.genres.length > 2 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-md text-slate-500 font-mono">
              +{anime.genres.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
