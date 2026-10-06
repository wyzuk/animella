import React, { useState, useEffect, useRef } from 'react';
import { Play, Info, Star, ChevronLeft, ChevronRight, Bookmark, Sparkles, Film } from 'lucide-react';
import { Anime } from '../data/animeData';

interface HeroSectionProps {
  featuredAnime: Anime[];
  onSelectAnime: (anime: Anime) => void;
  onWatchTrailer: (anime: Anime) => void;
  onToggleWatchlist: (animeId: string) => void;
  isInWatchlist: (animeId: string) => boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredAnime,
  onSelectAnime,
  onWatchTrailer,
  onToggleWatchlist,
  isInWatchlist,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const current = featuredAnime[currentIndex] || featuredAnime[0];

  // Auto rotate every 8 seconds if not hovered
  useEffect(() => {
    if (isHovered || featuredAnime.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredAnime.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isHovered, featuredAnime.length]);

  // Subtle Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredAnime.length) % featuredAnime.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredAnime.length);
  };

  if (!current) return null;

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-end pt-24 pb-14 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#07070a]"
    >
      {/* Background Image Container with Smooth Parallax & Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {featuredAnime.map((anime, idx) => (
          <div
            key={anime.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={anime.banner || anime.poster}
              alt={anime.title}
              className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] transition-transform duration-700 ease-out will-change-transform scale-105"
              style={{
                transform: `scale(1.08) translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
            />
          </div>
        ))}

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/65 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-[#07070a]/75 to-transparent z-10 sm:w-3/4" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#07070a]/80 to-transparent z-10" />

        {/* Japanese Decorative Kanji Watermark (Subtle Editorial Detail) */}
        <div className="absolute right-6 top-28 select-none pointer-events-none opacity-[0.06] font-japanese font-black text-8xl lg:text-[14rem] text-white z-10 leading-none writing-vertical-jp">
          アニメラ
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col justify-end gap-6">
        {/* Japanese editorial badge & status */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>FEATURED SPOTLIGHT</span>
            <span className="font-japanese text-[11px] text-rose-200/80">【注目作】</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{current.rating}</span>
            <span className="text-slate-400 font-normal">/ 10</span>
          </div>

          <span className="text-slate-400 text-xs font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
            {current.year}
          </span>

          <span className="text-slate-400 text-xs font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
            {current.studio}
          </span>
        </div>

        {/* Title Area */}
        <div className="space-y-1.5 max-w-3xl">
          <p className="font-japanese text-sm sm:text-base font-semibold tracking-wider text-rose-400/90 drop-shadow-md">
            {current.japaneseTitle}
          </p>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] drop-shadow-xl">
            {current.title}
          </h1>
        </div>

        {/* Genres Pill List */}
        <div className="flex flex-wrap gap-2">
          {current.genres.slice(0, 4).map((g) => (
            <span
              key={g}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 backdrop-blur-sm transition-colors"
            >
              {g}
            </span>
          ))}
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 backdrop-blur-sm">
            {current.episodes} Episodes
          </span>
        </div>

        {/* Short Synopsis Description */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl line-clamp-2 sm:line-clamp-3 leading-relaxed drop-shadow">
          {current.description}
        </p>

        {/* Buttons Action Bar */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          {/* Watch Trailer */}
          <button
            onClick={() => onWatchTrailer(current)}
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold text-sm shadow-[0_0_25px_-5px_rgba(244,63,94,0.5)] hover:shadow-[0_0_35px_-2px_rgba(244,63,94,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch Trailer</span>
          </button>

          {/* View Details */}
          <button
            onClick={() => onSelectAnime(current)}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Info className="w-4 h-4 text-slate-300" />
            <span>View Details</span>
          </button>

          {/* Watchlist Toggle */}
          <button
            onClick={() => onToggleWatchlist(current.id)}
            className={`p-3.5 rounded-full border backdrop-blur-md transition-all ${
              isInWatchlist(current.id)
                ? 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_15px_-3px_rgba(244,63,94,0.5)]'
                : 'bg-white/10 hover:bg-white/20 border-white/15 text-slate-300 hover:text-white'
            }`}
            title={isInWatchlist(current.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
          >
            <Bookmark className={`w-4 h-4 ${isInWatchlist(current.id) ? 'fill-current' : ''}`} />
          </button>

          {/* Prev / Next controls */}
          <div className="hidden sm:flex items-center gap-1.5 ml-auto bg-black/40 border border-white/10 rounded-full p-1 backdrop-blur-md">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous anime"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium px-2 text-slate-400">
              {String(currentIndex + 1).padStart(2, '0')} / {String(featuredAnime.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Next anime"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector Strip for Featured Carousel */}
        <div className="w-full pt-4 border-t border-white/10 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-3">
            {featuredAnime.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl transition-all duration-300 flex-shrink-0 text-left border ${
                    isActive
                      ? 'bg-white/15 border-rose-500/60 shadow-[0_0_20px_-5px_rgba(244,63,94,0.4)]'
                      : 'bg-black/30 hover:bg-white/10 border-white/5 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-8 h-11 object-cover rounded-xl"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white truncate max-w-[120px]">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      {item.rating}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
