import React, { useEffect } from 'react';
import { X, Play, Bookmark, Star, Calendar, Clock, Film, Sparkles, Building, BookOpen, Share2, Users, Check } from 'lucide-react';
import { Anime } from '../data/animeData';

interface AnimeDetailModalProps {
  anime: Anime | null;
  onClose: () => void;
  onWatchTrailer: (anime: Anime) => void;
  onToggleWatchlist: (animeId: string) => void;
  isInWatchlist: (animeId: string) => boolean;
  onSelectRelated: (anime: Anime) => void;
  allAnime: Anime[];
}

export const AnimeDetailModal: React.FC<AnimeDetailModalProps> = ({
  anime,
  onClose,
  onWatchTrailer,
  onToggleWatchlist,
  isInWatchlist,
  onSelectRelated,
  allAnime,
}) => {
  const [copied, setCopied] = React.useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (anime) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [anime]);

  if (!anime) return null;

  const bookmarked = isInWatchlist(anime.id);

  // Find related anime based on genre overlap
  const relatedAnime = allAnime
    .filter((other) => other.id !== anime.id)
    .map((other) => {
      const matchCount = other.genres.filter((g) => anime.genres.includes(g)).length;
      return { anime: other, score: matchCount };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => item.anime);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Background Dismiss Area */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d0e17] border border-white/15 rounded-3xl sm:rounded-4xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(225,29,72,0.15)] no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white hover:text-rose-400 transition-colors shadow-lg"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Backdrop Artwork Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={anime.banner || anime.poster}
            alt={anime.title}
            className="w-full h-full object-cover object-center filter brightness-75 contrast-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e17] via-[#0d0e17]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e17]/80 to-transparent" />

          {/* Floating Japanese Watermark */}
          <div className="absolute right-4 bottom-4 font-japanese text-3xl sm:text-5xl font-black text-white/10 select-none pointer-events-none">
            {anime.japaneseTitle}
          </div>
        </div>

        {/* Modal Body */}
        <div className="relative px-6 sm:px-10 pb-10 -mt-24 sm:-mt-32">
          {/* Poster and Primary Meta Row */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* High-res Poster */}
            <div className="relative w-36 sm:w-48 aspect-[3/4.2] rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 shadow-2xl border-2 border-white/20 bg-[#141522]">
              <img
                src={anime.poster}
                alt={anime.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Primary Badges */}
            <div className="flex-1 flex flex-col pt-2 sm:pt-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-japanese text-xs sm:text-sm font-semibold text-rose-400 tracking-wider">
                  {anime.japaneseTitle}
                </span>
                {anime.romajiTitle && anime.romajiTitle !== anime.title && (
                  <span className="text-xs text-slate-400 font-mono">
                    ({anime.romajiTitle})
                  </span>
                )}
              </div>

              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
                {anime.title}
              </h2>

              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{anime.rating} / 10</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-slate-200">
                  {anime.year}
                </div>

                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-slate-200">
                  {anime.status}
                </div>

                <div className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-xs font-semibold text-rose-300">
                  {anime.episodes} Episodes ({anime.duration})
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <button
                  onClick={() => onWatchTrailer(anime)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs shadow-lg shadow-rose-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Trailer</span>
                </button>

                <button
                  onClick={() => onToggleWatchlist(anime.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                    bookmarked
                      ? 'bg-rose-500/20 text-rose-400 border-rose-500'
                      : 'bg-white/10 hover:bg-white/15 text-slate-200 border-white/15'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                  <span>{bookmarked ? 'Saved to Watchlist' : 'Add to Watchlist'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white text-xs transition-colors"
                  title="Share Anime Link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                <Building className="w-3 h-3 text-rose-400" /> Studio
              </span>
              <span className="text-xs font-semibold text-white">{anime.studio}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3 h-3 text-rose-400" /> Source
              </span>
              <span className="text-xs font-semibold text-white">{anime.source}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                <Calendar className="w-3 h-3 text-rose-400" /> Season
              </span>
              <span className="text-xs font-semibold text-white">{anime.season}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                <Clock className="w-3 h-3 text-rose-400" /> Episodes
              </span>
              <span className="text-xs font-semibold text-white">
                {anime.episodes} × {anime.duration}
              </span>
            </div>
          </div>

          {/* Synopsis */}
          <div className="mb-8">
            <h3 className="font-display font-bold text-base text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Synopsis & Story</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {anime.description}
            </p>
          </div>

          {/* Genres Strip */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Genres & Themes
            </h4>
            <div className="flex flex-wrap gap-2">
              {anime.genres.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Characters Section */}
          {anime.characters && anime.characters.length > 0 && (
            <div className="mb-8">
              <h3 className="font-display font-bold text-base text-white mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-rose-400" />
                <span>Featured Characters & Cast</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {anime.characters.map((char) => (
                  <div
                    key={char.name}
                    className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.06]"
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">{char.name}</p>
                      <p className="text-[10px] text-rose-400 font-japanese truncate">
                        {char.japaneseName}
                      </p>
                      {char.voiceActor?.name && (
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                          CV: {char.voiceActor.name}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Anime Recommendations */}
          {relatedAnime.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-base text-white mb-3">
                You Might Also Like
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {relatedAnime.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2 cursor-pointer hover:border-rose-500/40 transition-all hover:-translate-y-1"
                  >
                    <img
                      src={rel.poster}
                      alt={rel.title}
                      className="w-full aspect-[3/4] object-cover rounded-xl mb-2"
                    />
                    <p className="text-xs font-bold text-white group-hover:text-rose-300 transition-colors truncate">
                      {rel.title}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                      <span>{rel.year}</span>
                      <span className="text-amber-400 font-bold">★ {rel.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
