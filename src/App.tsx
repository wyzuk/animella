import React, { useState } from 'react';
import { animeList, Anime } from './data/animeData';
import { useWatchlist } from './hooks/useWatchlist';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrendingSection } from './components/TrendingSection';
import { ExploreSection } from './components/ExploreSection';
import { SeasonalSection } from './components/SeasonalSection';
import { CharactersSection } from './components/CharactersSection';
import { AnimeDetailModal } from './components/AnimeDetailModal';
import { TrailerModal } from './components/TrailerModal';
import { SearchModal } from './components/SearchModal';
import { WatchlistDrawer } from './components/WatchlistDrawer';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { watchlist, toggleWatchlist, isInWatchlist, clearWatchlist, count } = useWatchlist();

  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [trailerAnime, setTrailerAnime] = useState<Anime | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);

  // Filter featured anime (10 titles)
  const featuredAnime = animeList.filter((a) => a.featured);

  return (
    <div className="relative min-h-screen bg-[#07070a] text-[#f3f4f9] overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Subtle Background Glow Orbs for Depth */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/3 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Floating Glass Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        watchlistCount={count}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        {/* Cinematic Hero */}
        <HeroSection
          featuredAnime={featuredAnime}
          onSelectAnime={(anime) => setSelectedAnime(anime)}
          onWatchTrailer={(anime) => setTrailerAnime(anime)}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Trending Top Anime */}
        <TrendingSection
          animeList={animeList}
          onSelectAnime={(anime) => setSelectedAnime(anime)}
          onWatchTrailer={(anime) => setTrailerAnime(anime)}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Explore All 50 Anime */}
        <ExploreSection
          animeList={animeList}
          onSelectAnime={(anime) => setSelectedAnime(anime)}
          onWatchTrailer={(anime) => setTrailerAnime(anime)}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Seasonal Anime */}
        <SeasonalSection
          animeList={animeList}
          onSelectAnime={(anime) => setSelectedAnime(anime)}
          onWatchTrailer={(anime) => setTrailerAnime(anime)}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Iconic Characters Showcase */}
        <CharactersSection
          animeList={animeList}
          onSelectAnime={(anime) => setSelectedAnime(anime)}
        />
      </main>

      {/* Footer & Creator Info */}
      <Footer />

      {/* Full Anime Details Modal */}
      <AnimeDetailModal
        anime={selectedAnime}
        onClose={() => setSelectedAnime(null)}
        onWatchTrailer={(anime) => setTrailerAnime(anime)}
        onToggleWatchlist={toggleWatchlist}
        isInWatchlist={isInWatchlist}
        onSelectRelated={(anime) => setSelectedAnime(anime)}
        allAnime={animeList}
      />

      {/* Trailer Video Player Modal */}
      <TrailerModal
        anime={trailerAnime}
        onClose={() => setTrailerAnime(null)}
      />

      {/* Quick Search / Command Palette */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        animeList={animeList}
        onSelectAnime={(anime) => setSelectedAnime(anime)}
      />

      {/* Watchlist Drawer */}
      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlistIds={watchlist}
        allAnime={animeList}
        onSelectAnime={(anime) => setSelectedAnime(anime)}
        onRemove={toggleWatchlist}
        onClear={clearWatchlist}
      />
    </div>
  );
};

export default App;
