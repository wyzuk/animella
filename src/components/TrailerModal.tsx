import React, { useEffect } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { Anime } from '../data/animeData';

interface TrailerModalProps {
  anime: Anime | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ anime, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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

  // Extract YouTube ID from trailerUrl
  let videoId = '';
  if (anime.trailerUrl) {
    const match = anime.trailerUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match) {
      videoId = match[1];
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-[#0f1019] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="min-w-0 pr-4">
            <h3 className="font-display font-bold text-base sm:text-lg text-white truncate">
              {anime.title} — Official Trailer
            </h3>
            <p className="font-japanese text-xs text-rose-400 truncate">
              {anime.japaneseTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          {videoId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={`${anime.title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <Play className="w-12 h-12 text-rose-500 mb-3" />
              <p className="text-white text-base font-semibold mb-2">
                Trailer available directly on YouTube
              </p>
              <a
                href={anime.trailerUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(anime.title)}+anime+trailer`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
