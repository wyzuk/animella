import React, { useEffect } from 'react';
import { X, Bookmark, Trash2, ArrowRight, Star } from 'lucide-react';
import { Anime } from '../data/animeData';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlistIds: string[];
  allAnime: Anime[];
  onSelectAnime: (anime: Anime) => void;
  onRemove: (animeId: string) => void;
  onClear: () => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  watchlistIds,
  allAnime,
  onSelectAnime,
  onRemove,
  onClear,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const bookmarkedAnime = allAnime.filter((a) => watchlistIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0d0e17] border-l border-white/10 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400">
                <Bookmark className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  My Watchlist
                </h3>
                <p className="text-xs text-slate-400">
                  {bookmarkedAnime.length} {bookmarkedAnime.length === 1 ? 'title' : 'titles'} saved
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {bookmarkedAnime.length > 0 && (
                <button
                  onClick={onClear}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors text-xs flex items-center gap-1"
                  title="Clear all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
            {bookmarkedAnime.length > 0 ? (
              bookmarkedAnime.map((anime) => (
                <div
                  key={anime.id}
                  onClick={() => {
                    onSelectAnime(anime);
                    onClose();
                  }}
                  className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-rose-500/30 transition-all cursor-pointer"
                >
                  <img
                    src={anime.poster}
                    alt={anime.title}
                    className="w-12 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-japanese text-rose-400 truncate">
                      {anime.japaneseTitle}
                    </p>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate">
                      {anime.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                      <span className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-2.5 h-2.5 fill-amber-400" />
                        {anime.rating}
                      </span>
                      <span>•</span>
                      <span>{anime.episodes} eps</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(anime.id);
                    }}
                    className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-white/10 transition-colors"
                    title="Remove from watchlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-slate-500">
                  <Bookmark className="w-7 h-7" />
                </div>
                <p className="text-white text-sm font-semibold mb-1">
                  Your watchlist is empty
                </p>
                <p className="text-slate-400 text-xs max-w-xs">
                  Click the bookmark icon on any anime card or details page to add it to your personal collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
