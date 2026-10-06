import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'animella_watchlist';

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
    } catch (e) {
      console.error('Failed to save watchlist:', e);
    }
  }, [watchlist]);

  const toggleWatchlist = (animeId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setWatchlist((prev) => {
      const exists = prev.includes(animeId);
      if (!exists) {
        // Trigger small delightful confetti
        try {
          confetti({
            particleCount: 35,
            spread: 55,
            origin: { y: 0.8 },
            colors: ['#e11d48', '#fb7185', '#a855f7', '#06b6d4']
          });
        } catch {
          // ignore
        }
        return [...prev, animeId];
      } else {
        return prev.filter((id) => id !== animeId);
      }
    });
  };

  const isInWatchlist = (animeId: string) => watchlist.includes(animeId);

  const clearWatchlist = () => setWatchlist([]);

  return {
    watchlist,
    toggleWatchlist,
    isInWatchlist,
    clearWatchlist,
    count: watchlist.length
  };
}
